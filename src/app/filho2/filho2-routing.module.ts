import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Filho2Component } from './filho2.component';
import { NetoAComponent } from '../neto-a/neto-a.component';
import { NetoBComponent } from '../neto-b/neto-b.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: Filho2Component,
        children: [
            {
                path: 'neto-a',
                component: NetoAComponent
            },
            {
                path: 'neto-b',
                component: NetoBComponent
            },
            {
                path: '',
                redirectTo: 'neto-a',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Filho2RoutingModule { }
