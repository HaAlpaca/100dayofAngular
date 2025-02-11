import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  template: `
    <div class="tab-headers">
      <div
        class="tab-header-item"
        *ngFor="let tab of tabPanelList; let idx = index"
        [class.active]="idx === activeIndex"
        (click)="selectItem(idx)"
      >
        {{ tab.title }}
        <button (click)="removeTab(tab)">x</button>
      </div>
    </div>
    <div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
      <ng-container
        *ngTemplateOutlet="tabPanelList[activeIndex].implicitBody"
      ></ng-container>
    </div>
    <ng-template #noTabs> No more tabs. </ng-template>
  `,
  styles: [
    `
      .tab-headers
        display: flex
        flex-direction: row
        border-bottom: 1px solid #ccc

      .tab-header-item
        padding: 5px 10px
        cursor: pointer
        border: 1px solid #ccc
        border-bottom: none
      .tab-header-item:hover
        background-color: #eee

      .tab-header-item.active
        border: 1px solid red
        background-color: #ccc

      .tab-body
        padding: 10px

    `,
  ],
})
export class TabGroupComponent implements OnInit {
  // list danh sách các tab
  tabPanelList: TabPanelComponent[] = [];

  @Input() activeIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();
  constructor() {}

  @ContentChildren(TabPanelComponent)
  tabPanels!: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    this.tabPanels.changes.subscribe((list) => {
      this.tabPanelList = list.toArray();
      console.log(this.tabPanelList);
    });
  }
  ngOnInit() {}
  selectItem(index: number) {
    this.activeIndex = index;
    this.tabActiveChange.emit(index);
  }
  addTab(tab: TabPanelComponent) {
    this.tabPanelList.push(tab);
  }
  removeTab(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp, index) => {
      if (tp === tab) {
        found = index;
        return false;
      }
      return true;
    });
    if (found === this.activeIndex) {
      this.tabActiveChange.emit(
        found === this.tabPanelList.length ? found - 1 : found
      );
    }
  }
}
