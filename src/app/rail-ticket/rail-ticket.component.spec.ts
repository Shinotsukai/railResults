import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailTicketComponent } from './rail-ticket.component';

describe('RailTicketComponent', () => {
  let component: RailTicketComponent;
  let fixture: ComponentFixture<RailTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RailTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
