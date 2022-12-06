import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  
  // reactiveForm: FormGroup;

  constructor(private fb:FormBuilder) { }
  reactiveForm=this.fb.group({
    Name:['',Validators.required],
    Email:['',[Validators.required,Validators.email]],
    Bio:['',Validators.required],
    Domain:['',Validators.required]
  })
  displayData: any;
  ngOnInit(): void {} 
  onSubmit(){
    this.displayData=this.reactiveForm.value;
    this.reactiveForm.reset();
    console.log(this.displayData)
    console.log("hi")
  }

}
