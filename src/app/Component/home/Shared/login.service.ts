import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import{ SocialUser }from "../../home/shared/social-user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  socialUser: FirebaseListObservable<any[]>;
  socialDetails:FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) { }

  getUsers() {
    this.socialUser = this.db.list('Social/SocialUser') as FirebaseListObservable<SocialUser[]>;
    console.log('social details',this.socialUser);
    return this.socialUser;
  }
  getUserdetails(id) {
    console.log("id",id);
    this.socialDetails = this.db.object('Social/SocialUser/'+id) as FirebaseObjectObservable<SocialUser[]>;
    console.log('social details',this.socialDetails);
    return this.socialDetails;
  }

  addSocialUsers(id,user){
    if(!this.socialUser){
      this.socialUser = this.getUsers();
    }
    return this.socialUser.set(id,user);
    
  }
}
