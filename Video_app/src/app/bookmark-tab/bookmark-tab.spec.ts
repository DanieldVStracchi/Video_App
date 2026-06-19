import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTab } from './bookmark-tab';

describe('BookmarkTab', () => {
  let component: BookmarkTab;
  let fixture: ComponentFixture<BookmarkTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkTab],
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
