import { APIResponse } from "@/types/api";
import { HTTP_STATUS } from "@/constants/axios";
import { ToastType } from "@/types/toast";
import { ToastKeys } from "@/constants/toast";
import { toast } from "sonner";
import { renderMessageToastTsx } from "@/utils/renderTsx";

export class APIError {
  public readonly code: number;
  public readonly message: string | string[];
  public readonly type: ToastType | null;
  public readonly data: null;
  constructor({
    code = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message = "Internal Server Error",
    type = ToastKeys.ERROR,
    data = null,
  }: Partial<APIResponse<null>>) {
    this.code = code;
    this.data = data;
    this.message = message;
    this.type = type;

    if (this.type) {
      toast.error(this.message, {
        description: renderMessageToastTsx(this.message),
      });
    }

    // Ensure instanceof works correctly
    Object.setPrototypeOf(this, APIError.prototype);
  }

  public toJSON(): APIResponse<null> {
    return {
      code: this.code,
      data: null,
      message: this.message,
      type: this.type,
    };
  }
}

export class APISuccess<T> {
  public readonly code: number;
  public readonly data: T | null;
  public readonly message: string | string[];
  public readonly type: ToastType | null;
  constructor({
    code = HTTP_STATUS.OK,
    data = null,
    message = "Success",
    type = ToastKeys.SUCCESS,
  }: Partial<APIResponse<T>>) {
    this.code = code;
    this.data = data;
    this.message = message;
    this.type = type;

    if (this.type) {
      toast.success(this.message, {
        description: renderMessageToastTsx(this.message),
      });
    }

    // Ensure instanceof works correctly
    Object.setPrototypeOf(this, APISuccess.prototype);
  }

  public toJSON(): APIResponse<T> {
    return {
      code: this.code,
      data: this.data,
      message: this.message,
      type: this.type,
    };
  }
}
