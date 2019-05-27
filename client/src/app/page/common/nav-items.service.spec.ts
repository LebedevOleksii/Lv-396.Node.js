import { TestBed, fakeAsync, inject } from '@angular/core/testing';
import { NavItemsService } from './nav-items.service';

const mockNavItemsList = [
  {
    id: 'upcoming-tasks',
    title: 'upcoming tasks',
    current: true,
    router: '/profile',
    rightMenu: false,
    burgerMenu: true,
    hr: 'hr',
    dev: 'developer'
  },
  {
    id: 'issues',
    title: 'issues',
    current: false,
    router: '',
    rightMenu: false,
    burgerMenu: true,
    hr: '',
    dev: 'developer'
  },
  {
    id: 'contact-info',
    title: 'contact info',
    current: false,
    router: 'contact-info',
    rightMenu: false,
    burgerMenu: true,
    hr: 'hr',
    dev: 'developer'
  },
  {
    id: 'log-out',
    title: 'log out',
    current: false,
    router: '',
    rightMenu: true,
    burgerMenu: false,
    hr: 'hr',
    dev: 'developer',
    logout: true
  },
  {
    id: 'my-profile',
    title: 'my profile',
    current: false,
    router: 'my-profile',
    rightMenu: true,
    burgerMenu: true,
    hr: 'hr',
    dev: 'developer'
  },
  {
    id: 'edit-profile',
    title: 'edit profile',
    current: false,
    router: '',
    rightMenu: true,
    burgerMenu: false,
    hr: 'hr',
    dev: ''
  },
  {
    id: 'create-user',
    title: 'create user',
    current: false,
    router: 'create-user',
    rightMenu: false,
    burgerMenu: true,
    hr: 'hr',
    dev: ''
  }
];
const modifiedList = [
  {
    id: 'upcoming-tasks',
    title: 'upcoming tasks',
    current: false,
    router: '/profile',
    rightMenu: false,
    burgerMenu: true,
    hr: 'hr',
    dev: 'developer'
  },
  {
    id: 'issues',
    title: 'issues',
    current: false,
    router: '',
    rightMenu: false,
    burgerMenu: true,
    hr: '',
    dev: 'developer'
  },
  {
    id: 'contact-info',
    title: 'contact info',
    current: false,
    router: 'contact-info',
    rightMenu: false,
    burgerMenu: true,
    hr: 'hr',
    dev: 'developer'
  },
  {
    id: 'log-out',
    title: 'log out',
    current: false,
    router: '',
    rightMenu: true,
    burgerMenu: false,
    hr: 'hr',
    dev: 'developer',
    logout: true
  },
  {
    id: 'my-profile',
    title: 'my profile',
    current: false,
    router: 'my-profile',
    rightMenu: true,
    burgerMenu: true,
    hr: 'hr',
    dev: 'developer'
  },
  {
    id: 'edit-profile',
    title: 'edit profile',
    current: false,
    router: '',
    rightMenu: true,
    burgerMenu: false,
    hr: 'hr',
    dev: ''
  },
  {
    id: 'create-user',
    title: 'create user',
    current: false,
    router: 'create-user',
    rightMenu: false,
    burgerMenu: true,
    hr: 'hr',
    dev: ''
  }
];

describe('SocialNetworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavItemsService = TestBed.get(NavItemsService);
    expect(service)
      .toBeTruthy();
  });

  it('should return items list', fakeAsync(inject([NavItemsService], (service: NavItemsService) => {
    service.getNavList()
      .subscribe(list => {
        expect(list)
          .toEqual(mockNavItemsList);
      });
  })));

  it(`should return item list were in item with router = 'upcoming-tasks' 2 property current = true`, fakeAsync(inject([NavItemsService], (service: NavItemsService) => {
    service.currentRouter('upcoming-tasks')
      .subscribe(list => {
        expect(list)
          .toEqual(modifiedList);
      });
  }))
  );
});
