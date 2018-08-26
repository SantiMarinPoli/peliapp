import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar:string = "";

  constructor(public _ps:PeliculasService,
  			  public route:ActivatedRoute) { 

  		this.route.params.subscribe(parametros=>{
  									  if (parametros['texto']) {
  									  	console.log("esta en parametros..")
  									  	this.buscar = parametros['texto'];
  									    this.buscarPelicula();
  									  }
  									});
  }

  ngOnInit() {
  }

  buscarPelicula(){

  	this._ps.buscarPelicula(this.buscar)
  			.subscribe(data=>console.log(data))


  }

}
