import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LegalInformationComponent, LoginComponent, RegisterComponent, WorkingComponent } from './pages';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'working', component: WorkingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'informacion-legal', component: LegalInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
