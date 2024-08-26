import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  public region:Country[]=[];

constructor( private CountriesService:CountriesService){}

  searchByRegion(term:string):void{

    this.CountriesService.searchRegion(term)
      .subscribe(region => {
      this.region=region});
  }

}
