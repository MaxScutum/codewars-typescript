# CodeWars TypeScript Solutions 7 kyu TypeScript.

---

## Learning TypeScript. Classes & Interfaces. Inheritance

Description:
Learning TypeScript. Classes & Interfaces. Inheritance.

Overview:

Preloaded for you in this Kata is an interface `IAnimal`:

```typescript
declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string,
  ): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}
```

Task

I. Animal

Define class `Animal` that implements `IAnimal`.

The constructor function for `Animal` should accept 5 arguments in total in the following order:

`name, age, legs, species, status`

Furthermore, the `introduce()` method for `Animal` should return string with the following content:

```text
Hello, my name is ${name} and I am ${age} years old.
```

When done define the following classes that inherit from `Animal` using the `extends` keyword.

II. Shark

The constructor function for `Shark` should accept 3 arguments in total in the following order:

`name, age, status`

All sharks should have a leg count of `0` and should have a `species` of `"shark"`.

III. Cat

The constructor function for `Cat` should accept the same 3 arguments as with `Shark`:

`name, age, status`

Cats should always have a leg count of `4` and a species of `"cat"`.

Furthermore, the `introduce()` method for `Cat` should be identical to the original `introduce()` except there should be exactly 2 spaces and the words `"Meow meow!"` after that.

For example:

```typescript
var example = new Cat("Example", 10, "Happy");

example.introduce() ===
  "Hello, my name is Example and I am 10 years old.  Meow meow!";
```

Notice the TWO spaces — very important.

IV. Dog

The `Dog` constructor should accept 4 arguments in the specified order:

`name, age, status, master`

`master` is the name of the dog's master which will be a string.

Dogs should have `4` legs and a species of `"dog"`.

Dogs have an identical `introduce()` method as any other animal, but they have their own method called `greetMaster()` which accepts no arguments and returns:

```text
Hello (insert_master_name_here)
```

Replace `(insert_master_name_here)` with the name of the dog's master.

Credits

This is TypeScript version of kata "Fun with ES6 Classes #2 - Animals and Inheritance" by @donaldsebleung.

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

---

### Given Code

```typescript
declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string,
  ): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}
```

---

### Solution

```typescript
declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string,
  ): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}

export class Animal implements IAnimal {
  constructor(
    public name: string,
    public age: number,
    public legs: number,
    public species: string,
    public status: string,
  ) {}
  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export class Shark extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 0, "shark", status);
  }
}

export class Cat extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 4, "cat", status);
  }
  introduce(): string {
    return `${super.introduce()}  Meow meow!`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    age: number,
    status: string,
    public master: string,
  ) {
    super(name, age, 4, "dog", status);
  }
  greetMaster(): string {
    return `Hello ${this.master}`;
  }
}
```

---

### Tests

```typescript
import { Animal, Cat, Dog, Shark } from "./solution";
import { expect } from "chai";

describe("The Animal class", () => {
  it("should construct an object properly", () => {
    var octopussy = new Animal(
      "Octopussy",
      2,
      8,
      "octopus",
      "I'm suffering a sting",
    );

    expect(octopussy.name).to.equal("Octopussy");
    expect(octopussy.age).to.equal(2);
    expect(octopussy.legs).to.equal(8);
    expect(octopussy.species).to.equal("octopus");
    expect(octopussy.status).to.equal("I'm suffering a sting");

    expect(octopussy.introduce()).to.equal(
      "Hello, my name is Octopussy and I am 2 years old.",
    );
  });
});

describe("The Shark class", () => {
  it("should construct an object properly", () => {
    var billy = new Shark("Billy", 3, "Alive and well");

    expect(billy.name).to.equal("Billy");
    expect(billy.age).to.equal(3);
    expect(billy.legs).to.equal(0);
    expect(billy.species).to.equal("shark");
    expect(billy.status).to.equal("Alive and well");

    expect(billy.introduce()).to.equal(
      "Hello, my name is Billy and I am 3 years old.",
    );

    var charles = new Shark("Charles", 8, "Finding a mate");

    expect(charles.name).to.equal("Charles");
    expect(charles.age).to.equal(8);
    expect(charles.legs).to.equal(0);
    expect(charles.species).to.equal("shark");
    expect(charles.status).to.equal("Finding a mate");

    expect(charles.introduce()).to.equal(
      "Hello, my name is Charles and I am 8 years old.",
    );
  });
});

describe("The Cat class", () => {
  it("should construct an object properly", () => {
    var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");

    expect(cathy.name).to.equal("Cathy");
    expect(cathy.age).to.equal(7);
    expect(cathy.legs).to.equal(4);
    expect(cathy.species).to.equal("cat");
    expect(cathy.status).to.equal("Playing with a ball of yarn");

    expect(cathy.introduce()).to.equal(
      "Hello, my name is Cathy and I am 7 years old.  Meow meow!",
    );

    var spitsy = new Cat("Spitsy", 6, "sleeping");

    expect(spitsy.name).to.equal("Spitsy");
    expect(spitsy.age).to.equal(6);
    expect(spitsy.legs).to.equal(4);
    expect(spitsy.species).to.equal("cat");
    expect(spitsy.status).to.equal("sleeping");

    expect(spitsy.introduce()).to.equal(
      "Hello, my name is Spitsy and I am 6 years old.  Meow meow!",
    );
  });
});

describe("The Dog class", () => {
  it("should construct an object properly", () => {
    var doug = new Dog("Doug", 12, "Serving his master", "Eliza");

    expect(doug.name).to.equal("Doug");
    expect(doug.age).to.equal(12);
    expect(doug.legs).to.equal(4);
    expect(doug.species).to.equal("dog");
    expect(doug.status).to.equal("Serving his master");

    expect(doug.introduce()).to.equal(
      "Hello, my name is Doug and I am 12 years old.",
    );

    expect(doug.greetMaster()).to.equal("Hello Eliza");
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/59138d93eefeaecdbe000031)
