import { Component, OnInit } from '@angular/core';
import { from, fromEvent, Subject, throttleTime } from 'rxjs';

@Component({
  selector: 'app-rxjs-concepts',
  templateUrl: './rxjs-concepts.component.html',
  styleUrls: ['./rxjs-concepts.component.sass'],
})
export class RxjsConceptsComponent implements OnInit {
  clickCount = 0;
  mouseX = 0;
  mouseY = 0;
  private throttledClick$ = new Subject<void>();

  throttledClick() {
    this.throttledClick$.next();
    // next để chạy
    // complete là xong nên next sẽ không được thực hiện nữa
    // this.throttledClick$.complete();
  }

  constructor() {
    this.throttledClick$.pipe(throttleTime(1000)).subscribe(() => {
      this.clickCount++;
    });
  }

  ngOnInit(): void {
    // Before add mouse throttle event
    // fromEvent<MouseEvent>(document, 'mousemove').subscribe((event) => {
    //   this.mouseX = event.clientX;
    //   this.mouseY = event.clientY;
    // });
    // After add mouse throttle event
    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(throttleTime(1000))
      .subscribe((event) => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      });
  }
}
