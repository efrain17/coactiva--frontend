import { Component } from '@angular/core';
import { ApiService } from './services/api.service'
import { TitularesService } from './services/titulares.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [ApiService, TitularesService]

})
export class AppComponent {
  title = 'app worksss';
}
