import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAndstyleBindingComponent } from './event-andstyle-binding.component';

describe('EventAndstyleBindingComponent', () => {
  let component: EventAndstyleBindingComponent;
  let fixture: ComponentFixture<EventAndstyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAndstyleBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAndstyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
