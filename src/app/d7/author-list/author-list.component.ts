import { Component, OnInit } from '@angular/core';
import { Authors, authors } from 'src/app/authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.sass'],
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];
  constructor() {}

  ngOnInit(): void {}
  onSelected(selectedAuthor: Authors) {
    this.currentAuthor = selectedAuthor;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter((author) => author.id !== id);
    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
