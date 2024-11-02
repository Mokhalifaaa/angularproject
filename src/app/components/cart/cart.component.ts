import { Component } from '@angular/core';
import { CartService } from '../../servcies/cart.service';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../interface/iproduct';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartserves:CartService){}

  deletefromcart(item:Iproduct){
 console.log( this.cartserves.delete(item))

}
}
