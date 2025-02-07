import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.sass'],
})
export class SizerComponent implements OnInit {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  dec() {
    this.resize(-2);
  }
  inc() {
    this.resize(+2);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
