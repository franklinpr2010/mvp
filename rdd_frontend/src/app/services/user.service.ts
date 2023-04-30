
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/user';
import { RDD_API } from './rdd.api';

@Injectable()
export class UserService {
  
  constructor(private http: HttpClient) {}

  login(user: User){
    console.log(user.password, user.username)
    return this.http.post(`${RDD_API}/rdd-user-login/`,user);
  }

  findById(id:string){
    return this.http.get(`${RDD_API}/rdd/v1/user/${id}`);
  }

}