import { Component, HostBinding, Input, OnInit } from '@angular/core';
type flexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
@Component({
  selector: 'app-flex',
  template: '<ng-content></ng-content>',
  styleUrls: ['./flex.component.sass'],
})
export class FlexComponent implements OnInit {
  @Input() flexDirection: string = 'row';

  @HostBinding('style.display') get display() {
    return 'flex';
  }
  @HostBinding('style.flex-direction') get direction() {
    return this.flexDirection;
  }
  constructor() {}

  ngOnInit(): void {}
}
