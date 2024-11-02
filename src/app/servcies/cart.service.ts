import { Injectable } from '@angular/core';
import { Iproduct } from '../components/interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartItems:Iproduct[]=[]=JSON.parse(localStorage.getItem('localcartItems')||'[]')
addtocart(item:Iproduct){
  const existingProduct = this.cartItems.find(cartItem => cartItem.id === item.id);
  if(existingProduct){
    existingProduct.quantity +=1
  }else{
  this.cartItems.push({...item,quantity: 1})
  }
  localStorage.setItem('localcartItems',JSON.stringify(this.cartItems))
}
getitem(){
  return    this.cartItems
}
delete(item:Iproduct){
  this.cartItems=this.cartItems.filter((i)=>i.id !== item.id)
  localStorage.setItem('localcartItems',JSON.stringify(this.cartItems))
}

incresquantity(id:string){
  let item=this.cartItems.find((i)=>i.id === id )
  if(item){
    item.quantity++;
  }
  localStorage.setItem('localcartItems',JSON.stringify(this.cartItems))
    
}
decresquantity(id:string){
  let item=this.cartItems.find((i)=>i.id === id )
  if(item ){
   
      item.quantity--;
    
    
  }
  localStorage.setItem('localcartItems',JSON.stringify(this.cartItems))
    
}
gettotel(){
  return this.cartItems.reduce((acc,item)=>{
    return acc+ item.price*item.quantity
  },0)
  

}
  constructor() { }
}
