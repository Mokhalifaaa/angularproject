import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisproductsService } from '../../servcies/apisproducts.service';
import { Iproduct } from '../interface/iproduct';
import { HttpClient } from '@angular/common/http';
import { ProdectcardComponent } from "../prodectcard/prodectcard.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProdectcardComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private router: ActivatedRoute, public apisproduct: ApisproductsService,private http:HttpClient) { }
  selectedproduct!:any| undefined
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id")

    if (id) {
   this.apisproduct.getAllProduct().subscribe(
    {next:(data)=>{
      this.selectedproduct=data.find((product)=> product.id==id)
      // console.log(this.selectedproduct);
      
    }}
   )

   
  

        
      
    

}


}
}

