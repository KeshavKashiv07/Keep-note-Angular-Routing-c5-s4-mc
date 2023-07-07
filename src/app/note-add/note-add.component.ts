import { Component, EventEmitter,Output } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent {

  constructor(private noteService :NoteService, private _snackBar: MatSnackBar) { }

  note: Note = {};

  @Output()
  noteAdded: EventEmitter<any> = new EventEmitter<any>();

  onSubmit(note:any) {
    this.noteService.saveNote(note.value).subscribe({
    next:data=>{
      this.noteAdded.emit(this.note);
      this._snackBar.open('Note submitted successfully', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      })
  },
  error:err=>{
    alert("Failure while connecting to server, try again!!");
  }})
}

}
