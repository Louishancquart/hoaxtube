import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let videoDocuments = [
      {
        id: '11',
        name: 'Doc1',
        url: 'http://wikipedia.com',
        relevance: 5,
        checked_times: 275,
      },

    ];

    return {videoDocuments};
  }
}
