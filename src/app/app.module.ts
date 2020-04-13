import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { service as PBIService, factories } from 'powerbi-client';

export function powerBiServiceFactory() {
  return new PBIService.Service(factories.hpmFactory, factories.wpmpFactory, factories.routerFactory);
}

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TreeModule,
    ToastModule,
        ButtonModule,
        ContextMenuModule,
        TabViewModule,
CodeHighlighterModule,
FormsModule
  ],
  providers: [{ provide: 'PowerBIService', useFactory: powerBiServiceFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
