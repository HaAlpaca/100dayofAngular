import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Authors } from 'src/app/authors';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.sass'],
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author?: Authors;
  @Output() select = new EventEmitter<Authors>();
  @Output() delete = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
}
