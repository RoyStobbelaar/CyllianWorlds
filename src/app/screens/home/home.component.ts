import { CharacterService } from './../../services/character.service';
import { Character } from './../../models/character.model';
import { Quest } from './../../models/quest.model';
import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public quests: Quest[];
  public party: Character[];

  constructor(private _questService: QuestService, private _characterService: CharacterService) { }

  ngOnInit() {
    this._questService.getQuestList().subscribe((res: Quest[]) => {
      this.quests = res;
    });

    this._characterService.getParty().subscribe((res: Character[]) => {
      this.party = res;
    });
  }
}
