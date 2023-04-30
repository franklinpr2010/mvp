
import { ResponseApi } from './../../model/response-api';
import { SharedService } from './../../services/shared.service';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/model/endereco';
import { Credor } from 'src/app/model/credor';
import { CredorService } from 'src/app/services/credor.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialog } from 'src/app/api/confirmation-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-credor-list',
  templateUrl: './credor-list.component.html',
  styleUrls: ['./credor-list.component.css']
})
export class CredorListComponent implements OnInit {

  page:number=0;
  page_size:number=5;
  pages:Array<number> | any;
  shared : SharedService;
  message : {} | any;
  classCss : {} | any;
  listCredor=null;
  endereco = new Endereco('', '', '', '', '', '', '', '' );
  credor = new Credor('','', '','', null as any, null as any, this.endereco);

  constructor(
    private credorService: CredorService,
    private router: Router,
    private dialog: MatDialog) { 
      this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.findAll(this.page,this.page_size);
  }

  findAll(page:number,count:number){
    page++
    this.credorService.findAll(count,page).subscribe((responseApi:any) => {
        this.listCredor = responseApi.results;
        console.log(this.listCredor);
        var total = responseApi.total;
        var quantidadePag = Math.trunc(total/this.page_size + 1)
        console.log(quantidadePag, total, this.page_size)
        this.pages = new Array(quantidadePag);

    } , err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  

  cleanFilter(): void {
    this.page = 0;
    this.page_size = 5;
    this.findAll(this.page,this.page_size);
  }


  edit(id:string){
    this.router.navigate(['/credor-new',id]);
  }

  detail(id:string){
    this.router.navigate(['/credor-detail',id]);
  }


  openDialog(id:string) {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
    data:{
        message: 'Do you want to delete the product and the associated licenses?'
    }
    });
     
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
            this.delete(id);
        }
    });
} 

  delete(id:string){
      this.message = {};
      this.credorService.delete(id).subscribe((responseApi:any) => {
          this.showMessage({
            type: 'success',
            text: `Registro excluído`
          });
          this.findAll(this.page,this.page_size);
      } , err => {
        this.showMessage({
          type: 'error',
          text: err['error']['errors'][0]
        });
      });
    }


  setNextPage(event:any){
    event.preventDefault();
    if(this.page+1 < this.pages.length){
      this.page =  this.page +1;
      this.findAll(this.page,this.page_size);
    }
  }

  setPreviousPage(event:any){
    event.preventDefault();
    if(this.page > 0){
      this.page =  this.page - 1;
      this.findAll(this.page,this.page_size);
    }
  }

  setPage(i:any,event:any){
    event.preventDefault();
    this.page = i;
    this.findAll(this.page,this.page_size);
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = {};
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-'+type] =  true;
  }
  
}
