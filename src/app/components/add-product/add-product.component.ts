import { Component } from '@angular/core';
import { ApisproductsService } from '../../servcies/apisproducts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
 constructor(private apisproduct:ApisproductsService){}
 
 addproductform(formRef:any){
  this.apisproduct.addproduct(formRef.value).subscribe({
    next:(data)=>{
     
      
    }
  })
 }
 
}
