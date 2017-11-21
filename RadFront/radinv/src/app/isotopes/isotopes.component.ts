import { Component, OnInit } from '@angular/core';
import { IsotopesService } from '../services/isotopes.service'

@Component({
  selector: 'app-isotopes',
  templateUrl: './isotopes.component.html',
  styleUrls: ['./isotopes.component.css']
})
export class IsotopesComponent implements OnInit {
theisotopes: any
  constructor( private isotopesService: IsotopesService) { }

  ngOnInit() {
    this.getIsotopes();
  }
  getIsotopes(): void {
    this.isotopesService
        .getIsotopes()
        .then((isotopes ) => {
          this.theisotopes = isotopes;
          console.log(this.theisotopes)
        });
  }

}
