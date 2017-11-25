import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IsotopesService} from './services/isotopes.service';
import { AuthService} from './services/auth.service';

import { IsotopesComponent } from './isotopes/isotopes.component';
import { IsotopeDetailComponent } from './isotope-detail/isotope-detail.component';
import { IsotopeEditComponent } from './isotope-edit/isotope-edit.component';
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: 'isotopes', component: IsotopesComponent},
  { path: 'isotope-details/:id', component: IsotopeDetailComponent },
  { path: 'isotope-edit', component: IsotopeEditComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IsotopesComponent,
    IsotopeDetailComponent,
    IsotopeEditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [IsotopesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
