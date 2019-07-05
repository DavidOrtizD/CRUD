import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:object;
  loading:boolean;

  constructor(private heroesServices:HeroesService) {
    this.loading = true;
    this.getHeroes();
  }

  ngOnInit() {
  }

  getHeroes(){
    this.heroesServices.getAllHeroes().subscribe((data)=>{
      this.loading = false;
      this.heroes = data;
      console.log(this.heroes);
    });
  }

  deleteHero(key$:string){
    console.log(key$);
    this.heroesServices.deleteHero(key$).subscribe((data)=>{
      if(data === null){
        delete this.heroes[key$];
      }else{
        console.error("Hero was not deleted");
      }
    });
  }

}
