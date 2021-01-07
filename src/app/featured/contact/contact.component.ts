import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contactForm: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      subject: [null, Validators.required],
      message: [null, Validators.required],
      driversName: [null, Validators.required]
    })
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.submitted = true;
    }
  }

}
