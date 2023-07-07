import { RouterTestingModule } from "@angular/router/testing";
import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from 'src/app/header/header.component';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/app-routing.module';
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { NoteServiceStub } from "./noteServiceStub";
import { SearchComponent } from "src/app/search/search.component";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";

import { CommonModule } from '@angular/common';
import { NoteAddComponent } from "src/app/note-add/note-add.component";
import { NoteViewComponent } from "src/app/note-view/note-view.component";
import { NoteEditComponent } from "src/app/note-edit/note-edit.component";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NoteComponent } from "src/app/note/note.component";
import { MatCardModule } from "@angular/material/card";
import { NoteService } from "src/app/service/note.service";
import { NavigationComponent } from "src/app/navigation/navigation.component";

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent, NoteComponent, SearchComponent, NoteAddComponent, NoteViewComponent, NoteEditComponent,NavigationComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes), 
        MatIconModule, 
        MatToolbarModule, 
        MatFormFieldModule, 
        FormsModule,
        CommonModule,
        MatInputModule,
        NoopAnimationsModule,
        MatCardModule
      ],
      providers: [{ provide: NoteService, useClass: NoteServiceStub }],

    }).compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "" redirects you to /notes', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
      flush();
    });
  }));

  it('navigate to "/note-view" loads `Page-Not-Found` component', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(["/note-view"]).then(() => {
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLElement).innerHTML).toContain("app-navigation");
      flush();
    });
  }));

  it('navigate to "/notes" loads `Note-View` component', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(["/notes"]).then(() => {
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLElement).innerHTML).toContain("app-navigation");
      flush();
    });
  }));

  it('navigate to "/notes/3" loads `Note-Edit` component', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(["/notes/3"]).then(() => {
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLElement).innerHTML).toContain("app-navigation");
      flush();
    });
  }));
});
