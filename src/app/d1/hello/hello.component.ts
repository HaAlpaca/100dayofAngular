import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass'],
})
export class HelloComponent implements OnInit {
  MyName = 'Ha Lac Da';
  user = {
    name: 'HaAlpaca',
    age: 21,
  };
  constructor() {}

  ngOnInit(): void {}
  showInfo() {
    alert(`${this.user.name} is ${this.user.age} years old`);
  }
  handleChangeName(event: any) {
    console.log(event);
    // this.MyName = event.value;
  }
}
