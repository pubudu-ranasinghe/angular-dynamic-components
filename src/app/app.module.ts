import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompHostDirective } from './directives/comp-host.directive';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CompHostDirective,
    DynamicContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
