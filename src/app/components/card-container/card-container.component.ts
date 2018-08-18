import { Component, OnInit } from '@angular/core';
import { DynamicContainerComponent } from '../../dynamic-container/dynamic-container.component';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent extends DynamicContainerComponent implements OnInit {

  ngOnInit() {
  }

}
