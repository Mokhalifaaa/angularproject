import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../components/interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApisproductsService {

  constructor(private httpclient:HttpClient) { }
  x!:Iproduct|undefined;
    getAllProduct(){
      return this.httpclient.get<Iproduct[]>('http://localhost:8000/products')
    }
    getproductById(id:string){
     return  this.httpclient.get(`http://localhost:8000/products${id}`)
  
    }
    deleteproduct(id:string){
      return this.httpclient.delete(`http://localhost:8000/products${id}`)
    }
    addproduct(product:Iproduct){
       return this.httpclient.post(`http://localhost:8000/products`,product)
    }
   
  
}
