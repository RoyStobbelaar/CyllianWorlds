import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Quest } from "../models/quest.model";

 @Injectable({
     providedIn: 'root'
 })
 export class QuestService {

    constructor() {}

    public getQuest(id: number) {
        // Get certain quest
    }

    public getQuestList(): Observable<Quest[]> {
        // Return all quests
        return Observable.create(o => {

            const quests = this.getProxyQuests();

            o.next(quests);
            o.complete();
        });
    }

    private getProxyQuests(): Quest[] {

        const questArray = [];
        questArray.push(new Quest(1, 1, 'Damn boars', 'Kill 4 boars, thats it.', 1, 4, 'Kill'));
        questArray.push(new Quest(2, 1, 'We want bbq!', 'Gather 2 boar meat.', 1, 2, 'Collect'));
        questArray.push(new Quest(3, 1, 'Sick wife', 'Gather Ivanas Medicine', 2, 1, 'Collect'));

        return questArray;
    }
 }