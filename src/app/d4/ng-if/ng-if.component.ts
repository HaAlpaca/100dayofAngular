import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.sass'],
})
export class NgIfComponent implements OnInit, OnDestroy {
  @Input() name : string = ''
  constructor() {}

  ngOnInit(): void {
    console.log('ngIfComponent Init');
  }
  ngOnDestroy(): void {
    console.log('ngIfComponent Destroy');
  }
}
