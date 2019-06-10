export class Character {

    id: number;
    img: string;
    name: string;
    title: string;
    level: number;
    experience: number;
    characterClass: string;

    // Stats
    strength: number; // + heavy melee dmg and hp (war) 3 HP
    dexterity: number; // + low melee dmg + dodge (rogue) 2 HP
    agility: number; // + range dmg + crit (ranger) 1 HP
    spirit: number; // + mana- / health regen. Magic defense (priest) 1 HP / 1 MP
    intelligence: number; // + mana + spell damage (mage) 1HP 2MP
    health: number;
    currentHealth: number;
    mana: number;
    currentMana: number;

    // Create lvl 1 character
    constructor(id: number, img: string, name: string, title: string, characterClass: string) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.title = title;
        this.characterClass = characterClass;
        this.level = 1;
        this.experience = 0;

        this.setClassPoints(this.characterClass);
    }

    public gainExperience(exPoints: number) {
        this.experience += exPoints;

        // Hit certain tresholds for level
        // levelUp();
    }

    private levelUp() {
        this.level++;

        // Add stats based on class
    }

    private setClassPoints(c: string) {
        switch (c) {
            // 2H dudes, can take a hit aswell
            case 'Warrior':
                this.strength = 20;
                this.dexterity = 16;
                this.agility = 12;
                this.spirit = 10;
                this.intelligence = 8;
                this.health = 80;
                this.mana = 40;
                break;
            // 1H shield dude. Best tank
            case 'Knight':
                this.strength = 22;
                this.dexterity = 18;
                this.agility = 10;
                this.spirit = 6;
                this.intelligence = 10;
                this.health = 90;
                this.mana = 30;
                break;
            // Close combat crit dude
            case 'Rogue':
                this.strength = 14;
                this.dexterity = 18;
                this.agility = 18;
                this.spirit = 10;
                this.intelligence = 10;
                this.health = 70;
                this.mana = 50;
                break;
            // Bowman
            case 'Ranger':
                this.strength = 10;
                this.dexterity = 16;
                this.agility = 22;
                this.spirit = 12;
                this.intelligence = 12;
                this.health = 60;
                this.mana = 50;
                break;
            // Healer
            case 'Priest':
                this.strength = 8;
                this.dexterity = 12;
                this.agility = 14;
                this.spirit = 20;
                this.intelligence = 16;
                this.health = 60;
                this.mana = 60;
                break;
            // Damage caster
            case 'Mage':
                this.strength = 8;
                this.dexterity = 12;
                this.agility = 12;
                this.spirit = 18;
                this.intelligence = 20;
                this.health = 60;
                this.mana = 70;
                break;
        }

        this.setManaHealthValues();
    }

    private setManaHealthValues() {
        this.health = this.health + (this.strength * 3) + (this.dexterity * 2) + (this.agility + this.spirit + this.intelligence);
        this.mana = this.mana + (this.spirit + this.intelligence);
        this.currentHealth = this.health;
        this.currentMana = this.mana;
    }
}