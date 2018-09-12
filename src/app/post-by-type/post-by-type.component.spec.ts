import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByTypeComponent } from './post-by-type.component';

describe('PostByTypeComponent', () => {
  let component: PostByTypeComponent;
  let fixture: ComponentFixture<PostByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
