import { Directive, ViewContainerRef } from '@angular/core';

/**
 * Directive to indicate an anchor where dynamic content
 * is attached to.
 * eg:
 *    <div appComponentHost></div>
 * Dynamic content will replace this div
 */
@Directive({
  selector: '[appComponentHost]'
})
export class CompHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
