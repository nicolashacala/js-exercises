function Character (name, role, age, weapons){
    this.name = name;
    this.role = role;
    this.hp = hp;
    this.items = items;
}


function Item (title,physic, magic, minLevel, available){
    this.title = title;
    this.physic = physic;
    this.magic = magic;
    this.minLevel = minLevel;
    this.available = available;
}

var johnnyTheMerchant = new Character("Johnny The Merchant", "merchant", 99999, []);
var kobal = new Character("Kobal", "main character", 100, []);
var smartAss = new Character("Smart Ass", "enemy", 100, []);


var sword = new Item("Brisingr", 100, 100, 15, true);
var axe = new Item ("Wood Cutter", 15, 0, 2, true);
var staff = new Item ("Fire Breath", 1, 150, 12, true);

var itemToSold = [sword, axe, staff];

