import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AnimalComponent } from "./animal/animal.component";
import { Dog } from './shared/model/dog';
import { Cat } from './shared/model/cat';
import { AnimalSummaryComponent } from "./animal-summary/animal-summary.component";
import { Animal } from './shared/model/animal';


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
    animals:Animal[]=[this.myCat,this.myDog]
}
