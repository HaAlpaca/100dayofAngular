import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.sass'],
})
export class PipeComponent implements OnInit {
  currentDate = new Date();
  time = 0;
  interval$ = interval(1000);
  addr = {
    address1: '123 Main St',
    address2: 'Apt. #123',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA',
  };

  user = [
    {
      name: 'HaLacDa',
      age: 21,
    },
    {
      name: 'HaAlpaca',
      age: 17,
    },
    {
      name: 'WhereIsDreams',
      age: 17,
    },
  ];
  addUser() {
    this.user = [
      ...this.user,
      {
        name: 'HaLacDa',
        age: 21,
      },
    ];
  }
  constructor() {
    this.interval$.subscribe((time) => {
      this.time = time;
    });
  }

  ngOnInit(): void {}
}
