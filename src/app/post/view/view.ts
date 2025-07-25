import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostDataService } from '../post-data';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  standalone: true,
   imports: [RouterModule], 
  templateUrl: './view.html',
  styleUrls: ['./view.css'],
})
export class ViewComponent {
  id!: string;
  post!: Post;

  constructor(
    private postService: PostDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post) => this.post = data);
  }

  async delete() {
    await this.postService.delete(this.id);
    this.router.navigateByUrl('/posts');
  }
}
