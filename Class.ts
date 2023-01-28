interface IPrint {
  print(): void;
}

function printClass(a: IPrint) {
  a.print();
}

class ClassA implements IPrint {
  print(): void {
    console.log(`ClassA.print() is called`);
  }
}

class ClassB implements IPrint {
  print(): void {
    console.log(`ClassB.print() called.`);
  }
}

class ClassC {
  print(): void {
    console.log(`ClassC.print() called.`);
  }
}

let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);

let classC = new ClassC();
printClass(classC);
