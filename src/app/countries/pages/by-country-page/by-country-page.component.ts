import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit{

  public countries:Country[]=[];
  public initialValue: string = '';

  constructor(
    private CountriesService:CountriesService){}


  ngOnInit(): void {

    this.countries = this.CountriesService.cacheStore.byCountries.countries;
    this.initialValue=this.CountriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term:string):void{

    this.CountriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries=countries
    });
  }

}
