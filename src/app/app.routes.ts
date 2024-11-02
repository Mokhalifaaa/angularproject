import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { authGuard } from './auth.guard';



export const routes: Routes = [

    {
        path:'',
        component:ProductListComponent,
        title:"Home"
    },
    {
        path:'cart',
        component:CartComponent,
        title:"cart",
        
    },
   
    {
        path:'product-details/:id',
        component:ProductDetailsComponent,
        title:"productdetails"
    },
    {
        path:'seller-auth',
        component:SellerAuthComponent,
        title:"seller-auth"
    },
    {
        path:'seller-home',
        canActivate:[authGuard],
        component:SellerHomeComponent,
        title:"seller-home"
    },
    {
        path:'add-product',
        component:AddProductComponent,
        title:"add-product"
    },
    {
        path:'login',
        component:LoginComponent,
        title:"login",
        
    },
    
    ];
