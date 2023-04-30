import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Credor } from 'src/app/model/credor';
import { Endereco } from 'src/app/model/endereco';
import { ResponseApi } from 'src/app/model/response-api';
import { User } from 'src/app/model/user';
import { CredorService } from 'src/app/services/credor.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-credor-new',
  templateUrl: './credor-new.component.html',
  styleUrls: ['./credor-new.component.css']
})
export class CredorNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm = null as any;
  endereco = new Endereco('', '', '', '', '', '', '', '' );
  credor = new Credor('','', '','', null as any, null as any, this.endereco);
  credores = []
  shared : SharedService;
  message : any;
  classCss : any;
  public customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]')} };
  currentAction: string = '';

  constructor(
    private credorService: CredorService,
    
    private route: ActivatedRoute) { 
      this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id:string = this.route.snapshot.params['id'];
    if(id != undefined){
      this.findById(id);
    }
  }

  findById(id:string){
    this.credorService.findById(id).subscribe((responseApi:any) => {
      this.credor = responseApi;
  } , err => {
    this.showMessage({
      type: 'error',
      text: err['error']['errors'][0]
    });
  });
  }

  register(){
    this.message = {};
    this.credor.usuario = Object.assign(User, this.shared.user); 
    this.credorService.createOrUpdate(this.credor).subscribe((cred:any) => {
        this.form.resetForm();
        this.showMessage({
          type: 'success',
          text: `Registered ${cred.nomeCredor} successfully`
        });
    } , err => {
      console.log('error', err.error)
      if(err.status == 400) {
        this.showMessage({
          type: 'error',
          text: JSON.stringify(err.error)
        });
      } 
    });
  }

  getFormGroupClass(isInvalid: boolean, isDirty:boolean): {} {
    return {
      'form-group': true,
      'has-error' : isInvalid  && isDirty,
      'has-success' : !isInvalid  && isDirty
    };
  }

  private showMessage(message: {type: string, text: string}): void {
      this.message = message;
      this.buildClasses(message.type);
      setTimeout(() => {
        this.message = undefined;
      }, 3000);
  }

  private buildClasses(type: any): void {
     this.classCss = {
       'alert': true
     }
     this.classCss['alert-'+type] =  true;
  }

  

}
