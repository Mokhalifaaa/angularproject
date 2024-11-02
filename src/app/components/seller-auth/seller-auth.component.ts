import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellService } from '../../servcies/sell.service';
import { Router } from '@angular/router';
import { Iseller } from '../interface/iseller';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(private seller:SellService ,private router:Router){}
  
  
  
    signup(formRef:any):void{

      this.seller.addseller(formRef.value)
        }
      }
       
      
     
    
  


   
  
 


