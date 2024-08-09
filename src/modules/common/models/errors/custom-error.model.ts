export abstract class CustomError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
