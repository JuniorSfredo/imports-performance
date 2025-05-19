import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ErrorResponse } from '../exceptions/interfaces/error.response';

@Catch()
export class GlobalFilterException implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost): any {
    console.log(exception);
    const { httpAdapter } = this.httpAdapterHost;
    const context = host.switchToHttp();

    const exceptionResponse = exception.getResponse();
    const httpStatus = exception.getStatus();

    const response: ErrorResponse = {
      status: httpStatus,
      timestamp: new Date().toISOString(),
      message:
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null &&
        'message' in exceptionResponse
          ? (exceptionResponse as { message: string; errors: string[] }).message
          : (exception.message ?? 'Error has occurred'),
    };

    if (
      typeof exceptionResponse === 'object' &&
      exceptionResponse !== null &&
      'errors' in exceptionResponse &&
      Array.isArray(
        (exceptionResponse as { message: string; errors: string[] }).errors,
      )
    ) {
      response.errors =
        (exceptionResponse as { message: string; errors: string[] }).errors
          .length > 0
          ? (exceptionResponse as { message: string; errors: string[] }).errors
          : undefined;
    }

    httpAdapter.reply(context.getResponse(), response, httpStatus);
  }
}
