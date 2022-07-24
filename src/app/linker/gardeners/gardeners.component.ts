import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gardeners',
  templateUrl: './gardeners.component.html',
  styleUrls: ['./gardeners.component.css']
})
export class GardenersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState = false;
}
