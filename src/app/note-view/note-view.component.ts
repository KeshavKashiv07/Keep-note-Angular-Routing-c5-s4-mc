import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  search:any;  // in this property, whenever all the data is fetch then all the data is store in this search property and after that we able to search all card. 

  notes: Note[] = [];

  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe({
      next: data => {
        this.notes = data;
        this.search = data;     // this is only for search all the card when search box is empty.
      },
      error: error => {
        alert("Error while fetching note data !!!");
      }
    });
  }

  onSearchTextChanged(noteTitle: string) {
    if(noteTitle === '' || !noteTitle)
      this.notes =  this.search
    else
    {
      this.notes = this.search;
      this.notes = this.notes.filter(note => note.title?.startsWith(noteTitle));
    }
  }

  onNoteAdded($event:any) {
    this.notes.push($event);  // this is for sanding the data to this.notes for facthing the data and display on UI without any refresh
  }

  ShowMe: boolean = true;

  toggleAdd(){
    this.ShowMe=!this.ShowMe
  }

}
