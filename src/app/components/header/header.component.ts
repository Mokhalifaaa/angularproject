import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 constructor(private router:Router){}

  navlinkcomponent=[
    {
      path:"/" ,label:"home", exact:true
    },
    {
      path:"/cart" ,label:"Cart"
     },
    
   
  ]


  logout() {
    localStorage.removeItem('user'); 
    this.router.navigate(['/login']);
  }
  
}
