import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembucketComponent } from './itembucket.component';

describe('ItembucketComponent', () => {
  let component: ItembucketComponent;
  let fixture: ComponentFixture<ItembucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItembucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItembucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
