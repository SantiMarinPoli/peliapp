import { Injectable } from '@angular/core';

import { Jsonp,Http } from "@angular/http";

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

 private apikey:string = '53ff83e755405438b048eca8fdb9cf94';
 private urlMoviedb:string = 'https://api.themoviedb.org/3';
  peliculas:any[]=[];

  constructor(private jsonp:Jsonp) {}

  // Las peliculas mas populares en la actualidad
  getPopulares(){
  	let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

  	return this.jsonp.get(url)
  	.pipe(map(res=>res.json().results));
  }

  // peliculas en cartelera
  getCartelera(){
  	let fechaDesde = new Date();
  	let fechaHasta = new Date();

  	fechaHasta.setDate(fechaHasta.getDate()+7);

  	let desdeStr = `${fechaDesde.getFullYear()}-${fechaDesde.getMonth()+1}-${fechaDesde.getDate()}`;
  	let hastaStr = `${fechaHasta.getFullYear()}-${fechaHasta.getMonth()+1}-${fechaHasta.getDate()}`;

  	let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

  	return this.jsonp.get(url)
  	.pipe(map(res=>res.json().results));
  }

  // peliculas infantiles populares

    getInfantiles(){
  	let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

  	return this.jsonp.get(url)
  	.pipe(map(res=>res.json().results));
  }

  // Filtar las peliculas

  buscarPelicula(texto:string){
     let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
    .pipe(map(res=>{
                this.peliculas = res.json().results;
                return res.json().results;
              }));
  }


  // Solocitar una pelicula

    getPelicula(id:string){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
    .pipe(map(res=>res.json()));
  }
}
