import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [
  //   CommonModule, SearchComponent
  // ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
        foods:Foods[]=[];
        constructor(private fs:FoodService,
          private router:ActivatedRoute
        ) { }

        ngOnInit(): void {

          this.router.params.subscribe(paramas => {
            if(paramas['searchItem'])
              this.foods = this.fs.getAll().filter(food => food.name.toLocaleLowerCase().includes(paramas['searchItem'].toLocaleLowerCase()));
            else
              this.foods = this.fs.getAll();
          })
        }
}
