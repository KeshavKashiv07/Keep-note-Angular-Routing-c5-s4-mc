import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoteViewComponent } from 'src/app/note-view/note-view.component';
import { SearchComponent } from 'src/app/search/search.component';

import { NoteServiceStub } from './noteServiceStub';
import { NoteRouterService } from 'src/app/service/note-router.service';
import { NoteService } from 'src/app/service/note.service';

describe('RouterService', () => {
  let service: NoteRouterService;
  let noteService: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      providers: [
        { provide: NoteService, useClass: NoteServiceStub }
      ]
    });
    service = TestBed.inject(NoteRouterService);
    noteService = TestBed.inject(NoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain `navigateToNotesView()` method which navigates to notes view when called', fakeAsync(() => {
    const fixture = TestBed.createComponent(NoteViewComponent);
    service.toHome();
    tick();
    expect((fixture.nativeElement as HTMLElement).innerHTML).toContain("app-search");
  }));
});
