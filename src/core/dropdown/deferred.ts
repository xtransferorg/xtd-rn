export class Deferred<T extends any> {
  promise: Promise<T>;

  resolve!: (value?: any) => void;

  reject!: (reason?: any) => void;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
