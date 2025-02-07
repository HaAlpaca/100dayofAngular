import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.sass'],
})
export class Input2Component implements OnInit, OnChanges {
  @Input() backgroundColor: string = '#fff';
  @Input() progressColor: string = '#000';
  @Input() progress: number = 0;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.progress > 50) {
      this.progressColor = 'orange';
    }
    if (this.progress > 100) {
      this.progress = 100;
      this.progressColor = 'green';
    }
  }
}
