import { Animal } from "./animal";
import { AnimalSpecies } from "./animal-species";

export class Cat implements Animal {
   name: string;
   species:AnimalSpecies;
    constructor(name: string) {
     this.name = name;
     this.species= AnimalSpecies.Cat;
   }
    makeSound(): string {
     return 'Meow!';
   }
 }
