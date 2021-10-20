import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RailTicketComponent } from './rail-ticket/rail-ticket.component';
import { RailTicketModule } from './rail-ticket/rail-ticket.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RailTicketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
