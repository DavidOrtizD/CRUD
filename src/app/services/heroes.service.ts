import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero  } from '../interfaces/hero';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  httpURL:string;
  httpHeroURL:string;
  constructor(private http:HttpClient) {
    this.httpURL = 'https://crudproj-a7f33.firebaseio.com/Heroes.json';
    this.httpHeroURL = 'https://crudproj-a7f33.firebaseio.com/Heroes/';
  }

  createNewHero(hero:Hero){
    let body:string = JSON.stringify(hero);
    let header:HttpHeaders = new HttpHeaders({
      'content-type':'applicaion/json'
    });

    return this.http.post(this.httpURL,body, {headers:header} )
    .pipe(
      map( (res)=>{
      console.log(res);
      return res;
      }
    ));
  }

  updateHero(hero:Hero, key$:string){
    let body:string = JSON.stringify(hero);
    let header:HttpHeaders = new HttpHeaders({
      'content-type':'applicaion/json'
    });
    let currentURL:string = `${this.httpHeroURL}${key$}.json`

    return this.http.put(currentURL,body, {headers:header} )
    .pipe(
      map( (res)=>{
      console.log(res);
      return res;
      }
    ));
  }

  getSingleHero(key$:string){
    let header:HttpHeaders = new HttpHeaders({
      'content-type':'applicaion/json'
    });
    let currentURL:string = `${this.httpHeroURL}${key$}.json`;

    return this.http.get(currentURL, {headers:header} )
    .pipe(
      map( (res)=>{
      return res;
      }
    ));
  }

  getAllHeroes(){
    let header:HttpHeaders = new HttpHeaders({
      'content-type':'applicaion/json'
    });

    return this.http.get(this.httpURL, {headers:header} )
    .pipe(
      map( (res)=>{
      return res;
      }
    ));
  }

  deleteHero(key$:string){
    let currentURL:string = `${this.httpHeroURL}${key$}.json`;

    return this.http.delete(`${currentURL}`)
    .pipe(
      map( (res)=>{
      return res;
      }
    ));
  }


}
