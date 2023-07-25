import { faker } from '@faker-js/faker';

const randomArray = (maxArray) => {
    var jsonArr = [];
    for (var i = 0; i < maxArray; i++) {
        jsonArr.push({
            _id: faker.database.mongodbObjectId(),
            firstName: faker.random.words(1),
            lastName: faker.random.words(1),
            birthdate: faker.random.words(2),
            email: faker.random.words(1) + '@' + faker.random.words(1) + '.com',
            phone: faker.phone.number(),
            street1: faker.random.words(1),
            street2: faker.random.words(1),
            city: faker.random.words(1),
            stateProvince: faker.random.words(1),
            postalCode: faker.address.zipCode(),
            country: faker.random.words(1),
            owner: faker.database.mongodbObjectId(),
            __v: faker.database.mongodbObjectId()
        });
    }
    return jsonArr;
};

export class ContactModel {
    randomArrayNumber: number;
    data: Datum[];
    status: number;
    total: number;

    constructor(randomArrayNumber: number = 0, data: Datum[] = randomArray(randomArrayNumber)) {
        this.randomArrayNumber = randomArrayNumber;
        this.data = data;
    }

    toJSON() {
        return {
            randomArrayNumber: this.randomArrayNumber,
            data: this.data
        };
    }
}

export interface Datum {
    _id: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    email: string;
    phone: string;
    street1: string;
    street2: string;
    city: string;
    stateProvince: string;
    postalCode: string;
    country: string;
    owner: string;
    __v: string;
}
