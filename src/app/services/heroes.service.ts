import {Injectable} from '@angular/core';
import { HeroesComponent } from '../components/heroes/heroes.component';

@Injectable()
export class HeroesService
{
    private heroes:Hero[] = [
        {
          name: "Aquaman",
          bio: "Aquaman's most recognized power is the telepathic ability to communicate with marine life, which he can summon over great distances.",
          img: "assets/img/aquaman.png",
          apparition: "1941-11-01",
          house:"DC"
        },
        {
          name: "Batman",
          bio: "The main features of Batman are summarized in physical prowess, deductive skills and obsession. Most of the basic characteristics of the comics have varied by the different interpretations that have been given to the character.",
          img: "assets/img/batman.png",
          apparition: "1939-05-01",
          house:"DC"
        },
        {
          name: "Daredevil",
          bio: "Having lost his sight, Daredevil's remaining four senses were heightened by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can see through a sixth sense that serves as a bat-like radar.",
          img: "assets/img/daredevil.png",
          apparition: "1964-01-01",
          house: "Marvel"
        },
        {
          name: "Hulk",
          bio: "His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).",
          img: "assets/img/hulk.png",
          apparition: "1962-05-01",
          house:"Marvel"
        },
        {
          name: "Green Lantern",
          bio: "Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is powered by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a manufacturer found of lamps named Chang).",
          img: "assets/img/linterna-verde.png",
          apparition: "1940-06-01",
          house: "DC"
        },
        {
          name: "Spider-Man",
          bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Man's strength allows him to lift 10 tons or more. Thanks to this great strength, Spider-Man can perform incredible jumps. A \"spider sense\" that lets him know if a danger is looming over him, before it happens. Sometimes this can lead Spider-Man to the source of danger.",
          img: "assets/img/spiderman.png",
          apparition: "1962-08-01",
          house: "Marvel"
        },
        {
          name: "Wolverine",
          bio: "In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, no matter how deadly it may be, and that same power makes him immune to any disease existing on Earth and some aliens. He also possesses superhuman strength, which although it does not compare with that of other superheroes like the Hulk, it does surpass that of any human.",
          img: "assets/img/wolverine.png",
          apparition: "1974-11-01",
          house: "Marvel"
        }
      ];

    constructor()
    {
        console.log("Service ready to use!");
    }

    getHeroes():Hero[]
    {
        return this.heroes
    }

    getHero(idx:number)
    {
        return this.heroes[idx];
    }

    searchHeroes(term:string)
    {
      let heroArray:Hero[] = [];
      term = term.toLowerCase();

      for(let i = 0; i < this.heroes.length; i++)
      {
          let hero = this.heroes[i];
          let name = hero.name.toLowerCase();
          if(name.indexOf(term) >= 0)
          {
            hero.idx = i;
            heroArray.push(hero);
          }
      }
      return heroArray;
    }
}

export interface Hero
{
    name: string;
    bio: string;
    img: string;
    apparition: string;
    house: string;
    idx? : number; 
}