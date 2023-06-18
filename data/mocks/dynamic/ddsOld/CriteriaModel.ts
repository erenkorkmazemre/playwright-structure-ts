import {faker} from "@faker-js/faker";


export class CriteriaModel {
    criterionCount: number;
    _id: string;
    name: NameClass;
    options: any[];
    ruleVariables: RuleVariable[];
    defaultRule: DefaultRule;
    rules: Rule[];

    constructor(
        id: string = faker.datatype.string(30),
        criterionCount: number = faker.datatype.number(1000),
        name: NameClass = {"tr": faker.datatype.string(30), "en": faker.datatype.string(30)},
        options: any[] = [],
        ruleVariables: RuleVariable[] = [{
            "variableName": faker.datatype.string(30),
            "name": {"tr": faker.datatype.string(30), "en": faker.datatype.string(30)},
            "type": faker.datatype.string(30)
        }],
        defaultRule: DefaultRule = {
            "name": faker.datatype.string(30),
            "pointPerOccurrence": faker.datatype.number(1000),
            "conditions": [
                {
                    "variableName": VariableName.Hour,
                    "operation": Operation.Gte,
                    "value": faker.datatype.float(1000)
                }
            ]
        },
        rules: Rule[] = [{
            "pointPerOccurrence": 0,
            "name": NameEnum.HaftaiçiPrimeTimeKırmızıSepetHatası,
            "validFrom": faker.datatype.number(1000),
            "validUntil": faker.datatype.number(1000),
            "conditions": [
                {
                    "variableName": faker.datatype.string(30),
                    "operation": Operation.Gte,
                    "value": faker.datatype.number(1000)
                }
            ]
        }]
    ) {
        this.criterionCount = criterionCount;
        this._id = id;
        this.name = name;
        this.options = options;
        this.ruleVariables = ruleVariables;
        this.defaultRule = defaultRule;
        this.rules = rules;
    }

    toJSON() {
        return {
            _id: this._id,
            criterionCount: this.criterionCount,
            name: this.name,
            options: this.options,
            ruleVariables: this.ruleVariables,
            defaultRule: this.defaultRule,
            rules: this.rules
        }
    }
}

export interface DefaultRule {
    name: string;
    pointPerOccurrence: number;
    conditions: DefaultRuleCondition[];
}

export interface DefaultRuleCondition {
    variableName: VariableName;
    operation: Operation;
    value: number;
}

export enum Operation {
    Between = "between",
    Gte = "gte",
    Lt = "lt",
}

export enum VariableName {
    Compliance = "compliance",
    CourierPlan = "courier_plan",
    Hour = "hour",
    WeekDay = "week_day",
}


export interface NameClass {
    tr: string;
    en: string;
}

export interface RuleVariable {
    variableName: string;
    name: NameClass;
    type: string;
}

export interface Rule {
    pointPerOccurrence: number;
    name: string;
    validFrom: number;
    validUntil?: number;
    conditions: RuleCondition[];
}

export interface RuleCondition {
    variableName: string;
    operation: string;
    value: number[] | number;
}

export enum NameEnum {
    HaftaiçiPrimeTimeKırmızıSepetHatası = "Haftaiçi Prime Time Kırmızı Sepet Hatası",
    HaftasonuKırmızıSepetHatası = "Haftasonu Kırmızı Sepet Hatası",
}
