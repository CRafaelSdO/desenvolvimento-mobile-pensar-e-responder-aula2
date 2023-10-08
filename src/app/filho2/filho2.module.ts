import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Filho2RoutingModule } from './filho2-routing.module';
import { Filho2Component } from './filho2.component';
import { NetoAComponent } from '../neto-a/neto-a.component';
import { NetoBComponent } from '../neto-b/neto-b.component';


@NgModule({
    declarations: [
        Filho2Component,
        NetoAComponent,
        NetoBComponent
    ],
    imports: [
        CommonModule,
        Filho2RoutingModule
    ]
})
export class Filho2Module { }
