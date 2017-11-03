import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


//import components
import {MenuComponent} from "./menu/menu.component";
import {FormComponent} from "./form/form.component";
import {ListComponent} from "./list/list.component";
import {DropdownComponent} from "./dropdown/dropdown.component";

//import components

//import service
import {HttpFruitService} from "./services/FruitService.service";
//import service

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    ListComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpFruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
