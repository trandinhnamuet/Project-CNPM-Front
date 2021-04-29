import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { SearchBoxComponent } from './top-bar/search-box/search-box.component';
import { SuggestionBarComponent } from './suggestion-bar/suggestion-bar.component';
import { OptionBarComponent } from './option-bar/option-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    OptionBarComponent,
    SuggestionBarComponent,
    SearchBoxComponent,
    RightBarComponent,
    ProductDetailsComponent,
    MainPageComponent,
    CartComponent,
    LeftBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
