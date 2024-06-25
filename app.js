const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

// Logging each item in Robin's inventory using a loop
console.log(`${adventurer.name}'s inventory:`);
adventurer.inventory.forEach(item => {
    console.log(item);
});

// Testing the roll method
adventurer.roll();
adventurer.roll(-2); // Testing with a modifier


// Define the Character class (base class)
class Character {
    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Static property for maximum health
Character.MAX_HEALTH = 100;

// Define the Adventurer class inheriting from Character
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");  // Starting items for adventurers
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    usePotion() {
        if (this.inventory.includes("potion")) {
            this.inventory.splice(this.inventory.indexOf("potion"), 1);
            this.health += 20;  // Example: Using a potion increases health by 20
            console.log(`${this.name} used a potion. Current health: ${this.health}`);
        } else {
            console.log(`${this.name} doesn't have a potion.`);
        }
    }
}

// Define the AdventurerFactory class
class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;  // Return the created adventurer for convenience
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find(a => a.name === name);
    }
}

// Example usage of the AdventurerFactory class
const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

// Testing methods of AdventurerFactory
console.log(`Adventurer role: ${robin.role}`);
robin.scout();
robin.usePotion();  // Example: Using a potion

console.log(`Adventurer inventory:`);
console.log(robin.inventory);



// Define the Character class (base class)
class Character {
    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

// Static property for maximum health
Character.MAX_HEALTH = 100;

// Define the Adventurer class inheriting from Character
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");  // Starting items for adventurers
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    usePotion() {
        if (this.inventory.includes("potion")) {
            this.inventory.splice(this.inventory.indexOf("potion"), 1);
            this.health += 20;  // Example: Using a potion increases health by 20
            console.log(`${this.name} used a potion. Current health: ${this.health}`);
        } else {
            console.log(`${this.name} doesn't have a potion.`);
        }
    }

    duel(opponent) {
        console.log(`Starting a duel between ${this.name} (${this.role}) and ${opponent.name} (${opponent.role})`);

        while (this.health > 50 && opponent.health > 50) {
            const thisRoll = this.roll();
            const opponentRoll = opponent.roll();

            if (thisRoll > opponentRoll) {
                opponent.health -= 1;
                console.log(`${this.name} rolled ${thisRoll} and ${opponent.name} rolled ${opponentRoll}. ${opponent.name} loses 1 health. ${this.name}'s health: ${this.health}, ${opponent.name}'s health: ${opponent.health}`);
            } else if (thisRoll < opponentRoll) {
                this.health -= 1;
                console.log(`${this.name} rolled ${thisRoll} and ${opponent.name} rolled ${opponentRoll}. ${this.name} loses 1 health. ${this.name}'s health: ${this.health}, ${opponent.name}'s health: ${opponent.health}`);
            } else {
                console.log(`${this.name} and ${opponent.name} rolled the same (${thisRoll}). No damage dealt.`);
            }
        }

        if (this.health <= 50) {
            console.log(`${opponent.name} wins the duel with ${opponent.health} health remaining!`);
        } else {
            console.log(`${this.name} wins the duel with ${this.health} health remaining!`);
        }
    }
}

// Example usage of the Adventurer class with duel() method
const fighter = new Adventurer("Fighter", "Fighter");
const wizard = new Adventurer("Wizard", "Wizard");

fighter.duel(wizard);  // Initiating a duel between a Fighter and a Wizard

// Testing methods of Adventurer
fighter.usePotion();  // Example: Using a potion

