interface HumanProps {
  wake(): void;
}
export class Human implements HumanProps {
  wake(): void {
    console.log('wake up!');
  }
}

export class Man extends Human {
  hasSomething(): void {
    for (let i: number = 0; i < 3; i++) {
      console.log('happy new year! I had something!');
    }
  }
}

const tim: Man = new Man();
tim.wake();
tim.hasSomething();
