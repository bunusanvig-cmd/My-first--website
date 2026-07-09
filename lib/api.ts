import { ZodError } from "zod";

export async function readJsonBody(request: Request) {
  try {
    return {
      ok: true as const,
      data: await request.json(),
    };
  } catch {
    return {
      ok: false as const,
      error: "Invalid JSON payload",
    };
  }
}

export function getApiErrorMessage(error: unknown) {
  if (error instanceof ZodError) {
    return error.issues[0]?.message ?? "Invalid request";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unable to process request";
}
