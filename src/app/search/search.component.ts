import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { environment } from '../../environments/environment';
import { debounceTime, delay, switchMap, take, takeUntil } from "rxjs/operators";

import { faSearch, faSpinner, faMicrophone, faTimesCircle, faMicrophoneAltSlash, faMicrophoneSlash, faWaveSquare, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { RxSpeechRecognitionService, resultList, SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [RxSpeechRecognitionService]
})
export class SearchComponent implements OnInit {

  searchResults: any[];
  resultsCnt = 0;
  resultLinkText;
  resultLinkUrl;
  resultPassage;
  resultShortAnswer;
  isRespReceived = false;

  faSearch = faSearch;
  faSpinner = faSpinner;
  faMicrophone = faMicrophone;
  faTimesCircle = faTimesCircle;
  faMicrophoneAltSlash = faMicrophoneAltSlash;
  faMicrophoneSlash = faMicrophoneSlash;
  faPauseCircle = faPauseCircle;


  isInProgress = false;
  isSpeechOn = false;
  message = "";

  subs: Subscription;

  // private searchUrl = "assets/results/response.json";

  constructor(private httpClient: HttpClient,
    public speechSrv: RxSpeechRecognitionService) {

  }

  ngOnInit() {
  }

  stopSpeeach() {
    this.subs.unsubscribe();
    this.isSpeechOn = false;
    this.getSearchResults(this.message);
  }

  listenSpeech() {
    this.isSpeechOn = true;
    this.subs = this.speechSrv
      .listen()
      .pipe(resultList, debounceTime(500))
      .subscribe((list: SpeechRecognitionResultList) => {
        this.message = list.item(0).item(0).transcript;
      });

  }

  getSearchResults(searchVal) {
    // const body =  {"query":"i forgot my password"};
    this.isInProgress = true;
    this.isRespReceived = false;
   let searchUrl = environment.hostUrl + '/search'; 

    const body = { "query": searchVal };
    
    this.subs = this.httpClient.post<any>(searchUrl, body)
      .subscribe(resp => {
        this.searchResults = resp["documents"];
        this.resultShortAnswer  = resp["result"]
        this.resultsCnt = resp["count"];
        this.resultLinkText = resp["title"];
        this.resultLinkUrl = resp["url"];
        this.resultPassage = resp["passage"];
        this.isRespReceived = true;
        this.isInProgress = false;
      });

    // this.subs =  this.httpClient.get<any>(this.searchUrl)
    // .pipe(delay(3000))
    // .subscribe(resp => {
    //   this.searchResults = resp["documents"];
    //   this.resultShortAnswer  = resp["result"]
    //   this.resultsCnt = resp["count"];
    //   this.resultLinkText = resp["title"];
    //   this.resultLinkUrl = resp["url"];
    //   this.resultPassage = resp["passage"];
    //   this.isRespReceived = true;
    //   this.isInProgress = false;
    //   });

  }

}
