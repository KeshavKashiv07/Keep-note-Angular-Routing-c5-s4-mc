import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';
import { ActivatedRoute } from '@angular/router';
import { NoteRouterService } from '../service/note-router.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input() 
  note?:Note;

}
