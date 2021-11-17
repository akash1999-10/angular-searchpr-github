import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCredComponent } from './github-cred.component';

describe('GithubCredComponent', () => {
  let component: GithubCredComponent;
  let fixture: ComponentFixture<GithubCredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubCredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubCredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
