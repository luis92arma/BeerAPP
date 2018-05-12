import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

import { BeerService } from './service/beer.service';

import { APP_ROUTING } from './app.routes';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { SinEstiloPipe } from './pipes/sin-estilo.pipe';
import { BeerComponent } from './components/beer/beer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    SearchComponent,
    HomeComponent,
    SinfotoPipe,
    SinEstiloPipe,
    BeerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
