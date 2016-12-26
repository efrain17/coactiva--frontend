import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule }      from '@angular/common';
import { DataTableModule } from "angular2-datatable";

import { AppComponent } from './app.component';
import { JuicioCoactivaComponent } from './juicio-coactiva/juicio-coactiva.component';
import { TitularesComponent } from './titulares/titulares.component';
import { DataFilterPipe }   from './titulares/data-filter.pipe';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { SelectTitularComponent } from './select-titular/select-titular.component';

@NgModule({
  declarations: [
    AppComponent,
    JuicioCoactivaComponent,
    TitularesComponent,
    DataFilterPipe,
    SeleccionComponent,
    SelectTitularComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CommonModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
