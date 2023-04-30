import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RDD_API } from './rdd.api';
import { Credor } from '../model/credor';

@Injectable()
export class CredorService {

  constructor(private http: HttpClient) {}

  createOrUpdate(credor: Credor){
    if(credor.id != null && credor.id != ''){
      return this.http.put(`${RDD_API}/rdd/v1/credores/${credor.id}`,credor);
    } else {
      return this.http.post(`${RDD_API}/rdd/v1/credores/`, credor);
    }
  }

  findAll(page:number,count:number){
    console.log(page, count)
    return this.http.get(`${RDD_API}/rdd/v1/credores/?page_size=${page}&page=${count}`);
  }

  findById(id:string){
    return this.http.get(`${RDD_API}/rdd/v1/credores/${id}/`);
  }

  delete(id:string){
    return this.http.delete(`${RDD_API}/rdd/v1/credores/${id}/`);
  }

}
