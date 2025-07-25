import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { PostDataService } from '../post-data';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.html',
  styleUrls: ['./index.css']
})
export class IndexComponent {

  posts$!: Observable<Post[]>;   // Observable

  constructor(private postService: PostDataService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }

  deletePost(id: string) {
    this.postService.delete(id).then(() => {
      console.log('Post deleted successfully!');
      // No manual filter needed – Firestore updates automatically
    });
  }
}
