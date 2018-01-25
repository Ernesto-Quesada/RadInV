import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Observable } from 'rxjs/Observable';
  import { Subject } from 'rxjs/Subject';
  // Observable class extensions
  import 'rxjs/add/observable/of';
  // Observable operators
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/debounceTime';
  import 'rxjs/add/operator/distinctUntilChanged';
  import 'rxjs/add/operator/switchMap'
  import { SearchUserService } from '../services/search-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchUserService]
})
export class SearchComponent implements OnInit {
  private searchTerms = new Subject();
  users: Observable<any[]>;
  selectedUser: any;
  

  constructor( private searchUserService: SearchUserService, 
                private router: Router) { }

  // Push a search term into the observable stream.
  search(term) {
    console.log('userrrr', term);
    this.searchTerms.next(term);
    console.log(this.users)
  }

  ngOnInit(): void {
    this.users = this.searchTerms
     .debounceTime(300)        
     .distinctUntilChanged()   
      .switchMap(term => {
        const searchAjax  = this.searchUserService.search(term);
        // searchAjax.subscribe(res => console.log('holaaaaaaaaaaaaa', res))
        return term ? searchAjax
                    : Observable.of<any[]> ([])
      })
      .catch(error => {
        // TODO: add real error handling
        console.log('ERROR MES', error);
        return Observable.of<any[]>([]);
      });
    console.log('agen222222yyyyy', this.users);
    console.log('agen222222', this.searchTerms);
  }
  gotoDetail(user) {
      // const link = ['/detail', agency._id];
      // this.router.navigate(link);
      this.selectedUser = user;
      console.log(this.selectedUser,'LLLLJLJLJLJL')
    }

}









