import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Filho1Component } from './filho1/filho1.component';
import { Filho2Component } from './filho2/filho2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NetoAComponent } from './neto-a/neto-a.component';
import { NetoBComponent } from './neto-b/neto-b.component';
import { NetoCComponent } from './neto-c/neto-c.component';
import { NetoDComponent } from './neto-d/neto-d.component';

@NgModule({
    declarations: [
        AppComponent,
        Filho1Component,
        Filho2Component,
        PageNotFoundComponent,
        NetoAComponent,
        NetoBComponent,
        NetoCComponent,
        NetoDComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
