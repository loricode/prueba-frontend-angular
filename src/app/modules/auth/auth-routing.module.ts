import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../auth/containers/login/login.component';
import { AuthContainerComponent } from '../auth/containers/auth-container/auth-container.component';

const routes: Routes = [{
  path:'',
  component: AuthContainerComponent,
  children:[{
    path:'login',
    component:LoginComponent
  }]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
