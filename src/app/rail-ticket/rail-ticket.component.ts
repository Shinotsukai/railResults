import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { RailService } from '../services/rail.service';

@Component({
  selector: 'app-rail-ticket',
  templateUrl: './rail-ticket.component.html',
  styleUrls: ['./rail-ticket.component.css'],
})
export class RailTicketComponent implements OnInit {
  results: any;

  showTickets: any = {};
  sortDeparture: boolean = false;

  constructor(private railService: RailService) {}

  ngOnInit() {
    this.getTrainData();
  }

  getTrainData() {
    this.railService.loadResults().subscribe((data) => {
      this.results = data;
    });
  }

  formatTime(time: any) {
    return time.substr(0, time.length - 2) + ':' + time.substr(-2, 2);
  }


  showTicketSection(i: any) {
    this.showTickets[i] = !this.showTickets[i];
  }

  sortByTime(val: any, asc = this.sortDeparture) {
    this.sortDeparture = !this.sortDeparture;

    this.results.sort(function (a: any, b: any) {
      if (asc) {
        return a[val] > b[val] ? 1 : a[val] < b[val] ? -1 : 0;
      } else {
        return b[val] > a[val] ? 1 : b[val] < a[val] ? -1 : 0;
      }
    });
  }
}
