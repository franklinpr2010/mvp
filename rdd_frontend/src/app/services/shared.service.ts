
import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Injectable()
/**
 * Tela que vai guardar o token
 *  */
export class SharedService {

  public static instance: SharedService;
  user : User | undefined;
  token: string | undefined;
  showTemplate = new EventEmitter<boolean>();

  constructor() { 
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

  /**
   * 
   * @returns Quando tiver logado vai renderizar
   */
  isLoggedIn():boolean {
    if(this.user == null){
      return false;
    }
    return this.user.id != '';
  }

}
