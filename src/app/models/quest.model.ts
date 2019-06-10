export class Quest {
    id: number;
    level: number;
    title: string;
    description: string;
    target: QuestTarget;
    active: boolean = false;
    completed: boolean = false;

    constructor(id: number, level: number, title: string, description: string, tId: number, tAmount: number, tType: string) {
        this.id = id;
        this.level = level;
        this.description = description;
        this.title = title;

        const questTarget = {id: tId, currentAmount: 0, amount: tAmount, type: tType};
        this.target = questTarget;
    }

    public updateTarget() {
        if (this.target.currentAmount < this.target.amount) {
            this.target.currentAmount++;
        }
    }

    public setActive() {
        this.active = true;
    }

    public completeQuest() {
        this.active = false;
        this.completed = true;
    }
}

export class QuestTarget {
    id: number; //Number of a target, item or mob
    currentAmount: number;
    amount: number; // Amount of kills or collected items
    type: string; // kill / collection
}