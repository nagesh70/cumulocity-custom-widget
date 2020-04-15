declare var google: any;

import { Component, Input } from "@angular/core";

@Component({
  selector: 'demo-widget-component',
  templateUrl: './demo-widget.component.html',
  styleUrls: ['./demo-widget.component.scss']
})

export class WidgetDemo{
  @Input() config;
  
  constructor() {

    if(this.config.lableType != undefined)
    {
      console.log("Label Type Provided "+this.config.lableType);
    }
    if(this.config.labelGroup != undefined)
    {
      console.log("Label Group Provided "+this.config.labelGroup);
    }
  }

}
