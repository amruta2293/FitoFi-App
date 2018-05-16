import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import{Post}from "../../home/shared/post"

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: FirebaseListObservable<any[]>;
  postsdetails:FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) { }
   getPost() {
    this.posts = this.db.list('Posts') as FirebaseListObservable<Post[]>;
    return this.posts;
  }
  getPostdetails() {
    this.postsdetails = this.db.object('Posts') as FirebaseObjectObservable<Post[]>;
    return this.postsdetails;
  }
}
