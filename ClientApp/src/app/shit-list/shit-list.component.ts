import { Component, OnInit } from '@angular/core';
import { ShitService } from '../providers/shit.service'
@Component({
  selector: 'app-shit-list',
  templateUrl: './shit-list.component.html',
  styleUrls: ['./shit-list.component.css']
})
export class ShitListComponent implements OnInit {

  public shits: any
  constructor(public shit: ShitService) { }

  ngOnInit() {
    this.shit.getAllShits().subscribe(result => {
      console.log(result)
      this.shits = result
    }, error => console.log(error))
  }
}
