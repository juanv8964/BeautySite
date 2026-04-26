import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_SESSION_COOKIE = "beautysite_admin_session";

const SESSION_DURATION_SECONDS = 60 * 60 * 12;

type AdminSessionPayload = {
  expiresAt: number;
  username: string;
};

function getRequiredEnv(name: "ADMIN_USERNAME" | "ADMIN_PASSWORD" | "ADMIN_SESSION_SECRET") {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function createSignature(payload: string) {
  const secret = getRequiredEnv("ADMIN_SESSION_SECRET");

  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function getAdminCredentials() {
  return {
    password: getRequiredEnv("ADMIN_PASSWORD"),
    username: getRequiredEnv("ADMIN_USERNAME"),
  };
}

export function createAdminSessionToken(username: string) {
  const payload: AdminSessionPayload = {
    expiresAt: Date.now() + SESSION_DURATION_SECONDS * 1000,
    username,
  };

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = createSignature(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return false;
  }

  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return false;
  }

  const expectedSignature = createSignature(encodedPayload);
  const receivedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (receivedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  if (!timingSafeEqual(receivedBuffer, expectedBuffer)) {
    return false;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as AdminSessionPayload;
    const { username } = getAdminCredentials();

    return payload.username === username && payload.expiresAt > Date.now();
  } catch {
    return false;
  }
}

export function getAdminSessionCookieOptions() {
  return {
    httpOnly: true,
    maxAge: SESSION_DURATION_SECONDS,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}
