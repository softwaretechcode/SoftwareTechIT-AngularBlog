import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-custom-ads',
    templateUrl: './custom-ads.component.html',
    styleUrls: ['./custom-ads.component.css'],
    standalone: true
})
export class CustomAdsComponent implements OnInit {
 
  postAds={
    _id: null, 
    adsCode: null, 
  }

  constructor() { }

  ngOnInit(): void {
    this.postAds.adsCode='<a href="https://www.ezoic.com/de-lang/?tap_a=122715-e0a83b&tap_s=3133349-63334e" target="_BLANK" rel="nofollow"><img src="https://static.tapfiliate.com/63a04c307d550665734433.jpeg?a=122715-e0a83b" border="0" /></a>';
  }

 
}
