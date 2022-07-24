import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linker',
  templateUrl: './linker.component.html',
  styleUrls: ['./linker.component.css']
})
export class LinkerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isShowDiv=false
  toggleDisplay(){
    this.isShowDiv= !this.isShowDiv
  }
  isShowDiv1=false
  toggleDisplay1(){
    this.isShowDiv1=!this.isShowDiv1
  }

}
