import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: any;
  date: any;
  time: any;
  fullTime: any;
  showLoading: boolean = true;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => this.showLoading = false, 2000);
    this.getAlbum();
  }

  onClickPlay(id: string){
    this.spotifyService.setPlay(id);
  }

  getAlbum(){
    this.id = this.route.snapshot.params['id'];
    this.spotifyService.findAlbum(this.id)
    .then(res => {
      this.album = res;
      this.date = new Date(this.album.release_date).getFullYear();
      this.getFullTime(this.album);
      this.getTimeInMinSec(this.album);
    })
    .catch(err => console.log(err));
  }

  getTimeInMinSec(album: any){
    album.tracks_cache.forEach(track => {
      let millis = track.duration_ms;
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      track.duration_ms = minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
    });
  }

  getFullTime(album: any){
    let getTime: any = 0;
    let hrs: any, min: any, sec: any; 
    album.tracks_cache.forEach(track => {
      getTime += track.duration_ms;
    });
    if(getTime >= 60000*60000){
      hrs = Math.floor(getTime/60000/60000);
      min = (( getTime % 60000) / 6000).toFixed(0);
      this.fullTime = `${hrs} hrs ${min} min`;
    } else{
      min = Math.floor(getTime / 60000);
      sec = ((getTime % 60000) / 1000).toFixed(0);
      this.fullTime = `${min} min ${sec} sec`;
    }
  }
  
}
