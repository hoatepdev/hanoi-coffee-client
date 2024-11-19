import { ErrorResponse } from "@/types/api";

export class APIError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly details: Record<string, any>;
  public readonly timestamp: string;

  constructor(
    message: string,
    status: number,
    code: string,
    details: Record<string, any> = {}
  ) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.code = code;
    this.details = details;
    this.timestamp = new Date().toISOString();

    // Ensure instanceof works correctly
    Object.setPrototypeOf(this, APIError.prototype);
  }

  public toJSON(): ErrorResponse {
    return {
      message: this.message,
      code: this.code,
      status: this.status,
      details: this.details,
    };
  }
}
