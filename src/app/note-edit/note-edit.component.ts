import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../service/note.service';
import { Note } from '../models/note';
import { NoteRouterService } from '../service/note-router.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute , private noteSarvice : NoteService ,  private routeService: NoteRouterService) { }

  note : any = {};
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteSarvice.getNote(+id).subscribe(data => {
        this.note = data;
      })
    });
  }

  editNote() {
    this. noteSarvice.modifyNote(this.note?.id, this.note).subscribe(data => {
      alert("Edit Successfully")
      this.note = data;
      this.routeService.toHome();
    })
  }

}
