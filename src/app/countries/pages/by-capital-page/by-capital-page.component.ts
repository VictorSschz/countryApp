import { CountriesService } from './../../services/countries.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  public countries: Country[]=[];

  public isLoading = false;

  constructor(private CountriesService:CountriesService){}

  searchByCapital(term :string):void{

    this.isLoading=true;

    this.CountriesService.searchCapital( term )
      .subscribe(countries =>{
        this.countries=countries
        this.isLoading = false
      });

  }

}
