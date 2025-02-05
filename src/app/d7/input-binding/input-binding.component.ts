import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styles: [
    `
      .progress-bar-container,
      .progress
        height: 20px


      .progress-bar-container
        width: 100%

    `,
  ],
})
export class InputBindingComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string = '#ccc';
  @Input() progressColor: string = 'tomato';
  @Input() progress = 0;
  constructor() {
    console.log({
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
      progress: this.progress,
    });
  }

  ngOnInit(): void {
    console.log({
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
      progress: this.progress,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', {
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
      progress: this.progress,
    });
    if (this.progress > 50) {
      this.progressColor = 'yellow';
    }
    if (this.progress > 100) {
      this.progress = 100;
      this.progressColor = 'green';
    }
  }
}
