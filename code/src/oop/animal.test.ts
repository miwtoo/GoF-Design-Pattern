import { Animal, Cat, Dog, Owner, Pet } from "./animal";

// describe('Animal', () => {
//     it('should be able to eat', () => {
//         const animal = new Animal('Dog');
//         expect(animal.eat()).toBe('I am eating');
//     });
// });

describe('Dog', () => {
    it('should be able to eat like amimal', () => {
        let animal: Animal = new Dog('Poodle');
        expect(animal.eat()).toBe('I am eating like dog');
        (animal as Dog).bark();

        // animal = new Animal('Poodle');
        // expect(animal.eat()).toBe('I am eating');
    });
});

describe('Owner', () => {
    it('should be able to play with dog', () => {
        const owner = new Owner();
        let pet: Pet = new Dog('Poodle');
        owner.have(pet);

        expect(owner.play()).toBe('Whoof! Whoof!');

        pet = new Cat('Thai');
        owner.have(pet);

        expect(owner.play()).toBe('Meow!');

    });
});