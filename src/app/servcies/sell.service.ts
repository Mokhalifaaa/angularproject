import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iseller } from '../components/interface/iseller';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellService {
 
  constructor( private httpclient:HttpClient,private router:Router) { }
  addseller(data:Iseller){
   
        this.httpclient.post(`http://localhost:8000/seller`,data).subscribe(
      
        (res)=>{
          if(res){
          localStorage.setItem('sellerlocal',JSON.stringify(res));
          console.log(res);
          this.router.navigate(['/seller-home'])
          }
        }
      
     )
   
    
  }
}
