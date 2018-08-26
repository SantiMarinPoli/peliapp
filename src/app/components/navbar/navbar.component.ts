import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {


  constructor(public _ps:PeliculasService,
  			  private router:Router) { }

  ngOnInit() {
  }

  buscarPelicula(texto:string){

  	if (texto.length === 0) {
  		return;
  	}

  	this.router.navigate(['buscar',texto]);

  	// this._ps.buscarPelicula(buscar).subscribe(data=>console.log(data))

  }

}
