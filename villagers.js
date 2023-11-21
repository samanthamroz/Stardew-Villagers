//All Loved Items
const loves = {
  "amethyst" : {
    "name" : "Amethyst", 
    "img" : "amethyst.png",
    "url" : "https://stardewvalleywiki.com/Amethyst"
  }, 
  "bananaPudding" : {
    "name" : "Banana Pudding", 
    "img" : "bananaPudding.png",
    "url" : "https://stardewvalleywiki.com/Banana_Pudding"
  }, 
  "blackberryCobbler" : {
    "name" : "Blackberry Cobbler", 
    "img" : "blackberryCobbler.png",
    "url" : "https://stardewvalleywiki.com/Blackberry_Cobbler"
  },
  "chocolateCake" : {
    "name" : "Chocolate Cake",
    "img" : "chocolateCake.png",
    "url" : "https://stardewvalleywiki.com/Chocolate_Cake"
  },
  "pufferfish" : {
    "name" : "Pufferfish",
    "img" : "pufferfish.png",
    "url" : "https://stardewvalleywiki.com/Pufferfish"
  },
  "pumpkin" : {
    "name" : "Pumpkin",
    "img" : "pumpkin.png",
    "url" : "https://stardewvalleywiki.com/Pumpkin"
  },
  "spicyEel" : {
    "name" : "Spicy Eel",
    "img" : "spicyEel.png",
    "url" : "https://stardewvalleywiki.com/Spicy_Eel"
  },
  "completeBreakfast" : {
    "name" : "Complete Breakfast",
    "img" : "completeBreakfast.png"
  },
  "salmonDinner" : {
    "name" : "Salmon Dinner",
    "img" : "salmonDinner.png",
    "url" : "https://stardewvalleywiki.com/Complete_Breakfast"
  },
  "fishTaco" : {
    "name" : "Fish Taco",
    "img" : "fishTaco.png",
    "url" : "https://stardewvalleywiki.com/Fish_Taco"
  },
  "greenTea" : {
    "name" : "Green Tea",
    "img" : "greenTea.png",
    "url" : "https://stardewvalleywiki.com/Green_Tea"
  },
  "summerSpangle" : {
    "name" : "Summer Spangle",
    "img" : "summerSpangle.png",
    "url" : "https://stardewvalleywiki.com/Summer_Spangle"
  },
  "aquamarine" : {
    "name" : "Aquamarine",
    "img" : "aquamarine.png",
    "url" : "https://stardewvalleywiki.com/Aquamarine"
  },
  "artichokeDip" : {
    "name" : "Artichoke Dip",
    "img" : "artichokeDip.png",
    "url" : "https://stardewvalleywiki.com/Artichoke_Dip"
  },
  "emerald" : {
    "name" : "Emerald",
    "img" : "emerald.png",
    "url" : "https://stardewvalleywiki.com/Emerald"
  },
  "fiddleheadRisotto" : {
    "name" : "Fiddlehead Risotto",
    "img" : "fiddleheadRisotto.png",
    "url" : "https://stardewvalleywiki.com/Fiddlehead_Risotto"
  },
  "goldBar" : {
    "name" : "Gold Bar",
    "img" : "goldBar.png",
    "url" : "https://stardewvalleywiki.com/Gold_Bar"
  },
  "iridiumBar" : {
    "name" : "Iridium Bar",
    "img" : "iridiumBar.png",
    "url" : "https://stardewvalleywiki.com/Iridium_Bar"
  },
  "jade" : {
    "name" : "Jade",
    "img" : "jade.png",
    "url" : "https://stardewvalleywiki.com/Jade"
  },
  "omniGeode" : {
    "name" : "Omni Geode",
    "img" : "omniGeode.png",
    "url" : "https://stardewvalleywiki.com/Omni_Geode"
  },
  "ruby" : {
    "name" : "Ruby",
    "img" : "ruby.png",
    "url" : "https://stardewvalleywiki.com/Ruby"
  },
  "topaz" : {
    "name" : "Topaz",
    "img" : "topaz.png",
    "url" : "https://stardewvalleywiki.com/Topaz"
  }
}

//Villager List
const villagers = {
  "abigail" : {
    "name" : "Abigail",
    "url" : "https://stardewvalleywiki.com/Abigail",
    "img" : "abigail.png",
    "birthday" : "Fall 13",
    "marriage" : true,
    "schedule" : true,
    "loves" : [loves.Amethyst, 
      loves.bananaPudding, 
      loves.blackberryCobbler,
      loves.chocolateCake,
      loves.pufferfish,
      loves.pumpkin,
      loves.spicyEel]
  },
  "alex" : {
    "name" : "Alex",
    "url" : "https://stardewvalleywiki.com/Alex",
    "img" : "alex.png",
    "birthday" : "Summer 13",
    "marriage" : true,
    "schedule" : true,
    "loves" : [loves.completeBreakfast,
      loves.salmonDinner]
  }, 
  "caroline" : {
    "name" : "Caroline",
    "url" : "https://stardewvalleywiki.com/Caroline",
    "img" : "caroline.png",
    "birthday" : "Winter 7",
    "marriage" : false,
    "schedule" : true,
    "loves" : [loves.fishTaco, 
      loves.greenTea,
      loves.summerSpangle,
      loves.TropicalCurry]
  },
  "clint" : {
    "name" : "Clint",
    "url" : "https://stardewvalleywiki.com/Clint",
    "img" : "clint.png",
    "birthday" : "Winter 26",
    "marriage" : false,
    "schedule" : true,
    "loves" : [loves.amethyst,
      loves.aquamarine,
      loves.artichokeDip,
      loves.emerald,
      loves.fiddleheadRisotto,
      loves.goldBar,
      loves.iridiumBar,
      loves.jade,
      loves.omniGeode,
      loves.ruby,
      loves.topaz]
  },
  "demetrius" : {
    "name" : "Demetrius",
    "url" : "https://stardewvalleywiki.com/Demetrius"
  },
  "dwarf" : {
    
  },
  "elliot" : {
    
  },
  "emily" : {
    
  },
  "evelyn" : {
    
  },
  "haley" : {
    
  },
  "harvey" : {
    
  },
  "george" : {
    
  },
  "gus" : {
    
  },
  "jas" : {
    
  },
  "jodi" : {
    
  },
  "kent" : {
    
  },
  "krobus" : {
    
  },
  "leah" : {
    
  },
  "leo" : {
    
  },
  "lewis" : {
    
  },
  "linus" : {
    
  },
  "marnie" : {
    
  },
  "maru" : {
    
  },
  "pam" : {
    
  },
  "penny" : {
    
  },
  "pierre" : {
    
  },
  "robin" : {
    
  },
  "sam" : {
    
  },
  "sandy" : {
    
  },
  "sebastian" : {
    
  },
  "shane" : {
    
  },
  "vincent" : {
    
  },
  "willy" : {
    
  },
  "wizard" : {
    
  }
}