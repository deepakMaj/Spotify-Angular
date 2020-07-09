import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularTokenModule } from 'angular-token';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SignupComponent } from './components/signup/signup.component'; 
import { LoginComponent } from './components/login/login.component'; 
import { NavbarService } from './services/navbar.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './components/profile/profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { GsPlayerModule} from 'gs-player';
import { SpotifyService } from './services/spotify.service';
import { FooterComponent } from './components/footer/footer.component';
import { AlbumComponent } from './components/album/album.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidenavComponent,
    SignupComponent,
    HomeComponent,
    SearchComponent,
    NotFoundComponent,
    AboutComponent,
    ProfileComponent,
    EditUserComponent,
    FooterComponent,
    AlbumComponent,
    PlaylistComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AngularTokenModule.forRoot(environment.angularToken),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    GsPlayerModule
  ],
  providers: [AngularTokenModule, NavbarService, AuthService, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
