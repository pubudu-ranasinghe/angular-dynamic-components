import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DynamicItem } from '../shared/dynamic-item';
import { CompHostDirective } from '../directives/comp-host.directive';
import { BaseComponent } from '../shared/base-component.component';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent implements OnInit {

  @Input() data: DynamicItem[];
  @ViewChild(CompHostDirective) host: CompHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {
    this.data.forEach(item => {

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

      const viewContainerRef = this.host.viewContainerRef;
      // viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<BaseComponent>componentRef.instance).data = item.data;
    });
  }

}
