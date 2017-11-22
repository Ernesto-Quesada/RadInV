import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IsotopesService } from '../services/isotopes.service'

@Component({
  selector: 'app-isotope-detail',
  templateUrl: './isotope-detail.component.html',
  styleUrls: ['./isotope-detail.component.css']
})
export class IsotopeDetailComponent implements OnInit {

  isotope: any;
  errorMessage: any
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
    .then((theIsotopeDetails) => {
      this.isotope = theIsotopeDetails;
    })
    .catch((err) => {
      this.errorMessage = 'Could not retrieve isotope details. Try again later.';
    });
  }

}
