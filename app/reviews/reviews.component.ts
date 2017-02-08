///<reference path="../services/data.ts"/>
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DocumentService} from "../services/document.service";
import {RDocument} from "../services/data";

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
    this.getVideoDocument();
    this.docList = this.getDocuments();
    this.selectedTab = "trueTab";
  }

  // onSelect(doc: RDocument): void {
  //   this.selectedDoc = doc;
  // }

  onSelectTab(tab: string): void {
    this.selectedTab = tab;
  }

  getVideoDocument(): void {
    this.documentService.getVideoDocument().then(videoDocument => this.videoDocument = videoDocument);
  }

  private getDocuments(): RDocument[] {
    let list: RDocument[];
    // for (let el of this.videoDocument.parts) {
    //   list[index] = list+el;
    // }
    return list;
  }
}
