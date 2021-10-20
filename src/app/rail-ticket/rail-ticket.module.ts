import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../components/button/button.module';
import { RailTicketComponent } from './rail-ticket.component';
import { LevelModule } from '../components/level/level.module';



@NgModule({
  declarations: [RailTicketComponent],
  imports: [
    CommonModule,
    ButtonModule,
    LevelModule
  ],
  exports:[RailTicketComponent]
})
export class RailTicketModule { }
