import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: any;
  followers: any;
  showLoading: boolean =  true;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => this.showLoading = false, 3500);
    this.getArtist();
  }

  getArtist(){
    this.id = this.route.snapshot.params['id'];
    this.spotifyService.findArtist(this.id)
    .then(res => {
      this.artist = res;
      this.getFollowers(this.artist.followers.total.toString());
    })
    .catch(err => console.log(err));
  }

  getFollowers(follower: string){
    let lastThree = follower.substring(follower.length-3);
    let otherNumbers = follower.substring(0,follower.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    this.followers = res;
  }

}
