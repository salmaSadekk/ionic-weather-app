import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
  private appId='&appid=4b5ef6e704e74aedda0b244cefd1e82b' ;
    private baseUrl='http://api.openweathermap.org/data/2.5/' ;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }
  city(city:string ,country:string){
    let url =this.baseUrl +'weather'+'?q=' +city +','+country + this.appId;
    return this.http.get(url) ; }

}
