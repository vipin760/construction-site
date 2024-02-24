import { Routes } from "@angular/router";
import { UserinterfaceComponent } from "./userinterface.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { GalleryComponent } from "./components/pages/gallery/gallery.component";

export const routes:Routes=[ {path:'', component:UserinterfaceComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
]}
]