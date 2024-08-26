import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  searchByCapital(term:string):void{
    console.log('Desde CapitalByPage');
    console.log({term});
  }

}
