import { Country } from "./country.interface";
import { Continente } from "./region.type";



export interface CacheStore{

  byCapital:TermCountries;
  byCountries:TermCountries;
  byRegion: RegionCountries;

}


export interface TermCountries{

  term: string;
  countries: Country[];
}

export interface RegionCountries{

  region: Continente;
  countries: Country[];
}
