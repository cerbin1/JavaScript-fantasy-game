class Character {
    private _maxHP: number;
    private _actualHP: number;

    constructor() {
        this._maxHP = 10;
        this._actualHP = 10;
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
