interface Pingable {
  ping(): void;
  red: string;
}

class Ball implements Pingable {
  red = 'red';
  ping(): void {
    console.log('hello Pingable');
  }
}

const ball: Ball = new Ball();
console.log('ball: ', ball.red);
ball.ping();
