import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {RDocument} from './data';

@Injectable()
export class DocumentService {

    // private documentsUrl = 'api/videoDocuments';  // URL to web api
    private documentsUrl = 'http://localhost:4000/videoDocuments';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {
    }

    getDocuments(): Promise<RDocument[]> {
        return this.http.get(this.documentsUrl)
            .toPromise()
            .then(response => response.json().data as RDocument [])
            .catch(this.handleError);
    }

    getDocument(id: number): Promise<RDocument> {
        // const url = `${this.documentsUrl}/${id}`;
        return this.getDocuments().then(docs => docs.find(doc => doc.id === id))
    }

    // getVideoDocument(): Promise<RDocument> {
    //   return this.http.get(this.documentsUrl)
    //     .toPromise()
    //     .then(response => response.json().data as RDocument)
    //     .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    // update(document: RDocument): Promise<RDocument> {
    //   const url = `${this.documentsUrl}/${document.id}`;
    //   return this.http
    //     .put(url, JSON.stringify(document), {headers: this.headers})
    //     .toPromise()
    //     .then(() => document)
    //     .catch(this.handleError);
    // }
    //
    // create(name: string): Promise<RDocument> {
    //   return this.http
    //     .post(this.documentsUrl, JSON.stringify({name: name}),{headers: this.headers})
    //     .toPromise()
    //     .then(res => res.json().data)
    //     .catch(this.handleError);
    // }
    //
    // delete(id: number): Promise<void> {
    //   const url=`${ this.documentsUrl }/${id}`;
    //   return this.http.delete(url, {headers: this.headers})
    //     .toPromise()
    //     .then(() => null)
    //     .catch(this.handleError);
    // }


    create(doc: RDocument): Promise<RDocument> {

        return this.http
            .post(this.documentsUrl, JSON.stringify(doc), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as RDocument)
            .catch(this.handleError);
    }
}
