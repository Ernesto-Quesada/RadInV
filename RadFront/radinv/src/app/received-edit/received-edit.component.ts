import { Component, OnInit } from '@angular/core';
import { IsotopesService } from '../services/isotopes.service'
import { ActivatedRoute, Router } from '@angular/router';
import { IsotopeDetailComponent } from 'app/isotope-detail/isotope-detail.component';
import {FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-received-edit',
  templateUrl: './received-edit.component.html',
  styleUrls: ['./received-edit.component.css']
})
export class ReceivedEditComponent implements OnInit {
timeHTML: String;
displayTime: String;
receivedAmount: Number = 300;
theisotopes;
private typeOfIsotope: string[];
receivedIsotope: any= {
  receivedIsotopeName: '',
  receivedAmount: '',
  receivedDate: '',
  manufacturer: '',
  piUser: ''
};

// aqui debe de ir un servicio que hale todos los isotopes
// de iotopeModel de forma que tengalist los is de cada isotopo
// en uso por este usuario

  constructor(private isotopesService: IsotopesService,
              private myNavigator: Router) { }

  ngOnInit() {
    this.getTime();
    this.typeOfIsotope = ['H3', 'P32', 'S35', 'C14']
    // this.isotopesService.getIsotopes()
    //   .subscribe((isotopes ) => {
    //    this.theisotopes = isotopes;
    //    console.log('LL=============>>>>', this.theisotopes)
    // })
  }
  getTime() {
    this.timeHTML = new Date().toISOString();
    this.displayTime = this.timeHTML.substr(0, 10);
  }
  receivedEdit({value}) {
   value.receivedDate = this.timeHTML;
   console.log('<><><><><><>> Component', value)

   this.isotopesService.receivedIsotope( value )
   .then((theReceivedIsotopeFromApi) => {
     this.myNavigator.navigate(['/isotopes']);
   })
    .catch((err) => {
      // fix this if error redirect to profile with a message
   //  this.user = null;
   //  this.error = err;
    });
  }

}
