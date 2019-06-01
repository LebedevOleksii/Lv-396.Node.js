import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AccordionComponent } from './accordion.component';
import { ModalComponent } from '../../modal/modal.component';

import { Task } from '../../common/task';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  const items: Task[] = [
    {
      id: '0',
      name: 'Upcoming task name',
      excerpt: 'This content is straight in the template.',
      status: { name: 'LOW', value: 2 },
      type: { name: 'issue', value: 1 },
      date: '22/03/2019',
      author: {},
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
      author: {},
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
      author: {},
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
      author: {},
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
      author: {},
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        ],
      declarations: [
        AccordionComponent,
        ModalComponent
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.tasks = items;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
