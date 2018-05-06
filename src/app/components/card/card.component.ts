import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../shared/base-component.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, BaseComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
