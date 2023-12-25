import { AnimalSpecies } from "./animal-species";

export interface Animal {
   name: string;
   species: AnimalSpecies;
   makeSound(): string;
 }
