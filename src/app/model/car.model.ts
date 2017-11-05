import {CarAttribute} from '../constants/carAttribute.const';

export class Car {
    constructor(
    public Name : string,
    public Year : number,
    public Attribute : CarAttribute){}
}