import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router'; 
import { stringify } from 'querystring';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  id: any;
  playlist: any;
  date: any;
  time: any;
  fullTime: any;
  showLoading: boolean = true;
  followers: any;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => this.showLoading = false, 5500);
    this.getPlaylist();
  }

  getPlaylist(){
    this.id = this.route.snapshot.params['id'];
    this.spotifyService.findPlaylist(this.id)
    .then(res => {
      this.playlist = res;
      this.date = new Date(this.playlist.release_date).getFullYear();
      this.getFollowers(this.playlist.followers.total.toString());
      this.getFullTime(this.playlist);
      this.getTimeInMinSec(this.playlist);
    })
    .catch(err => console.log(err));
  }

  onClickPlay(id: string){
    this.spotifyService.setPlay(id);
  }

  getFollowers(follower: string){
    let lastThree = follower.substring(follower.length-3);
    let otherNumbers = follower.substring(0,follower.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    this.followers = res;
  }

  getTimeInMinSec(playlist: any){
    playlist.tracks_cache.forEach(track => {
      let millis = track.duration_ms;
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      track.duration_ms = minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
    });
  }

  getFullTime(playlist: any){
    let getTime: any = 0;
    let hrs: any, min: any, sec: any; 
    playlist.tracks_cache.forEach(track => {
      getTime += track.duration_ms;
    });
    console.log(getTime);
    if(getTime >= 60000*60){
      hrs = Math.floor((getTime / (1000 * 60 * 60)) % 24);
      min = Math.floor((getTime / (1000 * 60)) % 60);
      this.fullTime = `${hrs} hrs ${min} min`;
    } else{
      min = Math.floor(getTime / 60000);
      sec = ((getTime % 60000) / 1000).toFixed(0);
      this.fullTime = `${min} min ${sec} sec`;
    }
  }


}
