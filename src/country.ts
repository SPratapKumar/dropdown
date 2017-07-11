/*This will retrieve the name and the code of the 
countries from the respective json file*/
import * as data from './countries.json';

export class Country {
  constructor(public name: string, public id: string) { }
}