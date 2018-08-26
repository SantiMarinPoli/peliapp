import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { BuscarComponent } from '../app/components/buscar/buscar.component';
import { PeliculaComponent } from '../app/components/pelicula/pelicula.component';


export const app_routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'buscar', component: BuscarComponent },
	{ path: 'buscar/:texto', component: BuscarComponent },
	{ path: 'pelicula/:id/:pag', component: PeliculaComponent },
	{ path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home'},
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);