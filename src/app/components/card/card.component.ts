import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../shared/base-component.component';
import { BaseComponentComponent } from '../../shared/base-component/base-component.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent extends BaseComponentComponent {

}
