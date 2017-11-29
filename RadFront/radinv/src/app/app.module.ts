import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IsotopesService} from './services/isotopes.service';
import { AuthService} from './services/auth.service';

import { IsotopesComponent } from './isotopes/isotopes.component';
import { IsotopeDetailComponent } from './isotope-detail/isotope-detail.component';
import { IsotopeEditComponent } from './isotope-edit/isotope-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  
  //{ path: 'nav', component: NavComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: 'isotopes', component: IsotopesComponent},
  { path: 'isotope-details/:id', component: IsotopeDetailComponent },
  { path: 'isotope-edit', component: IsotopeEditComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IsotopesComponent,
    IsotopeDetailComponent,
    IsotopeEditComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [IsotopesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
