import {Routes, RouterModule} from "@angular/router";

import {AppDetailClientComponent} from "./app.detail-client/app.detail-client.component";
import {FormComponent} from "./form/form.component";
import {AppClientComponent} from "./app.client/app.client.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'

  },
  {
    path: 'detail/:id',
    component: AppDetailClientComponent
  },
  {
    path: 'accueil',
    component: AppClientComponent
  },

  {
    path: 'form',
    component: FormComponent
  },


]
export const routing = RouterModule.forRoot(appRoutes)


