import { User } from './user';

export class UpdateUser {
  constructor(public id?: string,
              public firstName?: string,
              public lastName?: string,
              public position?: string,
              public email?: string,
              public phone?: string,
              public type?: string,
              public manager?: string,
              public teamlead?: string,
              public department?: string,
              public hr?: object,
              public roles?: string[]) {
  }

  mapUser(user: User): void {
    this.id = user._id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.position = user.position;
    this.email = user.email;
    this.phone = user.phone;
    this.type = user.type;
    this.manager = user.manager._id;
    if (user.teamlead) {
      this.teamlead = user.teamlead._id;
    }
    this.department = user.department._id;
    this.hr = user.hr;
    this.roles = user.roles;
  }
}
