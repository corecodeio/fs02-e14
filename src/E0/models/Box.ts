export default class Box<T> {
  constructor(private value: T) {}

  get number(): T {
    return this.value;
  }

  set number(n: T) {
    this.value = n;
  }

  // public getNumber(): number {
  //   return this.value;
  // }

  // public setNumber(n: number): void {
  //   this.value = n;
  // }
}
