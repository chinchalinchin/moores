import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { EstateComponent } from './pages/estate/estate.component';
import { SplashComponent } from './pages/splash/splash.component';
import { DisplayComponent } from './components/display/display.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


export const routes: Routes     = [{
    path                        : "",
    component                   : SplashComponent,
}, {
    path                        : "estate",
    component                   : EstateComponent,
}, {
    path                        : "estate/:item",
    component                   : DisplayComponent,
},{
    path                        : "about",
    component                   : AboutComponent,
},{
    path                        : "checkout",
    component                   : CheckoutComponent
}];

export default routes