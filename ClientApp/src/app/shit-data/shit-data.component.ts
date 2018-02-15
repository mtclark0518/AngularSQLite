import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Shit } from '../models/shit.interface'
@Component({
  selector: 'app-shit-data',
  templateUrl: './shit-data.component.html',
  styleUrls: ['./shit-data.component.css']
})
export class ShitDataComponent implements OnInit {
  public shits: Shit[]
  constructor() { }

  ngOnInit() {
  }

}
