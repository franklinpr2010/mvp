import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RDD_API } from './rdd.api';
import { Devedor } from '../model/devedor';


@Injectable()
export class DevedorService {

  constructor(private http: HttpClient) {}

  createOrUpdate(devedor: Devedor){
    if(devedor.id != null && devedor.id != ''){
      return this.http.put(`${RDD_API}/rdd/v1/devedores`,devedor);
    } else {
      devedor.id = '';
      return this.http.post(`${RDD_API}/rdd/v1/devedores`, devedor);
    }
  }

  findAll(page:number,count:number){
    return this.http.get(`${RDD_API}/rdd/v1/devedores/${page}/${count}`);
  }

  findById(id:string){
    return this.http.get(`${RDD_API}/rdd/v1/devedores/${id}`);
  }

  delete(id:string){
    return this.http.delete(`${RDD_API}/rdd/v1/devedores/${id}`);
  }

  findByParams(page:number,count:number){
    return this.http.get(`${RDD_API}/rdd/v1/devedores/${page}}`);
  }

}
