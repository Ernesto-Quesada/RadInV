import { Component, OnInit } from '@angular/core';
import { IsotopesService } from '../services/isotopes.service';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-isotopes',
  templateUrl: './isotopes.component.html',
  styleUrls: ['./isotopes.component.css']
})
export class IsotopesComponent implements OnInit {
theisotopes: IsotopesComponent;
selectedIsotope: IsotopesComponent;

  constructor( private isotopesService: IsotopesService,
               private authService: AuthService,
               private routetheuser: Router) { }

  ngOnInit() {
     this.isotopesService.getIsotopes()
                  .subscribe((isotopes ) => {
                     this.theisotopes = isotopes;
                     console.log('=============>>>>ISOTOPES', this.theisotopes)
                  })
                  // .catch((err) => {
                  //   this.routetheuser.navigate(['/login']);
                  //   });
  // getIsotopes
  }
}// class
