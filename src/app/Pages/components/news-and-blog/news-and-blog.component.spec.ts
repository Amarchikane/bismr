import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndBlogComponent } from './news-and-blog.component';

describe('NewsAndBlogComponent', () => {
  let component: NewsAndBlogComponent;
  let fixture: ComponentFixture<NewsAndBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAndBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAndBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
