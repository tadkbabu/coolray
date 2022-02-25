import { Component, OnInit } from '@angular/core';
import { faSearch, faSpinner, faMicrophone, faTimesCircle, faMicrophoneAltSlash, faMicrophoneSlash, faWaveSquare, faPauseCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
faSearch = faSearch;
  constructor() { }

  ngOnInit() {
  }

}
