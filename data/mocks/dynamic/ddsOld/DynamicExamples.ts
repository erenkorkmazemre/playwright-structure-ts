export class DynamicExamples {
    constructor(readonly name = 'EREN') {}

    toJSON() {
        return {
            firstName: this.name
        };
    }
}

export class EX2 {
    foo: string;
    bar: string;

    constructor(foo = 'string', bar = 'string') {
        this.foo = foo;
        this.bar = bar;
    }
}

export class EX3 {
    foo: string;
    bar: string;

    constructor(foo: string = 'string', bar: string = 'string') {
        this.foo = foo;
        this.bar = bar;
    }

    toJSON() {
        return {
            foo: this.foo,
            bar: this.bar
        };
    }
}

export class Foo {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string
    ) {}

    static Builder = class {
        id: number = NaN;
        name: string = 'EREN';
        surname: string = 'Korkmaz';
        email: string = null;

        Builder() {}

        build(): Foo {
            return new Foo(this.id, this.name, this.surname, this.email);
        }
    };
}
