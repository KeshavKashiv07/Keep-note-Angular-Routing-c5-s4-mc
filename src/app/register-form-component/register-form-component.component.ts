import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-register-form-component',
  templateUrl: './register-form-component.component.html',
  styleUrls: ['./register-form-component.component.css']
})
export class RegisterFormComponentComponent implements OnInit {

  constructor(private forms: FormBuilder , private snackBar: MatSnackBar , private userService : NoteService) { }

  registerForm =  this.forms.group({
    firstName: ['' , [Validators.required,Validators.minLength(2)]],
    lastName: ['',[Validators.required]],
    password: ['' ,[Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['' ,[Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    gander:[''],
    age:[0,[Validators.required , Validators.min(18)]],
    email: ['',[Validators.required ,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
    phone: ['',[Validators.required ,Validators.pattern(/^[789]\d{9,9}$/)]],
    address:  this.forms.group({
      street: [''],
      city: [''],
      state: [''],
      zipCode: ['',[Validators.required , Validators.pattern(/^[0-9]{5,6}$/)]],
    })
  },{ validators: [this.MustMatch]});


  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }
  get age(){
    return this.registerForm.get('age');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get phone(){
    return this.registerForm.get('phone');
  }

  get zipCode(){
    return this.registerForm.get('zipCode');
  }


  MustMatch(item: AbstractControl){
    const passwordValue = item.get("password")?.value;
    const confirmPasswordValue = item.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
        return { passwordMismatch: true }
    }
    return null;
  }

  onSubmit(): void {
    let userValues : User = this.registerForm.value as User;
    this.userService.addUser(userValues).subscribe({
      next : data =>{
          console.log(this.registerForm.value);
          this.snackBar.open('Congrats!!You have submiited the form!!', 'success', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.registerForm.reset();
      }
    })
  }

  ngOnInit(): void {
  }

}
