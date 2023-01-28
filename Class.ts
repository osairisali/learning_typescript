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

console.log("----------------------------");

class ClassWithConstructor {
  id: number;
  constructor(_id: number) {
    this.id = _id;
  }

  print(): void {
    console.log(`this.id = ${this.id}`);
  }
}

let classWithConstructor = new ClassWithConstructor(99);
classWithConstructor.print();
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

console.log("----------------------------");
class ClassWithPublicProperty {
  //   public id: number;
  constructor(public id: number) {
    this.id = id;
  }

  printPublicId(): void {
    console.log(`printPublicId() is called with id = ${this.id}`);
  }
}

const classWithPublicProperty = new ClassWithPublicProperty(7);
classWithPublicProperty.printPublicId();
classWithPublicProperty.id = 99;
classWithPublicProperty.printPublicId();

console.log("----------------------------");
class ClassWithPrivateProperty {
  constructor(private id: string) {
    this.id = id;
  }

  printPrivateId(): void {
    console.log(`printPrivateId() is called with id = ${this.id}`);
  }
}

const classWithPrivateProperty = new ClassWithPrivateProperty("ulala727");
classWithPrivateProperty.printPrivateId();
// will return error
// classWithPrivateProperty.id;
// classWithPrivateProperty.id = '909srgr'

console.log("----------------------------");
class ClassWithReadonlyProperty {
  readonly username: string;
  private id: number;
  constructor(_username: string, _id: number) {
    this.username = _username;
    this.id = _id;
  }

  printUserName(): void {
    console.log(`username instantiated is ${this.username}`);
  }

  // error
  //   private changeUsername(newUserName: string): void {
  //     this.username = newUserName;
  //   }

  // can only be used within this class
  private changeId(_newId: number): void {
    this.id = _newId;
  }
}

const classWithReadOnlyProperty = new ClassWithReadonlyProperty("osairisali", 768);
classWithReadOnlyProperty.printUserName();
// will throw error
// classWithReadOnlyProperty.username = "igyer6";
// classWithReadOnlyProperty.changeId(78887)