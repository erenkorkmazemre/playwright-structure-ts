import { faker } from '@faker-js/faker';

export class Tutorial {
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

    constructor(
        firstName: string = faker.random.words(1),
        lastName: string = faker.random.words(1),
        birthdate: string = faker.random.words(2),
        email: string = firstName + '@' + lastName + '.com',
        phone: string = faker.phone.number(),
        street1: string = faker.random.words(1),
        street2: string = faker.random.words(1),
        city: string = faker.random.words(1),
        stateProvince: string = faker.random.words(1),
        postalCode: string = faker.address.zipCode(),
        country: string = faker.random.words(1)
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.stateProvince = stateProvince;
        this.postalCode = postalCode;
        this.country = country;
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthdate: this.birthdate,
            email: this.email,
            phone: this.phone,
            street1: this.street1,
            street2: this.street2,
            city: this.city,
            stateProvince: this.stateProvince,
            postalCode: this.postalCode,
            country: this.country
        };
    }
}
