import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';

import { DataTableModule, 
          ButtonModule, 
          InputTextModule, 
          InputMaskModule,
          CalendarModule } from 'primeng/primeng';

import { ItemService } from './item.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    
    DataTableModule,
    ButtonModule,
    InputMaskModule,
    InputTextModule,
    CalendarModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
