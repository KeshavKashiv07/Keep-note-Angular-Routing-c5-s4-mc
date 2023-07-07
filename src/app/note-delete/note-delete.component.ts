import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../service/note.service';
import { NoteRouterService } from '../service/note-router.service';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit {

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

  delete() {
    this.noteSarvice.deleteNote(this.note?.id).subscribe(data=>{
      this.routeService.toHome();// code to navigate to home
    });
  }

}
