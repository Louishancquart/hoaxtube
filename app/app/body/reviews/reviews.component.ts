import {Component, Input, OnInit} from '@angular/core';

import {DocumentService} from '../../../services/document.service';
import {RDocument} from '../../../services/data';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.css'],
})


export class ReviewsComponent implements OnInit {

    docList: RDocument[];
    positiveDocumentList: RDocument[];
    negativeDocumentList: RDocument[];
    controversialDocumentList: RDocument[];

    constructor(private documentService: DocumentService) {}

    ngOnInit(): void {
        this.getDocList();
    }

    getDocList(): void {
        this.documentService.getDocuments().then(videoDocument => {
            this.docList = videoDocument;
            this.updateLists();
        });
    }

    addDocument(name: string, url: string, type: string): void {
        if (!name || !url || !type) { return; }

        let document = {
            id: Date.now(),
            name: name,
            url: url,
            relevance: 0,
            checked_times: 0,
            type: type,
        };

        this.documentService.create(document)
            .then(doc => {
                this.docList.push(doc);
                this.updateLists();
            });
    }
    updateLists(): void{
        this.positiveDocumentList = this.docList.filter(doc => doc.type === 'positive');
        this.controversialDocumentList = this.docList.filter(doc => doc.type === 'controversial');
        this.negativeDocumentList = this.docList.filter(doc => doc.type === 'negative');
    }
}
