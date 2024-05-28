import { Routes } from '@angular/router';


export const routes: Routes = [
   {
      path:'auth',
      loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
   },
   {
      path:'travel',
      loadChildren:() => import('./modules/travel/travel.module').then(m => m.TravelModule)
   },
   {
      pathMatch:'full',
      path:'',
      redirectTo:'travel'
   }
];
