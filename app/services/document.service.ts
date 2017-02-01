import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Document, Sequence} from './data';
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class DocumentService {

  private documentsUrl = 'api/documents';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getDocuments(): Promise<Document []> {
    return this.http.get(this.documentsUrl)
      .toPromise()
      .then(response => response.json().data as Document[])
      .catch(this.handleError);
  }

  // getDocumentsBySequence(sequence: Sequence): Promise<Document []> {
  //   //TODO
  //   return this.http.get(this.documentsUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Document[])
  //     .catch(this.handleError);
  // }

  getDocument(id: number): Promise<Document> {
    const url = `${this.documentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Document)
      .catch(this.handleError);
  }

  update(document: Document): Promise<Document> {
    const url = `${this.documentsUrl}/${document.id}`;
    return this.http
      .put(url, JSON.stringify(document), {headers: this.headers})
      .toPromise()
      .then(() => document)
      .catch(this.handleError);
  }

  create(name: string): Promise<Document> {
    return this.http
      .post(this.documentsUrl, JSON.stringify({name: name}),{headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url=`${ this.documentsUrl }/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
