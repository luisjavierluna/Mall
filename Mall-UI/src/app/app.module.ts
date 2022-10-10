import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuModelComponent } from './mega-boxes/menu-model/menu-model.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuModelComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
