import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cajita', component: CajitaComponent },
  { path: 'cajitaCardAsync', component: CajitaCardAsyncComponent },
  { path: 'cajitaSubs', component: CajitaSubscriptionsComponent },
  { path: 'kajita', component: KajitaComponent },
  { path: 'kushkijsCard', component: KushkiJSCardComponent },
  { path: 'kushkijsCardAsync', component: KushkiJSCardAsyncComponent },
  { path: 'kushkijsOnDemand', component: KushkiJSOnDemandComponent },
  { path: 'kushkijsSubs', component: KushkiJSSubscriptionsComponent },
  { path: 'kushkijsCash', component: KushkiJSCashComponent },
  { path: 'kushkijsTransfer', component: KushkiJSTransferComponent },
  { path: 'kushkijsOnDemandCA', component: KushkiJSOnDemandCAComponent },
  { path: 'kushkijsPSE', component: KushkiJSPSEComponent },
  { path: 'kushkijsSubsCA', component: KushkiJSSubscriptionsCAComponent },
  { path: 'kushkijsTokenCharge', component: KushkiJSTokenChargeComponent },
  { path: 'cajitaUnique', component: CajitaUniqueComponent },
  { path: 'kajitaUnique', component: KajitaUniqueComponent },
  { path: 'kushkijs', component: KushkiJSComponent },
  { path: 'kajitaSubs', component: KajitaSubscriptionsComponent },
  { path: 'confirm', component: BackendResponseComponent },
  { path: 'confirmJS', component: BackendResponseUniqueComponent },
  { path: 'confirmOnDemand', component: BackendResponseOndemandComponent },
  { path: 'confirmSubscriptions', component: BackendResponseSubscriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
