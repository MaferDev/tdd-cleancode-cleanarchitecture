export class MissingFormatParameter extends Error{
    constructor(public name: string) {
        super(`error in the parameter ${name}`)
    }
}