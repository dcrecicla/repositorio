import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConductorPage } from './conductor.page';

describe('ConductorPage', () => {
  let component: ConductorPage;
  let fixture: ComponentFixture<ConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
