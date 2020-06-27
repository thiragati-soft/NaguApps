import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { LazyLoadModule } from './lazy-load/lazy-load.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    //AppRoutingModule,
    CommonModule,
    HttpClientModule,
    LazyLoadModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports:[BrowserModule]
})
export class AppModule { }
