import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let videoDocument = [
      {
        id: 'L3cpFYNPYz8', //hash of the video
        name: 'MÉSOPOTAMIE & CIVILISATION SUMÉRIENNE (Ep.#1)',
        url: 'http://youtube.com/L3cpFYNPYz8',
        relevance: 3,
        checked_times: 234,
        // uploader: {
        //   id:1,
        //   name: 'toto',
        //   password: '1234567890'
        // },
        type: 1,
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
        },
        parts: [
          {
            id: 1,
            start: 0,
            end: 111,
            positive_review: {
              id: 0,
              type: 1,
              confirmed_times: 23,
              relying_docs: [
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
                  name: 'Doc2',
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
                }]
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
          }]
      }
    ];

    return {videoDocument};
  }
}
