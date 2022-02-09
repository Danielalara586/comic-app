import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  
  heroes:any[] = []
  term:string;

  constructor(private _activatedRoute:ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() 
  {
    this._activatedRoute.params.subscribe(params =>
      {
        this.term = params['term'];
        this.heroes = this._heroesService.searchHeroes(params['term']);
        console.log(this.heroes);
      })
  }


}
