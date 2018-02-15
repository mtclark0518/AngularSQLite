import { Component, Inject, OnInit } from '@angular/core';
import { ShitService } from '../providers/shit.service'
import { Shit } from '../models/shit.interface'
@Component({
  selector: 'app-shit-data',
  templateUrl: './shit-data.component.html',
  styleUrls: ['./shit-data.component.css']
})
export class ShitDataComponent implements OnInit {
  public shits: any
  constructor(public shit: ShitService) { }

  ngOnInit() {
    this.shit.getAllShits().subscribe(result => {
      console.log(result)
      this.shits = result
    }, error => console.log(error))
  }

}
