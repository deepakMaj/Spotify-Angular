import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { AboutComponent } from '../components/about/about.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AuthGuardService } from '../guards/auth.guard';
import { ProfileComponent } from '../components/profile/profile.component';
import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { AlbumComponent } from '../components/album/album.component';
import { PlaylistComponent } from '../components/playlist/playlist.component';
import { ArtistComponent } from '../components/artist/artist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'account', component: EditUserComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'album/:id', component: AlbumComponent, canActivate: [AuthGuardService] },
  { path: 'artist/:id', component: ArtistComponent, canActivate: [AuthGuardService] },
  { path: 'playlist/:id', component: PlaylistComponent, canActivate: [AuthGuardService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
