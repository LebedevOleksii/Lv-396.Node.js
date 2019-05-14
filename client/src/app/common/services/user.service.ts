import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { api } from '../../../environments/environment';
import { UpdateUser } from '../models/update-user';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  chosenDepartment = new EventEmitter();

  constructor(private readonly http: HttpClient) {
  }
  helper = new JwtHelperService();

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${api}users`, httpOptions);
  }

  getAllTeamLeads(): Observable<any> {
    return this.http.get<any>(`${api}users?roles=teamlead`, httpOptions);
  }

  getUsersOfHr(): Observable<User[]> {
    const userId = this.getUserId();

    return this.http.get<User[]>(`${api}users?hr=${userId}`, httpOptions);
  }

  getAllHr(): Observable<any> {
    return this.http.get<any>(`${api}users?roles=HR`, httpOptions);
  }

  getAllManagers(): Observable<any> {
    return this.http.get<any>(`${api}users?roles=Manager`, httpOptions);
  }

  getUser(id?: string): Observable<User> {
    const userId = this.getUserId();

    return this.http.get<User>(`${api}users/${id || userId}`, httpOptions);
  }

  getUserId(): any {
    if (localStorage.token) {
      return this.helper.decodeToken(localStorage.token).id;
    }
  }

  getUserType(): any {
    if (localStorage.token) {
      return this.helper.decodeToken(localStorage.token).type;
    }
  }

  addUser(user: User): Observable<any> {
    return this.http.post<User>(`${api}auth/signup`, user, httpOptions);
  }

  deleteUser(id: string): Observable<any> {
    const deleteOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
      body: { id }
    };

    return this.http.delete(`${api}users/`, deleteOptions);
  }

  updateUser(user: User): Observable<any> {
    const updateUser = new UpdateUser();
    updateUser.mapUser(user);
    console.log('on servise', updateUser);

    return this.http.put<User>(`${api}users`, updateUser, httpOptions);
  }

  getHeader(): any {
    return httpOptions.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }

  postImage(avatar: File): Observable<Object> {
    const id = this.getUserId();
    const fd = new FormData();
    fd.append('id', id);
    fd.append('avatar', avatar);

    return this.http.post(`${api}users/change_avatar`, fd);
  }

}
