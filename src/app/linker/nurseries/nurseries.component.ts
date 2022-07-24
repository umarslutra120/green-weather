import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurseries',
  templateUrl: './nurseries.component.html',
  styleUrls: ['./nurseries.component.css']
})
export class NurseriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShowDiv=true
  toggleDisplay(){
    this.isShowDiv=!this.isShowDiv
  }
}
