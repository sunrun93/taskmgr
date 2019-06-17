import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Quote } from '../domain/quote';

@Injectable()
export class QuoteService {
    // private uri: string = 'https://api.hzy.pw/saying/v1/ciba';
    constructor(@Inject('BASE_CONFIG') private config,
        private http: HttpClient) {
    }

    getQuote(): Observable<any> {
        const url = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
        return this.http.get(url)
            .pipe(map(res => {
                res;
            }))
    }
}
