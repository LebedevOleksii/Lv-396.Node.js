import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { DatesItem } from '../../common/dates-item';
import { UserService } from '../../../common/services/user.service';


@Component({
  selector: 'app-create-update-date',
  templateUrl: './create-update-date.component.html',
  styleUrls: ['./create-update-date.component.scss']
})
export class CreateUpdateDateComponent implements OnInit {
  @Output() public readonly onDateChange = new EventEmitter<DatesItem[]>();
  public addDatesForm: FormGroup;
  dates: string[];

  constructor(private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.addDatesForm = this.fb.group({
      datesCount: this.fb.array([
        {
          topic: 'Upcoming review date',
          date: [''],
        },
        this.initDates(),
      ])
    });
  }

  initDates(): any {
    return this.fb.group({
      topic: [''],
      date: [''],
    });
  }

  addDate(): void {
    const control = this.addDatesForm.controls.datesCount as FormArray;
    control.push(this.initDates());
    this.userService.chosenDatesForUser.emit(this.addDatesForm.controls.datesCount.value);
  }

  removeDate(i: number): void {
    const control = this.addDatesForm.controls.datesCount as FormArray;
    control.removeAt(i);
    this.userService.chosenDatesForUser.emit(this.addDatesForm.controls.datesCount.value);
  }

  checkFirstElement(i: number): boolean {
    return i === 0;
  }
}
