import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildaComponent } from './childa.component';

describe('ChildaComponent', () => {
  let component: ChildaComponent;
  let fixture: ComponentFixture<ChildaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
