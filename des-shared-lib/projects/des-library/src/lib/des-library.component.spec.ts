import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesLibraryComponent } from './des-library.component';

describe('DesLibraryComponent', () => {
  let component: DesLibraryComponent;
  let fixture: ComponentFixture<DesLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesLibraryComponent]
    });
    fixture = TestBed.createComponent(DesLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
