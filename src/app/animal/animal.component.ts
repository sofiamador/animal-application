import { Component, Input} from '@angular/core';
import { Animal } from '../shared/model/animal';
import { Dog } from '../shared/model/dog';



@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})

export class AnimalComponent {

 @Input() currentAnimal : Animal = new Dog("Kinder");

}
