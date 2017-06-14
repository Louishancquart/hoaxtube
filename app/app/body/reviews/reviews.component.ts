import {Component} from '@angular/core';

import 'rxjs/add/operator/switchMap';
import {HomeComponent} from '../home/home.component';

@Component({
    moduleId: module.id,
    selector: 'reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.css'],
})


export class ReviewsComponent extends HomeComponent {

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


}
