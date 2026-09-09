export class SingletonCounter {
  counter: number = 0;

  private static instance: SingletonCounter;

  private constructor() {}

  public static getInstance(): SingletonCounter {
    if (!SingletonCounter.instance) {
      SingletonCounter.instance = new SingletonCounter();
    }

    return SingletonCounter.instance;
  }

  inc(): number {
    this.counter += 1;
    return this.counter;
  }
}
