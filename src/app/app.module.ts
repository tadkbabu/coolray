import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { SpeechRecognitionModule } from '@kamiazya/ngx-speech-recognition';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ShortenPipe } from './pipes/shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    MainComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    SpeechRecognitionModule.withConfig({ lang: 'en-US', interimResults: true, maxAlternatives: 10, })
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
