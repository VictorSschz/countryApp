import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Continente } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit {

  public region:Country[]=[];
  public continentes: Continente[]=['Europe', 'Asia', 'America', 'Oceania', 'Africa'];
  public continenteSelec?:Continente;

constructor( private CountriesService:CountriesService){}

  ngOnInit(): void {

    this.region = this.CountriesService.cacheStore.byRegion.countries;
    this.continenteSelec = this.CountriesService.cacheStore.byRegion.region;
  }

  searchByRegion(term:Continente):void{

    this.continenteSelec = term;

    this.CountriesService.searchRegion(term)
      .subscribe(region => {
      this.region=region});
  }

}
