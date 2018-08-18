import { Component } from '@angular/core';
import { DynamicItem } from './shared/dynamic-item';
import { CardComponent } from './components/card/card.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { KeyValueComponent } from './components/key-value/key-value.component';
import { TextComponent } from './components/text/text.component';

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
    new DynamicItem(DynamicContainerComponent, [
      new DynamicItem(CardComponent, { title: 'Elf' })
    ])
  ];

  data = [
    new DynamicItem(CardContainerComponent, { title: 'Freshness' }, [
      new DynamicItem(KeyValueComponent, { key: 'Harvested Date'} ),
      new DynamicItem(KeyValueComponent, { key: 'Packed Date'} ),
      new DynamicItem(TextComponent, { body: 'Your product has been carefully hand sorted'} ),
      new DynamicItem(TextComponent, { body: 'Your product has been graded for ripeness/maturity and size'} )
    ]),
  ];
}
