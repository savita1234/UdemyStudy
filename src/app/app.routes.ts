import { Routes } from '@angular/router';
import { Parent } from './parent/parent';
import { App } from './app';
import { Child } from './child/child';

export const routes: Routes = [
    {path:'', component: App},
    {path: 'parent', component: Parent},
      {path: 'child', component: Child},
    // default route
    { path: '**', redirectTo: 'parent', pathMatch: 'full' },
];
