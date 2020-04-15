import { Component, Input } from '@angular/core';

@Component({

  selector: 'demo-widget-config',
  templateUrl: './demo-widget-config.component.html',
  styleUrls: ['./demo-widget-config.component.scss']
})

export class WidgetConfigDemo {

  @Input() config: any = {};

  labelGroups = [
    {id: 1, name: "One"},
    {id: 2, name: "Two"}
  ];

}
