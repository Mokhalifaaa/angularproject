import { Component, Input,  } from '@angular/core';
import { Iproduct } from '../interface/iproduct';
import {  RouterModule } from '@angular/router';
import { EventEmitter } from '@angular/core';

import { CartService } from '../../servcies/cart.service';

@Component({
  selector: 'app-prodectcard',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './prodectcard.component.html',
  styleUrl: './prodectcard.component.css'
})
export class ProdectcardComponent   {
  @Input() dynamicproduct!:Iproduct
    
  

  constructor(private cartserves: CartService ) {}
  
  handaddtocart(event: MouseEvent) {
      event.stopPropagation();
  
      try {
          this.cartserves.addtocart(this.dynamicproduct);
          
      } catch (error) {
          console.error("Error adding product to cart:", error);
            }
  }
  

 }

 



 



