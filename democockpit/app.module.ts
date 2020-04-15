import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, RouterModule, HOOK_COMPONENT } from '@c8y/ngx-components';
import { UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { ContextDashboardModule } from '@c8y/ngx-components/context-dashboard';

import { WidgetDemo } from './custom-widgets/demo-widget/widget/demo-widget.component';
import { WidgetConfigDemo } from './custom-widgets/demo-widget/configuration/demo-widget-config.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([...UPGRADE_ROUTES], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    NgUpgradeModule,
    ContextDashboardModule,
    // Upgrade module must be the last
    UpgradeModule
  ],
  declarations: [WidgetDemo, WidgetConfigDemo],
  entryComponents: [WidgetDemo, WidgetConfigDemo],
  providers: [{
    provide: HOOK_COMPONENT,
    multi: true,
    useValue: {
      id: 'demo.custom.widget',
      label: 'Demo Custom Widget',
      description: 'Demo Custom Widget',
      component: WidgetDemo, 
      configComponent: WidgetConfigDemo
    }
  }],
})

export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
