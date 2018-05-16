import { Component, OnInit } from '@angular/core';
import{ProfileService} from  "../../home/shared/profile.service"
import{Profile} from  "../../home/shared/profile"
import{FollowerCount} from  "../../home/shared/follower-count"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

key?: string;
	$key?: string;

	full_name?: string;
	mobile?: string;
	password?: string;
	user_name?: string;
	email?: string;

	FollowingCount?: string;
	Ratings?: string;
	PostCount?: string;
 ngOnInit() {
    // get the book ID
   this.key="Anu";
      this.profileService.getUserdetail(this.key).subscribe(SocialUser => {
     this.full_name =SocialUser.full_name;
     this.mobile=SocialUser.mobile;
     this.user_name=SocialUser.user_name;
     console.log('fullnme',this.full_name);
 this.profileService.getfollwersCount(this.key).subscribe(Count => {
   this.FollowingCount = Count;
        console.log('fullnme',this.FollowingCount);

    });
});
  }
}



