import { Component, OnInit } from '@angular/core';
import{PostService} from  "../../home/shared/post.service"
import{Post} from  "../../home/shared/post"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private postService : PostService) { }
allposts;
caption;
post;
post_date;
post_id;
post_type;
user_name;
user_type;
posts: Post[];
  ngOnInit() {
  	this.user_name= 
  	 this.postService.getPost().subscribe(Post =>{
        this.allposts = Post;
     
this.postService.getPostdetails().subscribe(Post1 =>{
        this.post_type = Post1.post_type;
  });
  });
  }	 

}