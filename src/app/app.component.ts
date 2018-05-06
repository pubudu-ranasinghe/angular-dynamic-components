import { Component } from '@angular/core';
import { DynamicItem } from './shared/dynamic-item';
import { CardComponent } from './components/card/card.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tree = [
    new DynamicItem(CardComponent, { title: 'Phoenix'}),
    new DynamicItem(CardComponent, { title: 'Unicorn'}),
    new DynamicItem(CardComponent, { title: 'Dwarf'}),
    new DynamicItem(CardComponent, { title: 'Elf'}, [
      new DynamicItem(CardComponent, { title: 'Nested'})
    ])
  ];
}
