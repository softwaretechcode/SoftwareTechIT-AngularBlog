import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


export class YouTubeService {
    
    http_client: HttpClient
    BASE_URL = "https://www.googleapis.com/youtube/v3/";
    plstitems = "playlistItems?";
    keyp = "AIzaSyC4b0Bri4yU8nrxU0_Km1clN2sypINOXqs";
    apiKey = "key="+ this.keyp;
    CHANNEL_ID = "UCLU4EFzGkjsRKrPKD8bhG-A";
    chid = "&channelId=" + this.CHANNEL_ID;
    playlistid = "UULU4EFzGkjsRKrPKD8bhG-A";
    mx = "&maxResults=25";
    ord = "&sort=date";
    part = "&part=snippet";
    sch = "search?";
    ply = "playlists?";
    part_plst = "&part=snippet,contentDetails,status";
    query = "&q=";
    type = "&type=";
    NPT = "&PageToken=";
    IDC = "&id=" + this.CHANNEL_ID;
    ch_part = "&part=snippet,statistics,brandingSettings";
    CH = "channels?";


    constructor(private httpClient: HttpClient) {
        this.http_client = httpClient
    }

   // https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4b0Bri4yU8nrxU0_Km1clN2sypINOXqs&maxResults=25&sort=date&part=snippet&q=android&type=video
    getYouTubeSearchVideosService(yoursearch:any) {
        let httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
       return this.http_client.get(this.BASE_URL +this.sch+this.apiKey+this.mx+this.ord+this.part+this.query+yoursearch+this.type+"video")
    }

}