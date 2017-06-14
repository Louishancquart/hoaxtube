import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let videoDocuments = [
            {
                id: 11,
                name: 'wiki article',
                url: 'http://wikipedia.com',
                relevance: 5,
                type: 'controversial'
            },
            {
                id: 12,
                name: 'wiki article baboin',
                url: 'http://wikipedia.com',
                relevance: 10,
                type: 'positive'
            },
            {
                id: 13,
                name: 'site point article',
                url: 'https://www.sitepoint.com/angular-2-mockbackend/',
                relevance: 51,
                type: 'negative'
            },
            {
                id: 15,
                name: 'site poto sur angular 2',
                url: 'https://www.sitepoint.com/angular-2-mockbackend/',
                relevance: 200,
                type: 'positive'
            },
            {
                id: 75,
                name: 'face de bouc article',
                url: 'http://facebook.com',
                relevance: 578,
                type: 'negative'
            },
            {
                id: 65,
                name: 'document genere a la main',
                url: 'http://alamain.com',
                relevance: 40,
                type: 'positive'
            },
            {
                id: 45687,
                name: 'toto a dit',
                url: 'http://totoadit.com',
                relevance: 35,
                type: 'controversial'
            },
            {
                id: 213,
                name: 'Doc1',
                url: 'http://wikipedia.com',
                relevance: 1005,
                type: 'negative'
            },
            {
                id: 456,
                name: 'Doc1',
                url: 'http://documents.com',
                relevance: 5568,
                type: 'positive'
            },

        ];

        return {videoDocuments};
    }
}
