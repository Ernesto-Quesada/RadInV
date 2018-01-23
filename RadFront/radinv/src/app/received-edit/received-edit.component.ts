import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IsotopesService } from '../services/isotopes.service'


@Component({
  selector: 'app-received-edit',
  templateUrl: './received-edit.component.html',
  styleUrls: ['./received-edit.component.css']
})
export class ReceivedEditComponent implements OnInit {
timeHTML: String;
displayTime: String;
receivedAmount: Number = 300;
  constructor() { }

  ngOnInit() {
    this.getTime();
  }
  getTime() {
    this.timeHTML = new Date().toISOString();
    this.displayTime = this.timeHTML.substr(0, 10)

  }

}
