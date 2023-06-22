import {faker} from "@faker-js/faker";
import {RuleVariable} from "../ddsOld/CriteriaModel";


export class SummaryModel {

    data: Datum[];
    status: number;
    total: number;

    constructor(
        data: Datum[] = [{
            "criterionPoints": [{
                "criterionId": faker.database.mongodbObjectId(),
                "criterionIndex": 1,
                "name": {"tr": faker.random.words(3) + "--TR", "en": faker.random.words(3) + "--EN"},
                "value": faker.datatype.number(1000)
            }, {
                "criterionId": faker.database.mongodbObjectId(),
                "criterionIndex": 2,
                "name": {"tr": faker.random.words(3) + "--TR", "en": faker.random.words(3) + "--EN"},
                "value": faker.datatype.number(1000)
            }, {
                "criterionId": faker.database.mongodbObjectId(),
                "criterionIndex": 3,
                "name": {"tr": faker.random.words(3) + "--TR", "en": faker.random.words(3) + "--EN"},
                "value": faker.datatype.number(1000)
            }],
            "currentRank": faker.datatype.number(1000),
            "franchiseId": "5e0d8a1df0f1d572ab399aaa",
            "kdsPoints": faker.datatype.number(1000),
            "warehouseId": "5e70b7f7ceb001bd49134d73",
            "warehouseName": faker.random.words(5)
        }],
        status: number = 200,
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

