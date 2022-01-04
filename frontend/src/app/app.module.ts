import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CajitaComponent } from './components/cajita/cajita.component';
import { CajitaCardAsyncComponent } from './components/cajita-card-async/cajita-card-async.component';
import { CajitaSubscriptionsComponent } from './components/cajita-subscriptions/cajita-subscriptions.component';
import { KajitaComponent } from './components/kajita/kajita.component';
import { KushkiJSCardComponent } from './components/kushki-jscard/kushki-jscard.component';
import { KushkiJSCardAsyncComponent } from './components/kushki-jscard-async/kushki-jscard-async.component';
import { KushkiJSOnDemandComponent } from './components/kushki-json-demand/kushki-json-demand.component';
import { KushkiJSSubscriptionsComponent } from './components/kushki-jssubscriptions/kushki-jssubscriptions.component';
import { KushkiJSCashComponent } from './components/kushki-jscash/kushki-jscash.component';
import { KushkiJSTransferComponent } from './components/kushki-jstransfer/kushki-jstransfer.component';
import { KushkiJSOnDemandCAComponent } from './components/kushki-json-demand-ca/kushki-json-demand-ca.component';
import { KushkiJSPSEComponent } from './components/kushki-jspse/kushki-jspse.component';
import { KushkiJSSubscriptionsCAComponent } from './components/kushki-jssubscriptions-ca/kushki-jssubscriptions-ca.component';
import { KushkiJSTokenChargeComponent } from './components/kushki-jstoken-charge/kushki-jstoken-charge.component';
import { CajitaUniqueComponent } from './components/cajita-unique/cajita-unique.component';
import { KajitaUniqueComponent } from './components/kajita-unique/kajita-unique.component';
import { KushkiJSComponent } from './components/kushki-js/kushki-js.component';
import { KajitaSubscriptionsComponent } from './components/kajita-subscriptions/kajita-subscriptions.component';
import { BackendResponseComponent } from './components/backend-response/backend-response.component';
import { BackendResponseOndemandComponent } from './components/backend-response-ondemand/backend-response-ondemand.component';
import { BackendResponseUniqueComponent } from './components/backend-response-unique/backend-response-unique.component';
import { BackendResponseSubscriptionsComponent } from './components/backend-response-subscriptions/backend-response-subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CajitaComponent,
    CajitaCardAsyncComponent,
    CajitaSubscriptionsComponent,
    KajitaComponent,
    KushkiJSCardComponent,
    KushkiJSCardAsyncComponent,
    KushkiJSOnDemandComponent,
    KushkiJSSubscriptionsComponent,
    KushkiJSCashComponent,
    KushkiJSTransferComponent,
    KushkiJSOnDemandCAComponent,
    KushkiJSPSEComponent,
    KushkiJSSubscriptionsCAComponent,
    KushkiJSTokenChargeComponent,
    CajitaUniqueComponent,
    KajitaUniqueComponent,
    KushkiJSComponent,
    KajitaSubscriptionsComponent,
    BackendResponseComponent,
    BackendResponseOndemandComponent,
    BackendResponseUniqueComponent,
    BackendResponseSubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HighlightJsModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
