import { Component,Input } from '@angular/core';
import { Animal } from '../shared/model/animal';
import { AnimalSpecies } from '../shared/model/animal-species';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-summary.component.html',
  styleUrl: './animal-summary.component.css'
})
export class AnimalSummaryComponent {

  animalsMap: Map<AnimalSpecies,number> =new Map<AnimalSpecies,number>();

  @Input() set animals(animalList : Animal[]) {
    for(let animal of animalList){
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
