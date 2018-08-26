import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  carteleras:any;
  populares:any;
  infantiles:any;


  constructor(public _ps:PeliculasService) {


  	this._ps.getPopulares()
  			.subscribe(data=>this.populares = data);

    this._ps.getCartelera()
        .subscribe(data=> this.carteleras = data);


    this._ps.getInfantiles()
        .subscribe(data=>this.infantiles = data);

  	

   }

  ngOnInit() {
  }

}
