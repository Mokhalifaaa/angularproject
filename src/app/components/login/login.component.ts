import { Component, input, OnInit } from '@angular/core';
import { UserService } from '../../servcies/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

constructor(private userserv:UserService ,private router:Router,){}
  
    

  adduserform(formRef:any){
    this.userserv.adduser(formRef.value).subscribe(
      {
        next:(data)=>{
          localStorage.setItem('user',JSON.stringify(data))
          if(data){
            this.router.navigate(['/'])
          }
          

        },
        error:(data)=>{
          console.log(" erro ");
          
        }
      }
    )
    

    
  }
  
}
