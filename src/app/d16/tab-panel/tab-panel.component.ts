import {
  Component,
  ContentChild,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import { TabPanelDirective } from '../tab-panel.directive';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [''],
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  // de tham chieu den ng template vi neu de minh ng content thi no se render ngay lap tuc
  @ViewChild(TemplateRef, { static: true }) implicitBody!: TemplateRef<unknown>;
  @ContentChild(TabPanelDirective, { static: true, read: TemplateRef })
  explicitBody!: TemplateRef<unknown>;
  constructor(private tabGroup: TabGroupComponent) {}

  getPanelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }
  ngOnInit() {
    // console.log(this.explicitBody);
    this.tabGroup.addTab(this);
  }
  ngOnDestroy() {
    this.tabGroup.removeTab(this);
  }
}
