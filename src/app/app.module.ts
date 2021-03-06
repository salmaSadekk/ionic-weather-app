import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherPage } from '../pages/weather/weather';
import { WeatherProvider } from '../providers/weather/weather';

@NgModule({
  declarations: [
    MyApp,
    HomePage ,
    WeatherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) ,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage ,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} ,
    WeatherProvider
  ]
})
export class AppModule {}
