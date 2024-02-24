import { ApplicationConfig } from "@angular/core";
import { routes } from "./userinterface.routes";
import { provideRouter } from "@angular/router";

export const UseConfig:ApplicationConfig={
    providers:[provideRouter(routes)]
}