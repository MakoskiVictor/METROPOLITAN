import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LoginComponent, WorkingComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'working', component: WorkingComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
