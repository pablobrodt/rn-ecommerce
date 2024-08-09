import { CustomError } from './custom-error.model';

export class HttpError extends CustomError {
  status: number;

  constructor(message: string, status: number) {
    super(message);

    this.status = status;
  }
}
