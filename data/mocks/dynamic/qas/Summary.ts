import {faker} from "@faker-js/faker";


export class SummaryModel {
    data: string;
    status: number;
    total: number;

    constructor(
        data: string = faker.datatype.string(30),
        status: number = faker.datatype.number(1000),
        total: number = faker.datatype.number(1000),
    ) {
        this.data = data;
        this.status = status;
        this.total = total;
    }

    toJSON() {
        return {
            data: this.data,
            status: this.status,
            total: this.total
        }
    }
}

