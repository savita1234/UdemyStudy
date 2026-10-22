import { Routes } from '@angular/router';
import { Parent } from './parent/parent';
import { App } from './app';
import { Child } from './child/child';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';

export const routes: Routes = [
    {path:'', component: App},
    {path: 'parent', component: Parent},
      {path: 'child', component: Child},
      {path:'template-driven', component: TemplateDrivenForm},
    // default route
    { path: '**', redirectTo: 'parent', pathMatch: 'full' },
];
