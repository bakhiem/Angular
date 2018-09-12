import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByAuthComponent } from './post-by-auth.component';

describe('PostByAuthComponent', () => {
  let component: PostByAuthComponent;
  let fixture: ComponentFixture<PostByAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostByAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostByAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
