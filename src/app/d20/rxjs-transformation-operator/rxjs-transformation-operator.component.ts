import { Component, OnInit } from '@angular/core';
import { filter, find, first, from, last, pipe, single } from 'rxjs';

@Component({
  selector: 'app-rxjs-transformation-operator',
  templateUrl: './rxjs-transformation-operator.component.html',
  styleUrls: ['./rxjs-transformation-operator.component.sass'],
})
export class RxjsTransformationOperatorComponent implements OnInit {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  filteredArr: number[] = [];

  constructor() {}
  ngOnInit(): void {
    from(this.arr)
      .pipe(filter((item) => item % 2 === 0))
      .subscribe({
        next: (item) => console.log(item),
        error: (err) => console.log(err),
        complete: () => console.log('complete filter rxjs'),
      });
    from(this.arr)
      .pipe(first())
      .subscribe({
        next: (item) => console.log(item),
        error: (err) => console.log(err),
        complete: () => console.log('complete first rxjs'),
      });
    from(this.arr)
      .pipe(last())
      .subscribe({
        next: (item) => console.log(item),
        error: (err) => console.log(err),
        complete: () => console.log('complete last rxjs'),
      });
    from(this.arr)
      .pipe(find((item) => item % 10 === 0))
      .subscribe({
        next: (item) => console.log(item),
        error: (err) => console.log(err),
        complete: () => console.log('complete find rxjs'),
      });
    // single operator return only one item else return in error
    from(this.arr)
      .pipe(single((item) => item % 2 === 0))
      .subscribe({
        next: (item) => console.log(item),
        error: (err) => console.log(`${err} | single rxjs`),
        complete: () => console.log('complete single rxjs'),
      });
  }
}
