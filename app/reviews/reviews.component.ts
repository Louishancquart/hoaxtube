///<reference path="../services/data.ts"/>
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
// import {DocumentService} from "../services/document.service";
import {RDocument, RPart, RReview} from "../services/data";


const DOCS: RDocument[] = [
  {
    id: '11',
    name: 'Doc1',
    url: 'http://wikipedia.com',
    relevance: 5,
    checked_times: 275,
    type:1,
    positive_review: {
      id: 0,
      type: 1,
      confirmed_times: 23,
      relying_docs: []
    }
    ,
    negative_review: {
      id: 0,
      type: -1,
      confirmed_times: 23,
      relying_docs: []
    },
    controversial_review: {
      id: 0,
      type: 0,
      confirmed_times: 23,
      relying_docs: []
    },
    parts: []
  },
  {
    id: '11',
    name: 'Doc1',
    url: 'http://wikipedia.com',
    relevance: 5,
    checked_times: 275,
    type:1,
    positive_review: {
      id: 0,
      type: 1,
      confirmed_times: 23,
      relying_docs: []
    }
    ,
    negative_review: {
      id: 0,
      type: -1,
      confirmed_times: 23,
      relying_docs: []
    },
    controversial_review: {
      id: 0,
      type: 0,
      confirmed_times: 23,
      relying_docs: []
    },
    parts: []
  },
  {
    id: '12',
    name: 'Doc1',
    url: 'http://wikipedia.com',
    relevance: 5,
    checked_times: 275,
    type:1,
    positive_review: {
      id: 0,
      type: 1,
      confirmed_times: 23,
      relying_docs: []
    }
    ,
    negative_review: {
      id: 0,
      type: -1,
      confirmed_times: 23,
      relying_docs: []
    },
    controversial_review: {
      id: 0,
      type: 0,
      confirmed_times: 23,
      relying_docs: []
    },
    parts: []
  },
  {
    id: '13',
    name: 'Doc1',
    url: 'http://wikipedia.com',
    relevance: 5,
    checked_times: 275,
    type:1,
    positive_review: {
      id: 0,
      type: 1,
      confirmed_times: 23,
      relying_docs: []
    }
    ,
    negative_review: {
      id: 0,
      type: -1,
      confirmed_times: 23,
      relying_docs: []
    },
    controversial_review: {
      id: 0,
      type: 0,
      confirmed_times: 23,
      relying_docs: []
    },
    parts: []
  },
];

@Component({
  moduleId: module.id,
  selector: 'reviews',
  templateUrl: 'reviews.component.html',
  styleUrls: ['reviews.component.css'],
})



export class ReviewsComponent implements OnInit {

  videoDocument: RDocument;
  docList: RDocument[];
  selectedDoc: RDocument;
  selectedTab: string;


  // constructor(private documentService: DocumentService) {
  // }


  ngOnInit() {
    // this.getVideoDocument();
    this.docList= this.getDocList();
    // this.docList = this.getRelatedDocuments(this.getPositiveReview(this.videoDocument));
    this.selectedTab = "trueTab";
  }

  // onSelect(doc: RDocument): void {
  //   this.selectedDoc = doc;
  // }

  onSelectTab(tab: string): void {
    this.selectedTab = tab;
  }

  //
  // getVideoDocument(): void {
  //   this.documentService.getVideoDocument().then(videoDocument => this.videoDocument = videoDocument);
  //
  // }

  //
  // getParts(): RPart[]{
  //   return this.videoDocument.parts;
  // }
  //
  // getPositiveReview(video: RDocument): RReview{
  //    return this.getParts().shift().positive_review;
  // }
  //
  // getRelatedDocuments(review: RReview): RDocument[] {
  //   return review.relying_docs;
  // }

  getDocList(): RDocument[] {
    // this.documentService.getVideoDocument().then(videoDocument => this.docList = videoDocument.parts);
   return DOCS;
  }
}
