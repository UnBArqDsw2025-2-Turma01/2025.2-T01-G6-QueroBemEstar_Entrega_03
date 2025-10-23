export interface Validation<T = unknown> {
  validate: (input: T) => Error | null
}
