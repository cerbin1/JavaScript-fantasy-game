class Character {
    private _level: number;
    private _experience: number;
    private _maxHP: number;
    private _actualHP: number;

    constructor() {
        this._level = 0;
        this._experience = 0;
        this._maxHP = 10;
        this._actualHP = 10;
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

    get maxHP(): number {
        return this._maxHP;
    }

    set maxHP(value: number) {
        this._maxHP = value;
    }

    get actualHP(): number {
        return this._actualHP;
    }

    set actualHP(value: number) {
        this._actualHP = value;
    }
}
