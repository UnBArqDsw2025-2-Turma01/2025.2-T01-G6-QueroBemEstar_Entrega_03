export abstract class Notification {
  constructor(private readonly code: string) {}

  getCode(): string {
    return this.code;
  }

  abstract deliver(): void;
  abstract dismiss(): void;
  abstract log(): void;
}
