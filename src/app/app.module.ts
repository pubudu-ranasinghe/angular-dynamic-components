import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompHostDirective } from './directives/comp-host.directive';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CompHostDirective,
    DynamicContainerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CardComponent, DynamicContainerComponent]
})
export class AppModule { }
