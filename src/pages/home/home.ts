import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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
 // @ViewChild('submit') form: ElementRef;
 
cities:string[] ;
public weatherList=[] ;
recipeform :FormGroup ; 
city:string;
icon:string ;
currentTemp:string ;
MaxTemp:string ;
MinTemp:string;
country='eg' ;
Description:any ;
DescriptionWeather:string ;
DescriptionWind:string ;
Descriptioncloud:string ;
Des:any ;
visibilezdiv:boolean=false ;
num:number ;
myForm:any ;
DomReady = false ;




  constructor(public weather:WeatherProvider , private navCtrl: NavController ,private toastCtrl: ToastController) {
  
this.cities=["Alexandria","Aswan","Asyut","Beheira","Beni Suef","Cairo","Dakahlia","Damietta","Faiyum","Gharbia","Giza","Ismailia","Kafr El Sheikh","Luxor","Matruh","Minya","Monufia","New Valley","North Sinai","Port Said","Qalyubia","Qena","Red Sea","Sharqia","Sohag","South Sinai","Suez"] ;
this.recipeform= new FormGroup({
'city':new FormControl(null, Validators.required) 
}) ;
}
ionViewDidEnter(){
  this. myForm = <HTMLFormElement>document.getElementById('f1');
this.DomReady = true ;
}

//comment

triggerFalseClick() {
  console.log("clicked")
  console.log("false clicked" +this.myForm) ;
  console.log(this.recipeform.value);
  this.getWeather(this.recipeform.value.city ,this.country)  ;
}
  onBtnClick(){
    let toast = this.toastCtrl.create({
      message: 'Loading',
      duration: 1000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
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
         this.num = Math.floor(this.Des.main.temp - 273.15) ;
         this.currentTemp = "" + this.num ;
         this.num = this.Des.main.temp_max  - 273.15 ;
         this.MaxTemp =  "" + this.num;
         this.num = this.Des.main.temp_min  - 273.15 ;
         this.MinTemp =   "" + this.num;
         this.icon ="./assets/icon/" + this.Des.weather[0].icon +".svg" ;
         this.visibilezdiv = true;

        

        } ,
     (err) => {
      console.log(err) ;
     } 
      );
  }

}
