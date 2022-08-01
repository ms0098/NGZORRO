import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreService } from './core.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CoreService],
    imports: [
      RouterTestingModule,
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: CoreService = TestBed.get(CoreService);
    expect(service).toBeTruthy();
  });
});
