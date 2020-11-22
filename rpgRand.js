//This program will give an idea for a character to play in the fantasy rpg game Skyrim. 

var skyrimCharacter = {
    "species": "undefined",
    "class": "undefined",
    "home": "undefined"
}

var playableSpecies = ["khajiit", "argonian", "orc", "human", "vampire", "werewolf", "bosmer", "altmer", "dunmer"]
var classes = ["ranger", "destruction mage", "forsworn", "bandit", "warrior", "thief", "barbarian", "healer", "necromancer"]
var home = ["Riften", "The Reach", "Markarth", "Morthal", "Whiterun", "Windhelm", "a khajiit caravan", "the woods of Riverwood", "Falkreath"]


function randomizer(){
    
    skyrimCharacter.species = playableSpecies[Math.floor(Math.random() * playableSpecies.length)];    
    skyrimCharacter.class = classes[Math.floor(Math.random() * classes.length)]; 
    skyrimCharacter.home = home[Math.floor(Math.random() * home.length)]; 
}


function print(){

    console.log("Your character: "+skyrimCharacter.species+" "+skyrimCharacter.class+ " living in "+skyrimCharacter.home);
}


randomizer()
print()


