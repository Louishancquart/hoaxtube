import {Component, OnInit} from '@angular/core';
import {RDocument} from '../../../services/data';
import {DocumentService} from '../../../services/document.service';


@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

    docList: RDocument[];
    positiveDocumentList: RDocument[];
    negativeDocumentList: RDocument[];
    controversialDocumentList: RDocument[];

    positiveRelevance: number;
    negativeRelevance: number;
    controversialRelevance: number;
    totalRelevance: number;

    positiveRelevancePercentage: number;
    negativeRelevancePercentage: number;
    controversialRelevancePercentage: number;


    constructor( protected documentService: DocumentService) {}

    ngOnInit(): void {
        this.getDocList();
    }


    getDocList(): void {
        this.documentService.getDocuments().then(videoDocument => {
            this.docList = videoDocument;
            this.updateLists();
        });
    }


    updateLists(): void {
        this.positiveDocumentList = this.docList.filter(doc => doc.type === 'positive');
        this.controversialDocumentList = this.docList.filter(doc => doc.type === 'controversial');
        this.negativeDocumentList = this.docList.filter(doc => doc.type === 'negative');
        this.calculateProgress();
    }

    calculateProgress(): void {
        this.totalRelevance = this.positiveRelevance = this.negativeRelevance = this.controversialRelevance = 0;

        for (let doc of this.docList) {
            this.totalRelevance += doc.relevance;
            switch (doc.type) {
                case 'positive': {
                    this.positiveRelevance += doc.relevance;
                    break;
                }
                case 'negative': {
                    this.negativeRelevance += doc.relevance;
                    break;
                }
                case 'controversial': {
                    this.controversialRelevance += doc.relevance;
                    break;
                }
                default: {
                    console.log('rel: ', doc.relevance, 'type:', doc.type, 'total:', this.totalRelevance );
                }
            }
        }
        this.positiveRelevancePercentage = (this.positiveRelevance / this.totalRelevance) * 100 ;
        this.negativeRelevancePercentage = (this.negativeRelevance / this.totalRelevance) * 100 ;
        this.controversialRelevancePercentage = (this.controversialRelevance / this.totalRelevance) * 100;
    }
}
