import { Component } from '@angular/core';
import { Dog } from '../shared/model/dog';
import { Cat } from '../shared/model/cat';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [MatIconModule,RouterModule,MatTableModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {

  displayedColumns: string[] = ['name', 'type', 'index'];
  dataSource = [new Dog("Kinder"),new Cat("Shaul"), new Cat("Mitsi")]

}
