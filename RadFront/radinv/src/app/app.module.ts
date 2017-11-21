import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IsotopesService} from './services/isotopes.service';
import { IsotopesComponent } from './isotopes/isotopes.component';
import { IsotopeDetailComponent } from './isotope-detail/isotope-detail.component'

const routes: Routes = [
  { path: 'isotopes/new', component: IsotopesComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    IsotopesComponent,
    IsotopeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [IsotopesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
