import { CountriesService } from './../../services/countries.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../interfaces/country.interface';
import { CacheStore } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit{

  public countries:     Country[]=[];
  public isLoading:     boolean = false;
  public initialValue:  string = '';


  constructor(private CountriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCapital.countries;
    this.initialValue = this.CountriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term :string):void{

    this.isLoading=true;

    this.CountriesService.searchCapital( term )
      .subscribe(countries =>{
        this.countries=countries
        this.isLoading = false
      });

  }

}
