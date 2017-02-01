import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let documents = [
      {
        id: 11,
        name: 'Doc1',
        url: 'http://wikipedia.com',
        positive_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        }
        ,
        negative_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        },
        controversial_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        }
      }
      ,
      {
        id: 11,
        name: 'Doc1',
        url: 'http://wikipedia.com',
        positive_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        }
        ,
        negative_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        },
        controversial_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        }
      }
      ,
      {
        id: 11,
        name: 'Doc1',
        url: 'http://wikipedia.com',
        positive_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        }
        ,
        negative_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        },
        controversial_review: {
          id: 0,
          type: 1,
          confirmed_times: 23,
          relying_docs: {}
        }
      }
    ];
    return {documents};
  }
}
