import {Component, OnInit} from '@angular/core';
import {HeroesService, Hero} from 'src/app/services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit 
{
  heroes:any[] = [];

  constructor(private _heroesService:HeroesService, private _router:Router) 
  {
    // console.log("Constructor");
   }

  ngOnInit() 
  {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  showHero(idx:number)
  {
    this._router.navigate(['/hero', idx]);
  }

}
