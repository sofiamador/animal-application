import { Component, Input } from '@angular/core';
import { AnimalSpecies } from '../shared/model/animal-species';
import { Animal } from '../shared/model/animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-summary.component.html',
  styleUrl: './animal-summary.component.css'
})
export class AnimalSummaryComponent {

  animalsMap=new Map<AnimalSpecies,number>()

  @Input()
  set animalArray(animalArray:Animal[]){
    for(let animal of animalArray){
      let species = animal.species
      if (this.animalsMap.has(species)) {
        const currentValue = this.animalsMap.get(species)!;
        this.animalsMap.set(species, currentValue + 1);
      } else {
        this.animalsMap.set(species, 1);
      }
    }
  }
}
