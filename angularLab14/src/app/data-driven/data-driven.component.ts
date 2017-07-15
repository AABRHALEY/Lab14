import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  Validators,
  FormControl 
} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  
})
export class DataDrivenComponent {
  data;
  myForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private userService:UserService) { 
   
  this.myForm = formBuilder.group({
       'name' : ['', [Validators.required]],
       'email' : ['', [
         Validators.required, 
         Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
       'address': formBuilder.group ({
         'zipecode' : ['', Validators.compose([Validators.required, Validators.minLength(10)]) ]  })
     });

     this.myForm.statusChanges.subscribe(
       (data: any) => console.log(data)
     );
    }

     onSubmit(){
     console.log(this.myForm);
     }

   getData(){
    this.data = this.userService.getUser().subscribe(data=> console.log(data.json() ));

    this.userService.getUser().subscribe(data => {
      this.myForm.controls['name'].setValue(data.json().name);
      this.myForm.controls['email'].setValue(data.json().email);
      this.userService.getPost().subscribe( post => {
      this.myForm.controls['zipecode'].setValue(post.json()[0].body);
        console.log(post.json());
      });
    });
   }
   }
