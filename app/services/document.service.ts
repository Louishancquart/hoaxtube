import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {RDocument} from './data';

@Injectable()
export class DocumentService {

    private documentsUrl = 'api/videoDocuments';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getDocuments(): Promise<RDocument[]> {
        return this.http.get(this.documentsUrl)
            .toPromise()
            .then(response => response.json().data as RDocument [])
            .catch(this.handleError);
    }

    // getDocumentsByType(type: string): Promise<RDocument[]> {
    //         return this.getDocuments().then(docs => docs.filter(doc => doc.type === type) as RDocument[]);
    //     }

    create(doc: RDocument): Promise<RDocument> {
        return this.http
            .post(this.documentsUrl, JSON.stringify(doc), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as RDocument)
            .catch(this.handleError);
    }
}
