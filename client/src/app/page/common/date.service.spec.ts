import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

import { expect } from '@angular/core/testing/src/testing_internal';

const mockDateItemsList = [
  {
    firstName: '',
    lastName: 'upcoming tasks',
    topic: 'upcoming date',
    date: '2019-05-15T19:59:34.830Z',
  },
  {
    firstName: '',
    lastName: 'upcoming tasks',
    topic: 'upcoming date',
    date: '2019-05-15T19:59:34.830Z',
  },
  {
    firstName: '',
    lastName: 'upcoming tasks',
    topic: 'upcoming date',
    date: '2019-05-15T19:59:34.830Z',
  }
];

describe('DateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateService = TestBed.get(DateService);
    expect(service)
      .toBeTruthy();
  });
  it('should return items list', fakeAsync(inject([DateService], (service: DateService) => {
    service.setDateList()
      .subscribe(list => {
        expect(list)
          .toEqual(mockDateItemsList);
      });
  })));
});
