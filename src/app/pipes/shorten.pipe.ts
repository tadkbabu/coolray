import { Pipe, PipeTransform } from "@angular/core";
import {  Subscription } from "rxjs";

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value: any) {
        if(value.length > 400) {
            return (value.substr(0, 400) + ' ...')
        }

        return value;
    }
}