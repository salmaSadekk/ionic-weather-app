import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Form, NgForm, FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { WeatherPage } from '../weather/weather';
import {Observable} from 'rxjs/Observable' ;
import { WeatherProvider } from '../../providers/weather/weather';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html' ,
  providers:[WeatherProvider]
})
export class HomePage {
  myDiv = document.getElementById("myDiv");
cities:string[] ;
public weatherList=[] ;
recipeform :FormGroup ; 
city:string;
icon:string ;
cuttentTemp:string ;
MaxTemp:string ;
MinTemp:string;
country='eg' ;
Description:any ;
DescriptionWeather:string ;
DescriptionWind:string ;
Descriptioncloud:string ;
Des:any ;
visibilezdiv:boolean=false ;

  constructor(public weather:WeatherProvider , private navCtrl: NavController) {
    
this.cities=["Alexandria","Aswan","Asyut","Beheira","Beni Suef","Cairo","Dakahlia","Damietta","Faiyum","Gharbia","Giza","Ismailia","Kafr El Sheikh","Luxor","Matruh","Minya","Monufia","New Valley","North Sinai","Port Said","Qalyubia","Qena","Red Sea","Sharqia","Sohag","South Sinai","Suez"] ;
this.recipeform= new FormGroup({
'city':new FormControl(null, Validators.required) 
}) ;
}

//comment
 
  onBtnClick(){
    this.city=this.recipeform.value.city  ;
   // this.navCtrl.push(WeatherPage) ;
   console.log("weather===>"+this.city );
   this.getWeather(this.recipeform.value.city ,this.country)  ;
  }
  getWeather(city:string , country:string){
     
      this.weather.city(city,country).subscribe(
        (data:any)=>{
          console.log("incoming data")
           
         
        
         
         this.Description=data._body;
         console.log("weather===>"+data._body );
         this.Des = JSON.parse( this.Description) ;
         this.DescriptionWeather= this.Des.weather[0].description ;
         this.DescriptionWind =this.Des.wind.speed +"deg"+this.Des.wind.deg ;
         this.Descriptioncloud =this.Des.clouds.all ;
         this.cuttentTemp = this.Des.main.temp ;
         this.MaxTemp = this.Des.main.temp_max ;
         this.MinTemp = this.Des.main.temp_min ;
         this.icon ="http://openweathermap.org/img/w/" + this.Des.weather[0].icon +".png" ;
         this.visibilezdiv = true;

        

        } ,
     (err) => {
      console.log(err) ;
     } 
      );
  }

}
