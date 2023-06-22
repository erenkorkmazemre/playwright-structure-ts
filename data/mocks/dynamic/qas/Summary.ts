import {faker} from "@faker-js/faker";


const randomArray = (maxArray) => {
    var jsonArr = [];
    for (var i = 0; i < maxArray; i++) {
        jsonArr.push({
            criterionId: faker.database.mongodbObjectId(),
            criterionIndex: faker.datatype.number(1000),
            name: {"tr": faker.random.words(3) + "--TR", "en": faker.random.words(3) + "--EN"},
            value: faker.datatype.number(1000)
        });
    }
    return jsonArr;
}

export class SummaryModel {
    randomArrayNumber: number;
    data: Datum[];
    status: number;
    total: number;

    constructor(
        randomArrayNumber: number = 0,
        data: Datum[] = [{
            "criterionPoints": randomArray(randomArrayNumber),
            "currentRank": faker.datatype.number(1000),
            "franchiseId": "5e0d8a1df0f1d572ab399aaa",
            "kdsPoints": faker.datatype.number(1000),
            "warehouseId": "5e70b7f7ceb001bd49134d73",
            "warehouseName": faker.random.words(5)
        }],
        status: number = 200,
        total: number = faker.datatype.number(1000),
    ) {
        this.randomArrayNumber = randomArrayNumber;
        this.data = data;
        this.status = status;
        this.total = total;
    }

    toJSON() {
        return {
            randomArrayNumber: this.randomArrayNumber,
            data: this.data,
            status: this.status,
            total: this.total
        }
    }
}

export interface Datum {
    criterionPoints: CriterionPoint[];
    currentRank: number;
    franchiseId: string;
    kdsPoints: number;
    warehouseId: string;
    warehouseName: string;
}

export interface CriterionPoint {
    criterionId: string;
    criterionIndex: number;
    name: Name;
    value: number;
}

export interface Name {
    tr: string;
    en: string;
}

