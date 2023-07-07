import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteAddComponent } from 'src/app/note-add/note-add.component';

import { FormsModule } from '@angular/forms';

import { NoteServiceStub } from './noteServiceStub';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NoteService } from 'src/app/service/note.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

describe('NoteAddComponent', () => {
  let component: NoteAddComponent;
  let fixture: ComponentFixture<NoteAddComponent>;
  let noteService: NoteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ NoteAddComponent ],
      imports: [FormsModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule , AppRoutingModule],
      providers: [{ provide: NoteService, useClass: NoteServiceStub }, MatSnackBar,Overlay]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteAddComponent);
    noteService = fixture.debugElement.injector.get(NoteService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
