import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
// import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'privacy',
    title: 'privacy | angularDemo',
    component: PrivacyComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'projects/detail/:id',
    title: 'detail | angularDemo',
    component: ProjectDetailComponent,
  },
  {
    path: 'login',
    title: 'log in | angularDemo',
    component: LoginComponent,
  },
  {
    path: 'signup',
    title: 'sign up | angularDemo',
    component: SignupComponent,
  },
  { path: '', title: 'home | angularDemo', component: ProjectsComponent },
  { path: '**', title: 'Not Found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
