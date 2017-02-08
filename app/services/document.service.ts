import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {RDocument} from './data';

@Injectable()
export class DocumentService {

  private documentsUrl = 'api/data';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getDocuments(): Promise<RDocument[]> {
    return this.http.get(this.documentsUrl)
      .toPromise()
      .then(response => response.json().data as RDocument)
      .catch(this.handleError);
  }

  getVideoDocument(): Promise<RDocument> {
    return this.http.get(this.documentsUrl)
      .toPromise()
      .then(response => response.json().data as RDocument)
      .catch(this.handleError);
  }
  // getDocumentsBySequence(sequence: Video): Promise<Video []> {
  //   //TODO
  //   return this.http.get(this.documentsUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Video[])
  //     .catch(this.handleError);
  // }

  getDocument(id: number): Promise<RDocument> {
    const url = `${this.documentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as RDocument)
      .catch(this.handleError);
  }

  update(document: RDocument): Promise<RDocument> {
    const url = `${this.documentsUrl}/${document.id}`;
    return this.http
      .put(url, JSON.stringify(document), {headers: this.headers})
      .toPromise()
      .then(() => document)
      .catch(this.handleError);
  }

  create(name: string): Promise<RDocument> {
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
