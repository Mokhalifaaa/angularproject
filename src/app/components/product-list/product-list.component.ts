import { Component, OnInit } from '@angular/core';
import { ApisproductsService } from '../../servcies/apisproducts.service';
import { Iproduct } from '../interface/iproduct';
import { ProdectcardComponent } from '../prodectcard/prodectcard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProdectcardComponent,FormsModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{
 constructor(private apiProducts:ApisproductsService){}
 product:Iproduct[]=[]
 
 
 ngOnInit(): void {
   this.apiProducts.getAllProduct().subscribe({
     next:(data)=>{
       this.product=data
       ;
              }
      })
      
    }
   


  
 

  }


