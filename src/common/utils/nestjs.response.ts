import { ResponseStatus } from './status.enum';

export class NestJSReponse<T> {
  status: ResponseStatus;
  item: T;
  items: T[];
  message: string;
  rowCount: number;

  static toResponse<T>(result: T, message?: string): NestJSReponse<T> {
    const defaultResponse = new NestJSReponse<T>();
    defaultResponse.status = ResponseStatus.SUCCESS;
    defaultResponse.message = message;
    defaultResponse.item = result;
    return defaultResponse;
  }
  static toResponseArray<T>(result: T[], message?: string): NestJSReponse<T> {
    const defaultResponse = new NestJSReponse<T>();
    defaultResponse.status = ResponseStatus.SUCCESS;
    defaultResponse.message = message;
    defaultResponse.items = result;
    defaultResponse.rowCount = result.length;
    return defaultResponse;
  }
}
