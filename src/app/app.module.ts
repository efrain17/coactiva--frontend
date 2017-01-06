import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule,Routes} from '@angular/router'

import { CommonModule }      from '@angular/common';
import { DataTableModule } from "angular2-datatable";

import { AppComponent } from './app.component';
import { JuicioCoactivaComponent } from './juicio-coactiva/juicio-coactiva.component';
import { TitularesComponent } from './titulares/titulares.component';
import { DataFilterPipe }   from './titulares/data-filter.pipe';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { SelectTitularComponent } from './select-titular/select-titular.component';
import { TitularesEmitidosComponent } from './titulares-emitidos/titulares-emitidos.component';
import { MypagtableComponent } from './mypagtable/mypagtable.component';
import { SelectOrdenPagoComponent } from './select-orden-pago/select-orden-pago.component';

const routes = [
{
  path: '', 
  component : MypagtableComponent
},
{
  path: 'ag/titulares', 
  component : TitularesComponent
},
{
  path : 'ag/course/:id',
  component: TitularesComponent
},
{
  path : 'ag/titularesemitidos',
  component: TitularesEmitidosComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    JuicioCoactivaComponent,
    TitularesComponent,
    DataFilterPipe,
    SeleccionComponent,
    SelectTitularComponent,
    TitularesEmitidosComponent,
    MypagtableComponent,
    SelectOrdenPagoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    CommonModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
