import { User } from './user';

export class UpdateUser {
  constructor(public id?: string,
              public firstName?: string,
              public lastName?: string,
              public position?: string,
              public email?: string,
              public phone?: string,
              public contacts?: object[],
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
    this.contacts = user.contacts;
    this.type = user.type;
    this.manager = user.manager as string;
    if (user.teamlead) {
      this.teamlead = user.teamlead as string;
    }
    this.department = user.department as string;
    this.hr = user.hr;
    this.roles = user.roles;
  }
}
