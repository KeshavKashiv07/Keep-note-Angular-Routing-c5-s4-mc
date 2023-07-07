import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/header/header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [MatIconModule, MatToolbarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain link to navigate to landing view',()=> {
    const linkElement = fixture.debugElement.queryAll(By.css("[routerLink]"))[0].nativeElement as HTMLAnchorElement;
    expect(linkElement.getAttribute("routerLink")).toBeTruthy();
    expect(linkElement.getAttribute("routerLink")).toEqual("../home");
    
  });
});
