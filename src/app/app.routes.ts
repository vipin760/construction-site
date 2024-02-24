import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/generic/not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:AppComponent, loadChildren:()=>import('../app/components/modules/userinterface/userinterface.routes').then(com=> com.routes)},
    {path:"**", component:NotFoundComponent}
];
