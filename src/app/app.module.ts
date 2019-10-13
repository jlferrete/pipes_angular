import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { DomseguroPipe } from "./pipes/domseguro.pipe";
registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent, DomseguroPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
