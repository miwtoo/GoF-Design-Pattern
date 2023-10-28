export abstract class Animal {
    private breed: string = 'unknown';

    constructor(breed: string) {
        this.breed = breed;
    }

    abstract eat(): string;
}

export interface Pet {
    play(): string;
}

export class Dog extends Animal implements Pet {
    eat(): string {
        return 'I am eating like dog'
    }

    bark(): string {
        return 'Whoof! Whoof!'
    }
    play(): string {
        return this.bark()
    }
}

export class Cat extends Animal implements Pet {
    eat(): string {
        return 'I am eating like cat';
    }
    cry(): string {
        return 'Meow!';
    }
    play(): string {
        return this.cry()
    }
}

export class Owner {
    private pet: Pet | undefined;

    have(pet: Pet) {
        this.pet = pet;
    };

    play(): any {
        if (this.pet) {
            return this.pet.play();
        };
        return 'I do not have a dog';
    }
}