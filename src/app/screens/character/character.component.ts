import { Character } from './../../models/character.model';
import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public mainCharacter: Character;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService.getMainCharacter().subscribe((res: Character) => {
      this.mainCharacter = res;
      console.log(this.mainCharacter);
    });
  }
}
