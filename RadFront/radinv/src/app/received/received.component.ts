import { Component, OnInit } from '@angular/core';
import { IsotopesService } from '../services/isotopes.service';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {
receiveds: any;
displayTime;

  constructor( private isotopesService: IsotopesService,
              ) { }

  ngOnInit() {
    this.isotopesService.getReceived()
        .subscribe((receiveds ) => {
        this.receiveds = receiveds;
        this.displayTime = this.receiveds.receivedDate
        console.log('=============>>>>Date', this.receiveds[0].receivedDate)
        console.log('=============>>>>', this.displayTime)

        })
        // .catch((err) => {
        //   this.routetheuser.navigate(['/login']);
        //   });
        // getIsotopes
     this.getTime(this.receiveds);
  }
 getTime(receive) {
// this.displayTime = this.receiveds.receivedDate.toISOString().substr(0, 10)
console.log('hdwcskjhdckhj', this.receiveds)

};


}
