
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class SearchService {
    // private searchUrl = "assets/presults.json";

    constructor(private httpClient: HttpClient) {
    }

    // getSearchResults(val: String) {
    //     return this.httpClient.get(this.searchUrl)
    // }

}