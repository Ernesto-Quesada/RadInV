import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IsotopesService } from '../services/isotopes.service'


@Component({
  selector: 'app-isotope-edit',
  templateUrl: './isotope-edit.component.html',
  styleUrls: ['./isotope-edit.component.css']
})
export class IsotopeEditComponent implements OnInit {
  editInfo: Object= {}
  user: any;
  error: any;
  constructor(private isotopesService: IsotopesService, 
              private myNavigator: Router) { }
  ngOnInit() {
//   this.isotopesService.isLoggedIn()
//   .then((userInfo) => {
//       this.user = userInfo;
//       console.log('this.user inside oninit', this.user);
//       })
// .catch((err) => { this.routetheuser.navigate(['/profile'])})
}


}
