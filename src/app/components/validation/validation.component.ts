import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent  {

   form = new FormGroup({
     email: new FormControl('', Validators.required),
     password: new FormControl()
   });

}
