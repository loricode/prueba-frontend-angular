import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelContainerComponent } from '../travel/containers/travel-container/travel-container.component';
import { ScreenOneComponent } from '../travel/containers/screen-one/screen-one.component';
import { ScreenTwoComponent } from '../travel/containers/screen-two/screen-two.component';
import { ScreenThreeComponent } from '../travel/containers/screen-three/screen-three.component';


const routes: Routes = [
  {
    path: '',
    component: TravelContainerComponent,
    children: [
      {
        path: '',
        component: ScreenOneComponent,
      },
      {
        path: 'two',
        component: ScreenTwoComponent,
      },
      {
        path: 'three',
        component: ScreenThreeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelRoutingModule {}
