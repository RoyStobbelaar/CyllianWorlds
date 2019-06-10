import { Character } from './../models/character.model';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


 @Injectable({
    providedIn: 'root'
})
export class CharacterService {

    private mainCharacter: Character;

   constructor() {
       // Create main char
       this.setupMainCharacter();
   }

   public getMainCharacter() {
       return Observable.create(o => {
           o.next(this.mainCharacter);
           o.complete();
       })
   }

   public getCharacter(id: number) {

   }

   public getParty() {

   }

   private setupMainCharacter() {
       this.mainCharacter = new Character(1, 'http://i67.tinypic.com/312tu7p.jpg', 'Ryven', 'Adventurer', 'Rogue');
   }

}