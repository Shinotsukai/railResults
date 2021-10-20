import { ITicket } from "./rail-ticket.model";

export interface ILegs {
    LegDirection: string;
    ArrStnFull: string;
    DepStnFull: string;
    RouteTransport: string;
    Operator: string;
    DepStn: string;
    DepDate: string;
    LegCo2: string;
    SeatsReservable: string;
    RouteBookingCode: string;
    ArrStn: string;
    ClassesAvailForLeg: string;
    sTrnUltimateDest: string;
    ArrTime: string;
    LegDistance: string;
    TKTs: ITicket[];
    SeatsSelected: string;
    RouteName: string;
    NumberOfStops: string;
    sTrnStartingPoint: string;
    DepTime: string;
  }
  