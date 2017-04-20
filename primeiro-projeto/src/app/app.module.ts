import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Importando meus componentes
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
