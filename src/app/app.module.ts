import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompHostDirective } from './directives/comp-host.directive';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { KeyValueComponent } from './components/key-value/key-value.component';
import { TextComponent } from './components/text/text.component';
import { BaseComponentComponent } from './shared/base-component/base-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CompHostDirective,
    DynamicContainerComponent,
    CardComponent,
    CardContainerComponent,
    KeyValueComponent,
    TextComponent,
    BaseComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CardComponent, DynamicContainerComponent, CardContainerComponent, KeyValueComponent, TextComponent]
})
export class AppModule { }
