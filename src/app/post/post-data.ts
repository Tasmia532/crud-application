import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, updateDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from './post'; // adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private firestore: Firestore) {}

  getAll(): Observable<Post[]> {
    const postRef = collection(this.firestore, 'posts');
    return collectionData(postRef, { idField: 'id' }) as Observable<Post[]>;
  }

  find(id: string): Observable<Post> {
    const postDoc = doc(this.firestore, `posts/${id}`);
    return docData(postDoc, { idField: 'id' }) as Observable<Post>;
  }

  create(post: Post) {
    const postRef = collection(this.firestore, 'posts');
    return addDoc(postRef, post);
  }

  update(id: string, post: Partial<Post>) {
    const postDoc = doc(this.firestore, `posts/${id}`);
    return updateDoc(postDoc, post);
  }

  delete(id: string) {
    const postDoc = doc(this.firestore, `posts/${id}`);
    return deleteDoc(postDoc);
  }
}
