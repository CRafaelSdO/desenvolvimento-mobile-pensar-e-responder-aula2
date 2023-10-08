import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Filho1Component } from './filho1/filho1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'filho1',
        component: Filho1Component
    },
    {
        path: 'filho2',
        loadChildren: () => import('./filho2/filho2.module').then(m => m.Filho2Module)
    },
    {
        path: '',
        redirectTo: 'filho1',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
