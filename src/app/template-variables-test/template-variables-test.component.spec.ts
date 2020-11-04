import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariablesTestComponent } from './template-variables-test.component';

describe('TemplateVariablesTestComponent', () => {
  let component: TemplateVariablesTestComponent;
  let fixture: ComponentFixture<TemplateVariablesTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateVariablesTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateVariablesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
