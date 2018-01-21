import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IsotopesService } from '../services/isotopes.service'



@Component({
  selector: 'app-isotope-edit',
  templateUrl: './isotope-edit.component.html',
  styleUrls: ['./isotope-edit.component.css']
})
export class IsotopeEditComponent implements OnInit {
  isotope;
  endingBalance;
  constructor( private myRoute: ActivatedRoute,
               private isotopesService: IsotopesService,
               private myNavigator: Router) { }
ngOnInit() {
   this.myRoute.params.subscribe((params) => {
   this.getIsotopeDetails(params['id']);
  });
}
  getIsotopeDetails(id) {
    this.isotopesService.isotopeDetails(id)
    .subscribe((theIsotopeDetails) => {
    this.isotope = theIsotopeDetails;
    this.endingBalance = this.isotope.startingBalance + this.isotope.qtrReceivedAmount - this.isotope.qtrDisposedAmount;
    console.log('========>', this.isotope)
    })
                  // .((err) => {
                  //   this.errorMessage = 'Could not retrieve isotope details. Try again later.';
                  // });
  }
  onKey() {
    console.log('_+_+_+_+_+_+_+')
    this.endingBalance = this.isotope.startingBalance + this.isotope.qtrReceivedAmount - this.isotope.qtrDisposedAmount;
    console.log(this.endingBalance)
  }

  editIsotope() {
    // console.log('<><><><><><>>', this.isotope)
    this.isotope.currentAmount = this.endingBalance
    this.isotopesService.editIsotope(this.isotope)
    .then((theEditedIsotopeFromApi) => {
      this.myNavigator.navigate(['/isotopes']);
    })
     .catch((err) => {
       // fix this if error redirect to profile with a message
    //  this.user = null;
    //  this.error = err;
     });

     // thePromise.then((userInfo) => {
     //   this.user = userInfo;
     //   this.error = null;
     // });
 
     // thePromise.catch((err) => {
     //   this.user = null;
     //   this.error = err;
     // });
   }

}
