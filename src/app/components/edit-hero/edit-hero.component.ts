import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  hero : Hero = {
    name:"",
    house:"",
    bio:""
  }
  id:string;

  constructor( private heroService:HeroesService, private router:Router, private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((data:any)=>{
        this.id = data.id;
    });
  }

  ngOnInit() {
    if(this.id !== "new"){
      this.getHero();
    }
  }
  
  getHero(){
    this.heroService.getSingleHero(this.id)
    .subscribe((data:any)=>{
      this.hero.name = data.name;
      this.hero.bio = data.bio;
      this.hero.house = data.house;
    });
  }

  refreshForm(currentForm:NgForm){
    currentForm.reset({});
    this.router.navigate(['/edithero','new']);
  }

  saveForm(currentForm:NgForm){

    console.log(this.hero);
    console.log(currentForm);

    if(currentForm.valid){

      if(this.id === "new"){
        this.heroService.createNewHero(this.hero)
        .subscribe((data:any) => {
          this.router.navigate(['/edithero',data.name]);
        },
        error => console.log(error));
      }else{
        this.heroService.updateHero(this.hero,this.id)
        .subscribe((data:any)=>{
          console.log(data);
        });
      }

    }
  }

}
