import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './level.component';



@NgModule({
  declarations: [LevelComponent],
  imports: [
    CommonModule
  ],
  exports:[LevelComponent]
})
export class LevelModule { }
