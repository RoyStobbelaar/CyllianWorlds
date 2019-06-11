import { Character } from "./../models/character.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
  private mainCharacter: Character;
  private party: Character[];

  constructor() {
    // Create main char
    this.setupMainCharacter();
    this.setupParty();
  }

  public getMainCharacter() {
    return Observable.create(o => {
      o.next(this.mainCharacter);
      o.complete();
    });
  }

  public getCharacter(id: number) {
    return this.party[id];
  }

  public getParty() {
    return Observable.create(o => {
      o.next(this.party);
      o.complete();
    });
  }

  private setupMainCharacter() {
    this.mainCharacter = new Character(
      1,
      "http://i67.tinypic.com/312tu7p.jpg",
      "Ryven",
      "Adventurer",
      "Rogue"
    );
  }

  private setupParty() {
    this.party = [];
    this.party.push(
      new Character(
        1,
        "http://i67.tinypic.com/312tu7p.jpg",
        "Ryven",
        "Adventurer",
        "Rogue"
      )
    );
    this.party.push(
      new Character(
        2,
        "https://i.pinimg.com/originals/c6/42/6c/c6426c0402663ebd35677dbbb1de8119.jpg",
        "Yoza",
        "Silver Blade",
        "Knight"
      )
    );
    this.party.push(
      new Character(
        3,
        "https://i.pinimg.com/originals/69/4d/55/694d555bc67b9b44c12330d7e635ee09.jpg",
        "Azami",
        "Goddess",
        "Priest"
      )
    );
    this.party.push(
      new Character(
        4,
        "https://i.pinimg.com/originals/4f/ee/b4/4feeb410e333b1bfdd7eb343c4ef8d75.jpg",
        "Sasani",
        "Ice Queen",
        "Mage"
      )
    );
  }
}
