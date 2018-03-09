import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule }  from '@angular/router'
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot([
     
      { path : 'welcome', component : WelcomeComponent },
      { path : ' ', redirectTo : 'welcome', pathMatch : 'full' },
      { path : '**', redirectTo : 'welcome', pathMatch : 'full' },
    ])
    ,
    ProductModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
