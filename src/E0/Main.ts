import Runnable from './interfaces/Runnable';
import Box from './models/Box';

export default class Main implements Runnable {
  start(): void {
    const box = new Box<number>(2);
    console.log(typeof box.number);
    //console.log(box.number.toUpperCase());

    const otherBox = new Box<string>('Yosef');
    console.log(typeof otherBox.number);
    console.log(otherBox.number.toUpperCase());
  }
}
