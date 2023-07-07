import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  noteTitle: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  searchNote() {
    this.searchTextChanged.emit(this.noteTitle);
  }

}
