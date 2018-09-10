import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryBuilderContentComponent } from './query-builder-content.component';

describe('QueryBuilderContentComponent', () => {
  let component: QueryBuilderContentComponent;
  let fixture: ComponentFixture<QueryBuilderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryBuilderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryBuilderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
