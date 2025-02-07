import { Component, OnInit } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-bs-group',
  template: `
    <ul class="nav">
      <li class="nav-item" *ngFor="let tab of tabPanelList; let idx = index">
        <a
          class="nav-link "
          href="#"
          (click)="selectItem(idx)"
          [class.active]="idx === activeIndex"
        >
          {{ tab.title }}
          <button class="btn btn-danger" (click)="removeTab(tab)">x</button>
        </a>
      </li>
    </ul>
    <div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
      <ng-container
        *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"
      ></ng-container>
    </div>
    <ng-template #noTabs> No more tabs. </ng-template>
  `,
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent,
    },
  ],
})
export class TabBsGroupComponent extends TabGroupComponent {}
