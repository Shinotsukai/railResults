import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  @Input() fontColor:string="";
  @Input() showArrow:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
