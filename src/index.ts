interface SuccessResponse<T> {
  success: true;
  data: T;
}

interface ErrorResponse {
  success: false;
  error: string;
}

type HttpResponse<T> = SuccessResponse<T> | ErrorResponse;

const success = Math.random() < 0.5 ? true : false;

let httpData: HttpResponse<boolean>;

httpData = success
  ? {
      success,
      data: true,
    }
  : {
      success,
      error: "error",
    };
