import { Directive, DoCheck, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTrackBy]'
})
export class TrackByDirective implements DoCheck{

  @Input('appTrackBy') target: any;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngDoCheck(): void {
      this.viewContainer.clear()
      this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
