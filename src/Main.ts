import Runnable from './interfaces/Runnable';
import LinkedList from './models/LinkedList';

export default class Main implements Runnable {
  start(): void {
    const l = new LinkedList<number>();
    // console.log(l.toString());
    l.add(2);
    l.add(45);
    l.add(23);
    l.add(12);
    console.log(l.toString());
    console.log(l.size);
    l.remove();
    console.log(l.toString());
    console.log(l.size);
  }
}
