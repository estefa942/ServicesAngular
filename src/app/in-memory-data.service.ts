import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        "id": "5a5129deae0033d5cf201c5a",
        "index": 0,
        "guid": "1dc17b55-3849-497b-800b-59ab245e42d5",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": "Quinn Nielsen",
        "gender": "male",
        "company": "QUALITEX",
        "email": "quinnnielsen@qualitex.com",
        "phone": "+1 (829) 442-2328"
      },
      {
        "id": "5a5129de1962f8b6f2914086",
        "index": 1,
        "guid": "3ed3c061-def9-480c-a841-5ba900d28ff1",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Finley Kirby",
        "gender": "male",
        "company": "STROZEN",
        "email": "finleykirby@strozen.com",
        "phone": "+1 (911) 432-3549"
      },
      {
        "id": "5a5129dec53dd57ac52a9e2a",
        "index": 2,
        "guid": "9fec0a5a-f5c9-4753-bbfc-ad4a28eda3a3",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": "Kristina Blake",
        "gender": "female",
        "company": "ETERNIS",
        "email": "kristinablake@eternis.com",
        "phone": "+1 (886) 524-3722"
      },
      {
        "id": "5a5129de1a19bd11cfb09f80",
        "index": 3,
        "guid": "a6ba0394-d019-4bed-8096-b28d733bdbe4",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": "Rivers Thompson",
        "gender": "male",
        "company": "KINETICA",
        "email": "riversthompson@kinetica.com",
        "phone": "+1 (914) 514-3614"
      },
      {
        "id": "5a5129de086a88c0c9cf7dab",
        "index": 4,
        "guid": "52dc5138-4377-44f9-8406-4b2a382a34b7",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": "Tricia England",
        "gender": "female",
        "company": "CINESANCT",
        "email": "triciaengland@cinesanct.com",
        "phone": "+1 (958) 463-3620"
      },
      {
        "id": "5a5129deb22130759359861e",
        "index": 5,
        "guid": "ab8f0be5-dd74-4f34-b665-a3e5777589ee",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": "Madelyn Kirkland",
        "gender": "female",
        "company": "ANIMALIA",
        "email": "madelynkirkland@animalia.com",
        "phone": "+1 (825) 541-2336"
      },
      {
        "id": "5a5129dec0878c77e5832cab",
        "index": 6,
        "guid": "6d482edc-c43f-4bd0-a9b9-fb3bc34858ae",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Josephine Wilcox",
        "gender": "female",
        "company": "CALCU",
        "email": "josephinewilcox@calcu.com",
        "phone": "+1 (917) 459-2988"
      },
      {
        "id": "5a5129debb6f10ff0d6cd7dc",
        "index": 7,
        "guid": "66f82daf-a926-4cfc-b151-c1c62bbcd5a8",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Georgette Steele",
        "gender": "female",
        "company": "XIIX",
        "email": "georgettesteele@xiix.com",
        "phone": "+1 (875) 568-2634"
      },
      {
        "id": "5a5129de2f5a73ee819f7cf7",
        "index": 8,
        "guid": "7b3cf0eb-3889-420a-830a-bfbe66f26ae5",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Mariana Mcbride",
        "gender": "female",
        "company": "AMRIL",
        "email": "marianamcbride@amril.com",
        "phone": "+1 (973) 581-2539"
      },
      {
        "id": "5a5129deb4847f2bbccc4868",
        "index": 9,
        "guid": "1a594184-1287-41e2-acd8-ae1958b9fe5e",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Reed Cantrell",
        "gender": "male",
        "company": "VIAGRAND",
        "email": "reedcantrell@viagrand.com",
        "phone": "+1 (875) 460-2749"
      },
      {
        "id": "5a5129de8f9a22a684caf06b",
        "index": 10,
        "guid": "71f5abe4-d87f-4f46-9a4f-1792caa70c17",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Danielle Garrison",
        "gender": "female",
        "company": "TURNLING",
        "email": "daniellegarrison@turnling.com",
        "phone": "+1 (911) 428-2780"
      },
      {
        "id": "5a5129de44a2cfcb9eda2c64",
        "index": 11,
        "guid": "18f0dd86-301d-41fe-9c94-10429afe2778",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": "Manuela Rojas",
        "gender": "female",
        "company": "GYNKO",
        "email": "manuelarojas@gynko.com",
        "phone": "+1 (927) 597-2298"
      },
      {
        "id": "5a5129debfbe1a9722850e61",
        "index": 12,
        "guid": "e12fedd3-d744-4ee2-b241-a3807d1151a1",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": "Cristina Powers",
        "gender": "female",
        "company": "ENERVATE",
        "email": "cristinapowers@enervate.com",
        "phone": "+1 (886) 529-3572"
      },
      {
        "id": "5a5129deb0d957a6917d1ea2",
        "index": 13,
        "guid": "81d7da75-ca25-4b32-8ae6-45d1980afeee",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": "Sandoval David",
        "gender": "male",
        "company": "WAAB",
        "email": "sandovaldavid@waab.com",
        "phone": "+1 (967) 576-2281"
      },
      {
        "id": "5a5129de9553a7c210eb24bd",
        "index": 14,
        "guid": "5893bf99-f5bc-4002-9bd3-2844d3fe8314",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": "Anderson Mcmahon",
        "gender": "male",
        "company": "KEENGEN",
        "email": "andersonmcmahon@keengen.com",
        "phone": "+1 (941) 570-2144"
      },
      {
        "id": "5a5129ded541c6c2a9d5ce16",
        "index": 15,
        "guid": "19fb90cc-0e94-4244-a636-057a76e18e7e",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": "Farley Chang",
        "gender": "male",
        "company": "FUELWORKS",
        "email": "farleychang@fuelworks.com",
        "phone": "+1 (903) 411-2764"
      },
      {
        "id": "5a5129de2339249df56a2ebc",
        "index": 16,
        "guid": "a1a8663f-f287-4428-a759-32b4d5bbdeb9",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Staci Walsh",
        "gender": "female",
        "company": "POOCHIES",
        "email": "staciwalsh@poochies.com",
        "phone": "+1 (842) 535-3715"
      },
      {
        "id": "5a5129debdb053a34fc82e0b",
        "index": 17,
        "guid": "a390a719-6501-489b-b9f7-b681260a2515",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": "Penelope Joyner",
        "gender": "female",
        "company": "NEXGENE",
        "email": "penelopejoyner@nexgene.com",
        "phone": "+1 (949) 513-3936"
      },
      {
        "id": "5a5129deba80342a8069ddcb",
        "index": 18,
        "guid": "28dc1ccd-852e-440f-ba4e-226fba4c854b",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Shelby Williams",
        "gender": "female",
        "company": "OZEAN",
        "email": "shelbywilliams@ozean.com",
        "phone": "+1 (838) 415-2226"
      },
      {
        "id": "5a5129dea733f0612ed6ff76",
        "index": 19,
        "guid": "16611839-4899-4471-a4d5-fc1b73b67684",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": "Sims Mathis",
        "gender": "male",
        "company": "XPLOR",
        "email": "simsmathis@xplor.com",
        "phone": "+1 (862) 463-3660"
      }
    ];
    return {users};
  }
}


