import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRailData } from '../models/rail-data.model';

@Injectable({
  providedIn: 'root'
})
export class RailService {

  constructor(private http:HttpClient) { }

  loadResults(){
    return this.http.get<IRailData[]>("../../assets/results.json");
  }
}
