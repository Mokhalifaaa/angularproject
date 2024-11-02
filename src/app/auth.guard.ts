import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route , state) => {
   const router =inject(Router)

 const localdata=JSON.parse(localStorage.getItem('sellerlocal')||'null')
   if(localdata!=null){
debugger;
  return true;
  }else{
   router.navigateByUrl('/seller-auth')
   return false;
    
 }
}

