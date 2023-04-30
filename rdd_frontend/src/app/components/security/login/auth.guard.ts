
import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';


@Injectable()
export class AuthGuard implements CanActivate {

  public shared: SharedService;
  
  constructor(private userService: UserService,
              private router: Router) { 
                this.shared = SharedService.getInstance();
  }
  
  canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('tes')
    if(this.shared.isLoggedIn()){
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
