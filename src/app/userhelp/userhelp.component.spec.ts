import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhelpComponent } from './userhelp.component';

describe('UserhelpComponent', () => {
  let component: UserhelpComponent;
  let fixture: ComponentFixture<UserhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
