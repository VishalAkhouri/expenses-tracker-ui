import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'etu-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

  user: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.constructItemForm();
  }

  handleSubmit() {
    // todo
    console.log('submitting...');
  }
  private constructItemForm() {
    this.user = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

}
