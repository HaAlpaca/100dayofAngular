import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-twowaydatabinding',
  templateUrl: './custom-twowaydatabinding.component.html',
  styleUrls: ['./custom-twowaydatabinding.component.sass'],
})
export class CustomTwowaydatabindingComponent implements OnInit {
  name: string = 'HaLacDa';
  isChecked = false;
  constructor() {}

  ngOnInit(): void {}
}
