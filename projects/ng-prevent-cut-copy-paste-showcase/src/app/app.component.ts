import { Component, OnInit, inject } from '@angular/core'
import { JsonPipe, NgIf } from '@angular/common'
import {
  ReactiveFormsModule,
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms'
import { distinctUntilChanged } from 'rxjs/operators'
import { NgPreventCutCopyPasteDirective } from 'ng-prevent-cut-copy-paste'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    NgPreventCutCopyPasteDirective,
  ],
})
export class AppComponent implements OnInit {
  private readonly fb = inject(UntypedFormBuilder)

  form!: UntypedFormGroup
  formValue: Record<string, unknown> | null = null

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.maxLength(50)]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
    })

    // Only for delete form value is invalid
    this.form.statusChanges.pipe(distinctUntilChanged()).subscribe((status) => {
      if (status === 'INVALID') {
        this.formValue = null
      }
    })
  }

  get formControls() {
    return this.form.controls
  }

  onSubmit() {
    if (this.form.invalid) {
      return
    }
    this.formValue = this.form.value
  }
}
