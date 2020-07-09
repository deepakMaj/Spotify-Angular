import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  headers = new HttpHeaders({'Content-Type':'application/json'});
  playlistUrl: string = 'http://localhost:3000/api/v1/spotify/Playlist';
  albumUrl: string = 'http://localhost:3000/api/v1/spotify/Album';
  searchTrackUrl = 'http://localhost:3000/api/v1/spotify/TrackSearch';
  searchAlbumUrl = 'http://localhost:3000/api/v1/spotify/AlbumSearch';
  searchPlaylistUrl = 'http://localhost:3000/api/v1/spotify/PlaylistSearch';
  searchArtistUrl = 'http://localhost:3000/api/v1/spotify/ArtistSearch';
  findPlaylistUrl = 'http://localhost:3000/api/v1/spotify/FindPlaylist';
  findArtistUrl = 'http://localhost:3000/api/v1/spotify/FindArtist';
  findAlbumUrl = 'http://localhost:3000/api/v1/spotify/FindAlbum';
  findTrackUrl = 'http://localhost:3000/api/v1/spotify/FindTrack';
  play: Subject<string>;
 
  constructor(private http: HttpClient) { 
    this.play = new Subject<string>();
  }

  getPlaylists(){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.playlistUrl)
    .subscribe(res => resolve(res), err => reject(err));
    });
  }

  getAlbums(){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.albumUrl)
    .subscribe(res => resolve(res), err => reject(err));
    });
  }

  getSearchTracks(data: string){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.searchTrackUrl+'?id='+data)
      .subscribe(res => resolve(res), err => reject(err));
    });
  }

  getSearchAlbums(data: string){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.searchAlbumUrl+'?id='+data)
      .subscribe(res => resolve(res), err => reject(err));
    });
  }

  getSearchPlaylists(data: string){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.searchPlaylistUrl+'?id='+data)
      .subscribe(res => resolve(res), err => reject(err));
    });
  }

  getSearchArtists(data: string){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.searchArtistUrl+'?id='+data)
      .subscribe(res => resolve(res), err => reject(err));
    });
  }

  findPlaylist(id: string){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.findPlaylistUrl+'?id='+id)
      .subscribe(res => resolve(res), err => reject(err));
    });
  }

  findAlbum(id: string){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.findAlbumUrl+'?id='+id)
      .subscribe(res => resolve(res), err => reject(err));
    });
  }

  findArtist(id: string){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.findArtistUrl+'?id='+id)
      .subscribe(res => resolve(res), err => reject(err));
    });
  }

  findTrack(id: string){
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.findTrackUrl+'?id='+id)
      .subscribe(res => resolve(res), err => reject(err));
    });
  }

  setPlay(data: string): void{
    this.play.next(data);
  }

  onSetPlay(): Observable<string>{
    return this.play;
  }

}
