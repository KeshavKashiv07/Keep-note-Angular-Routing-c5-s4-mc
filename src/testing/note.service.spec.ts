import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoteService } from 'src/app/service/note.service';



describe('NoteService', () => {
  let service: NoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NoteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET call to server to fetch note by id', () => {
    const notes = [{
      "id": 200,
      "title": "Submit Practice Assignment",
      "content": "Complete developing solution for practice assignment and submit to hobbes for evaluation"
    }, {
      "id": 201,
      "title": "Close Issues on Challenge Assignment",
      "content": "Refactor solution code and close issues raised on the challenge assignment"
    }]

    service.getNote(201).subscribe(data => {
      expect(data).toBeTruthy;
      expect(data).toEqual(notes[1]);
      expect(data.id).toBe(201);
      expect(data.title).toBe("Close Issues on Challenge Assignment");
    });

    const request = httpMock.expectOne("http://localhost:3000/notes/201");
    expect(request.request.method).toBe("GET");
    request.flush(notes[1]);
  });

  it('should make PUT call to server to edit note', () => {
    const note = {
      "id": 250,
      "title": "Refactor Practice Solution",
      "content": "Refactor practice solution code and get the code reviewed by mentor"
    };

    service.modifyNote(250, note).subscribe(data => {
      expect(data).toEqual(note);
      expect(data.title).toEqual("Refactor Practice Solution");
    });

    const request = httpMock.expectOne("http://localhost:3000/notes/250");
    expect(request.request.method).toBe("PUT");
    request.flush(note);
  });

  it('should make DELETE call to server to delete note', () => {
    service.deleteNote(250).subscribe(data => {
      expect(data).toEqual({});
    });

    const request = httpMock.expectOne("http://localhost:3000/notes/250");
    expect(request.request.method).toBe("DELETE");
    request.flush({});
  });

  afterEach(() => {
    httpMock.verify();
  });
});
