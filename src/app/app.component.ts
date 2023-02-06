import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  reactiveForm!: FormGroup;

  ngOnInit() {

    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),

      address: new FormGroup({
        street1: new FormControl('', Validators.required),
        street2: new FormControl(''),
        city: new FormControl('', Validators.required),
        province: new FormControl('', Validators.required),
        postalCode: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)])
      })
    })

  }

  checkError(val: any) {
    return (this.reactiveForm.get(val)?.invalid && (this.reactiveForm.get(val)?.dirty || this.reactiveForm.get(val)?.touched))
  }

  onSubmit() {
    this.reactiveForm.markAllAsTouched();
    if (this.reactiveForm.valid) {
      alert("Submitted successfully!!!");
      console.log(this.reactiveForm.value);
      this.reactiveForm.reset();
    }
  }
}
