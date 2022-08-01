import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it("Call checkStatement function with 'First' parameter 'True'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.checkStatement(true, false);
    expect(app.checkStatement).toBeTruthy();
  });

  it("Call checkStatement function with 'Second' parameter 'True'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.checkStatement(false, true);
    expect(app.checkStatement).toBeTruthy();
  });

  it("Call checkStatement function with 'Both' parameter 'True'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.checkStatement(true, true);
    expect(app.checkStatement).toBeTruthy();
  });

  it("Call checkStatement function with 'Both' parameter 'False'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.checkStatement(false, false);
    expect(app.checkStatement).toBeTruthy();
  });

});
