import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,ReactiveFormsModule,NgForm } from '@angular/forms';  


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regiForm: FormGroup;  
  FirstName:string='';  
  LastName:string='';  
  Password:string='';  
  ConfirmPassword:string='';  
  Email:string='';  
  CompanyName:string='';  
  IsAccepted:number=0;  
  constructor(private fb: FormBuilder) {   
  
    // To initialize FormGroup  
    this.regiForm = fb.group({  
      'FirstName' : [null, Validators.required],  
      'LastName' : [null, Validators.required],  
      'Password':[null, Validators.required],  
      'ConfirmPassword':[null, Validators.required],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])], 
      'CompanyName':[null, Validators.required],  
      'IsAccepted':[null]  
    });  
  
  }  
  // On Change event of Toggle Button  
  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  

  ngOnInit() {
  }

}
