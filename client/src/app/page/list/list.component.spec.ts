import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ItemComponent } from './accordion/item/item.component';

import { Task } from '../common/task';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const tasks: Task[] = [
    {
      id: '0',
      name: 'Upcoming task name',
      excerpt: 'This content is straight in the template.',
      status: { name: 'LOW', value: 2 },
      type: { name: 'issue', value: 1 },
      date: '22/03/2019',
      author: {_id: '0', firstName: 'Alex', lastName: 'Somename'},
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
    },
    {
      id: '1',
      name: 'Upcoming task name2',
      excerpt: 'This content is straight in the template2.',
      status: { name: 'HIGHT', value: 0 },
      type: { name: 'issue', value: 1 },
      date: '23/03/2019',
      author: {_id: '0', firstName: 'Alex', lastName: 'Somename'},
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
    },
    {
      id: '2',
      name: 'Upcoming task name3',
      excerpt: 'This content is straight in the template3.',
      status: { name: 'LOW', value: 2 },
      type: { name: 'task', value: 0 },
      date: '24/03/2019',
      author: {_id: '0', firstName: 'Alex', lastName: 'Somename'},
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
    },
    {
      id: '3',
      name: 'Upcoming task name4',
      excerpt: 'This content is straight in the template4.',
      status: { name: 'NORMAL', value: 1 },
      type: { name: 'task', value: 0 },
      date: '25/03/2019',
      author: {_id: '0', firstName: 'Alex', lastName: 'Somename'},
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
    },
    {
      id: '4',
      name: 'Upcoming task name5',
      excerpt: 'This content is straight in the template5.',
      status: { name: 'LOW', value: 2 },
      type: { name: 'task', value: 0 },
      date: '26/03/2019',
      author: {_id: '0', firstName: 'Alex', lastName: 'Somename'},
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccordionComponent,
        ListComponent,
        ItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.tasks = tasks;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
