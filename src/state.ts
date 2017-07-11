/*This will retrieve the name and the code of the 
state from the respective json file*/
import * as data from './states.json';

export class State {
  constructor(public id: string, public countryid: string, public name: string) { }
}
