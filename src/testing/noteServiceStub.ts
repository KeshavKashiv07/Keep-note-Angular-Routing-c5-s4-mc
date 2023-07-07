import { of } from "rxjs";
import { Note } from "src/app/models/note";

export class NoteServiceStub {
    getAllNotes() {
        return of([{
            title: "Test Note",
            content: "Test note content for testing"
        }] as Note[]);
    }

    addNote(note: Note) {
        return of(note);
    }

    getNote(id?: number) {
        return of({} as Note);
    }

    modifyNote(id?: number, note?: Note) {
        return of({} as Note);
    }
}