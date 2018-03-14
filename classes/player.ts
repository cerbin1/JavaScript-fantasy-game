class Player {
    private _level: number;
    private _experience: number;

    constructor(private _name: string) {
        this._name = _name;
        this._level = 0;
        this._experience = 0;
    }

    get getName(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }

    get experience(): number {
        return this._experience;
    }

    set experience(value: number) {
        this._experience = value;
    }
}