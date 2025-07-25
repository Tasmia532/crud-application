import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostDataService } from '../post-data';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.html',
  styleUrls: ['./create.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostDataService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.form.controls; }

  async submit() {
    if (this.form.invalid) return;
  try {
    await this.postService.create(this.form.value);
    this.router.navigateByUrl('/posts');
  } catch (e) {
    console.error(e);
  }
}

  }
