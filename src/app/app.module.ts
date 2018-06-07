import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { AppComponent } from './app.component';
//eviroment  Variable

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { HomeComponent } from './Component/home/home.component';
import { PostComponent } from './Component/home/post/post.component';
import { RouterModule, Routes} from '@angular/router';

//mat - libraby
import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule, 
  MatGridListModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatToolbarModule, 
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  DateAdapter,
  MatSelectModule,
} from '@angular/Material';
import { ProfileComponent } from './Component/home/profile/profile.component';
import { OffersComponent } from './Component/home/offers/offers.component';
import { SuggesionComponent } from './Component/home/suggesion/suggesion.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {path: 'home-cmp', component:HomeComponent},
  {path: 'display', component:DisplayDataComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    ProfileComponent,
    OffersComponent,
    SuggesionComponent,
    NavbarComponent,
    LoginComponent,
    DisplayDataComponent,
    RegisterComponent
 
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(environment.firebase),AngularFireDatabaseModule,
      MatButtonModule,MatSelectModule, MatCheckboxModule,MatCardModule,MatGridListModule,MatInputModule,MatDatepickerModule,
    RouterModule.forRoot(appRoutes),FormsModule,MatNativeDateModule,MatToolbarModule,MatListModule,MatIconModule,MatTabsModule, MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
