import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectcardComponent } from './prodectcard.component';

describe('ProdectcardComponent', () => {
  let component: ProdectcardComponent;
  let fixture: ComponentFixture<ProdectcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdectcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdectcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
