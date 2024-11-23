import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { EstateComponent } from './pages/estate/estate.component';
import { PreviewComponent } from './components/preview/preview.component';
import { SplashComponent } from './pages/splash/splash.component';


export const routes: Routes = [{
    path: "",
    component: SplashComponent,
    title: "Moore Enterprises"
}, {
    path: "estate",
    component: EstateComponent,
    title: "Estate Liquidation"
}, {
    path: "estate/:item",
    component: PreviewComponent,
    title: "Estate Lot"
},{
    path: "about",
    component: AboutComponent,
    title: "About Moore's"
}];

export default routes