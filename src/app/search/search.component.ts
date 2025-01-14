import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-search',
  // standalone: true,
  // imports: [AppModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  searchItem:String = '';
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItem'])
      this.searchItem = params['searchItem'];
    })
  }
  search():void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/' + this.searchItem)
  }

}