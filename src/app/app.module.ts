import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule,HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { GaleriaComponent } from './components/home/galeria.component';


// Routes
import { APP_ROUTING } from './app.routes';

// Pipes
import { PeliculasImgPipe } from './pipes/peliculas-img.pipe';

// Services
import { PeliculasService } from './services/peliculas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeliculaComponent,
    HomeComponent,
    BuscarComponent,
    PeliculasImgPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
