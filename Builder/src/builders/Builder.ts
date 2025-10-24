export interface Builder<T> {
  reset(): void;
  getResult(): T;
}
