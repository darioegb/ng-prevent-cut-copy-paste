import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  formValue: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.maxLength(50)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    });

    // Only for delete form value is invalid
    this.form.statusChanges
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(status => {
        if (status === 'INVALID') {
          this.formValue = null;
        }
      });

  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.formValue = this.form.value;
  }

}
