import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './myapp/home/home.component';
import { ServicesComponent } from './myapp/services/services.component';
import { ContactUsComponent } from './myapp/contact-us/contact-us.component';
import { AboutComponent } from './myapp/about/about.component';
import { StoreComponent } from './myapp/store/store.component';
import { FormsModule } from '@angular/forms';
import { TdformComponent } from './myapp/tdform/tdform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutComponent,
    StoreComponent,
    TdformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
