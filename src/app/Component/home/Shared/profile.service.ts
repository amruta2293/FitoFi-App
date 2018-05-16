import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import{Profile}from "../../home/shared/profile"
import{FollowerCount}from "../../home/shared/follower-count"

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userdetails:FirebaseObjectObservable<any>;
followersCount:FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) { }
  getUserdetail(id)
  {
 this.userdetails = this.db.object('Social/SocialUser/'+id) as FirebaseObjectObservable<Profile[]>;
 console.log('fullnme',this.userdetails);
    return this.userdetails;
  }
  getfollwersCount(id){
  	this.followersCount=this.db.object('CalculatedVals/FollowersCount'+id)as FirebaseObjectObservable<FollowerCount[]>
    console.log('followersCount',this.followersCount);
    return this.followersCount;
  	 }
}
