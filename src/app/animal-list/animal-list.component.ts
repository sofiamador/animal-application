import { Component } from '@angular/core';
import { Dog } from '../shared/model/dog';
import { Cat } from '../shared/model/cat';
import { Animal } from '../shared/model/animal';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {

  dataSource:Animal[] = [
  new Dog("Kinder"),
  new Cat("Shaul")]
  displayedColumns: string[] = ['name', 'type', 'index'];


}
