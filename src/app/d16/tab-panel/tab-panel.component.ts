import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

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
  @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;
  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit() {
    this.tabGroup.addTab(this);
  }
  ngOnDestroy() {
    this.tabGroup.removeTab(this);
  }
}
