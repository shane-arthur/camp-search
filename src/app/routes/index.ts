import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'camp',
        loadChildren: '../modules/camp/camp.module#CampModule',
      },
      {
          path: '',
          redirectTo: 'camp',
          pathMatch: 'full'
      },
      {
          path: '**',
          redirectTo: 'camp',
          pathMatch: 'full'
      }
];
