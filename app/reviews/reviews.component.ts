///<reference path="../services/data.ts"/>
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {DocumentService} from "../services/document.service";
import {RDocument} from '../services/data';






// const DOCS: RDocument[] = [
//
// ];

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


  constructor(private documentService: DocumentService) {
  }


  ngOnInit() {

    this.getDocList();


    // this.docList = this.getRelatedDocuments(this.getPositiveReview(this.videoDocument));
    // this.selectedTab = 'trueTab';
  }

  // onSelect(doc: RDocument): void {
  //   this.selectedDoc = doc;
  // }

  // onSelectTab(tab: string): void {
  //   this.selectedTab = tab;
  // }


  // getDocument(id: number): RDocument{
  //   return this.d
  // }
  //
  // getVideoDocuments(): void {
  //   this.documentService.getVideoDocuments().then(videoDocument => this.videoDocument = videoDocument);
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

  getDocList(): void {
    this.documentService.getDocuments().then(videoDocument => this.docList = videoDocument);
}
}
