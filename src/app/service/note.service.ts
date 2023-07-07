import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  note_url : string = "http://localhost:3000/notes";
  user_url : string = "http://localhost:3000/users";

  constructor(private http : HttpClient) { }


  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.note_url);
  }

  saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.note_url, note);
  }
  
  addUser(user : User):Observable<User> {
    return this.http.post<User>(this.user_url, user)
  }

  getNote(id?: number) : Observable<Note> {
    return this.http.get<Note>(`${this.note_url}/${id}`);
  }

  modifyNote(id?: number, note?: Note) {
    return this.http.put<Note>(`${this.note_url}/${id}`,note);
  }

  deleteNote(noteId: number): Observable<Note> {  
    return this.http.delete<Note>(`${this.note_url}/${noteId}`);
  }
}
