class Player {
    constructor(private _name: string) {
        this._name = _name;
    }

    get getName(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
