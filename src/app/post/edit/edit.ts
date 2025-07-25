import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDataService } from '../post-data';
import { Post } from '../post';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrls: ['./edit.css']
})
export class EditComponent {
  id!: string;
  form!: FormGroup;
  post: Post | undefined;

  constructor(
    private postService: PostDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')!;
  this.postService.find(this.id).subscribe((data: Post) => {
    this.post = data;
    this.form.patchValue(this.post);  // Pre-fill form
  });

  this.form = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });
}

  get f() { return this.form.controls; }

  async submit() {
    if (this.form.invalid) return;
    try {
      await this.postService.update(this.id, this.form.value);
      console.log('Post updated');
      this.router.navigateByUrl('/posts');
    } catch (e) {
      console.error('Update failed', e);
    }
  }
}
