import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AnimalComponent } from "./animal/animal.component";
import { Dog } from './shared/model/dog';
import { Cat } from './shared/model/cat';
import { Animal } from './shared/model/animal';
import { AnimalSummaryComponent } from "./animal-summary/animal-summary.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, AnimalComponent, AnimalSummaryComponent]
})
export class AppComponent {
    myDog = new Dog("Muki");
    myCat = new Cat("Shaul");
    myCat2 = new Cat("Mitsi");
    animals:Animal[]=[this.myCat,this.myDog,this.myCat2]
}
