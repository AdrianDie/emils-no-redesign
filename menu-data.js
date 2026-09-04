/* Emil's Kebab & Pizzeria — full meny, hentet fra kundens trykte menykort */
var EMILS_MENU = {
  allergenLegend: "Hvete [1] · Melk [2] · Soya [3] · Sesam [4] · Selleri [5] · Sennep [6] · Egg [7] · Fisk [8]",

  kebab: {
    title: "Kebab",
    priceLabels: ["Medium", "Stor"],
    note: "Alle kebaber serveres med salat, mais, løk, tomat, jalapeño og dressing.",
    allergenNote: "Allergener kebab nr. 50–57: hvete, melk, soya, sesam, selleri [1,2,3,4,5]",
    items: [
      { nr: 50, name: "Rullekebab", variant: "Lam", prices: [124, 159] },
      { nr: 51, name: "Rullekebab", variant: "Biff", prices: [164, 199] },
      { nr: 52, name: "Rullekebab", variant: "Kylling", prices: [154, 179] },
      { nr: 53, name: "Rulle Falafel", prices: [124, 149] },
      { nr: 54, name: "Biff pita", prices: [173, 204] },
      { nr: 55, name: "Lam pita", prices: [144, 174] },
      { nr: 56, name: "Kylling pita", prices: [159, 184] },
      { nr: 57, name: "Falafel pita", prices: [134, 159] },
      { nr: 58, name: "Pommes frites", allergens: "2,3", prices: [80, 120] }
    ]
  },

  kebabtallerken: {
    title: "Kebabtallerken",
    priceLabels: ["U/drikke", "Meny"],
    note: "Serveres med salat, mais, løk, tomat, jalapeño og dressing.",
    allergenNote: "Allergener kebab nr. 60–61 og 63–66: hvete, melk, soya, sesam, selleri [1,2,3,4,5]",
    items: [
      { nr: 60, name: "Kebabtallerken", prices: [169, 204] },
      { nr: 61, name: "Kyllingtallerken", prices: [179, 214] },
      { nr: 62, name: "Bifftallerken", prices: [189, 224] },
      { nr: 63, name: "Nugget tallerken", allergens: "1,2,3,4,5,6", prices: [169, 204] },
      { nr: 64, name: "Falafel tallerken", prices: [164, 199] },
      { nr: 65, name: "Løvstek tallerken", prices: [169, 204] },
      { nr: 66, name: "Biffsnadder", prices: [199, 234] },
      { nr: 67, name: "Kyllingsnadder", prices: [184, 219] }
    ]
  },

  burger: {
    title: "Hamburgermeny",
    priceLabels: ["Burger", "M/drikke", "Meny"],
    note: "Meny serveres med pommes frites, salat, mais, løk, jalapeño, dressing og 0,5 l brus.",
    allergenNote: "Allergener burgere nr. 70–79 og 81: hvete, melk, soya, sesam, selleri, sennep, egg [1,2,3,4,5,6,7]",
    items: [
      { nr: 70, name: "160 g. Hamburger", prices: [129, 159, 189] },
      { nr: 71, name: "190 g. Hamburger", prices: [144, 174, 204] },
      { nr: 72, name: "250 g. Hamburger", prices: [184, 214, 244] },
      { nr: 73, name: "333 g. Hamburger", prices: [199, 229, 259] },
      { nr: 74, name: "Løvstekburger", prices: [144, 174, 204] },
      { nr: 75, name: "Kyllingburger", prices: [139, 169, 199] }
    ]
  },

  extra: {
    title: "Ekstra",
    items: [
      { name: "Drikke 0,5 l.", price: 43 },
      { name: "Ost", price: 15 },
      { name: "Bacon", price: 15 },
      { name: "Ost & bacon", price: 30 },
      { name: "Dip", price: 40 },
      { name: "Pita", price: 15 }
    ]
  },

  pizza: {
    title: "Pizzameny",
    note: "To størrelser, priset som par (liten / stor). Gratis dip ved bestilling av pizza.",
    allergenNote: "Ekstra: kjøtt 30,- · grønnsaker 20,- · ost 25,- · dipsaus 40,-",
    items: [
      { nr: 1, name: "Margerita", desc: "Tomatsaus og ost.", allergens: "1,2,3,4,5", prices: [139, 219] },
      { nr: 2, name: "Napoli", desc: "Tomatsaus, ost, skinke.", allergens: "1,2,3,4,5", prices: [154, 234] },
      { nr: 3, name: "Mocca", desc: "Tomatsaus, ost, marinert biff.", allergens: "1,2,3,4,5,6", prices: [159, 254] },
      { nr: 4, name: "Vegetar", desc: "Tomatsaus, ost, paprika, champignon, oliven, rødløk.", allergens: "1,2,3,4,5", prices: [154, 234] },
      { nr: 5, name: "Velg din egen pizza", desc: "Tomatsaus, ost, velg 3 typer kjøtt og 3 typer grønnsaker.", allergens: "1,2,3,4,5,6,7", prices: [179, 284] },
      { nr: 6, name: "Emil's favoritt", star: true, desc: "Tomatsaus, ost, pepperoni, kjøttdeig.", allergens: "1,2,3,4,5,6,7", prices: [154, 244] },
      { nr: 7, name: "Secilia", desc: "Tomatsaus, ost, kjøttdeig, bacon, pepperoni.", allergens: "1,2,3,4,5,6,7", prices: [159, 259] },
      { nr: 8, name: "Venezia", desc: "Tomatsaus, ost, skinke, bacon.", allergens: "1,2,3,4,5", prices: [154, 254] },
      { nr: 9, name: "Eldorado", desc: "Tomatsaus, ost, pepperoni, paprika, ananas.", allergens: "1,2,3,4,5,6,7", prices: [154, 244] },
      { nr: 10, name: "Roma", desc: "Tomatsaus, ost, marinert biff, skinke, tomat, ananas.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 11, name: "Milano", star: true, desc: "Tomatsaus, ost, marinert biff, skinke.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 12, name: "Naxos", star: true, desc: "Tomatsaus, ost, marinert biff, paprika, champignon, rødløk.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 13, name: "Nachos", star: true, desc: "Tacokrydret kjøttdeig, paprika, jalapeñopepper, tortillachips.", allergens: "1,2,3,4,5,6,7", prices: [159, 264] },
      { nr: 14, name: "Mafiosa", star: true, desc: "Tomatsaus, ost, biffkjøtt, kjøttdeig, pepperoni.", allergens: "1,2,3,4,5,6,7", prices: [159, 259] },
      { nr: 15, name: "Kebab Pizza", star: true, desc: "Tomatsaus, ost, kebabkjøtt, rødløk, jalapeño.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 16, name: "Sandviken", star: true, desc: "Tomatsaus, ost, biffkjøtt, kjøttdeig, rødløk.", allergens: "1,2,3,4,5,6,7", prices: [159, 259] },
      { nr: 17, name: "Torronto", desc: "Tomatsaus, ost, marinert biff, kjøttdeig, rødløk, jalapeño.", allergens: "1,2,3,4,5,6,7", prices: [159, 259] },
      { nr: 18, name: "Capricosa", desc: "Tomatsaus, ost, skinke, champignon.", allergens: "1,2,3,4,5", prices: [154, 244] },
      { nr: 19, name: "Kyllingpizza", star: true, desc: "Tomatsaus, ost, kylling, champignon, paprika, løk.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 20, name: "Mona Lisa", desc: "Tomatsaus, ost, kjøttdeig, ananas.", allergens: "1,2,3,4,5,6,7", prices: [154, 244] },
      { nr: 21, name: "New York", desc: "Tomatsaus, ost, pepperoni, champignon.", allergens: "1,2,3,4,5,6", prices: [154, 244] },
      { nr: 22, name: "Kylling Mix", desc: "Tomatsaus, ost, kyllingfillet, rødløk, mais.", allergens: "1,2,3,4,5,6,7", prices: [154, 249] },
      { nr: 23, name: "Atlanta", desc: "Tomatsaus, ost, pepperoni, bacon.", allergens: "1,2,3,4,5,6,7", prices: [159, 259] },
      { nr: 24, name: "Texas", star: true, desc: "Tomatsaus, ost, pepperoni, bacon, skinke.", allergens: "1,2,3,4,5,6,7", prices: [159, 259] },
      { nr: 25, name: "HOT Pizza", desc: "Tomatsaus, ost, kebabkjøtt, pepperoni, jalapeño.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 26, name: "Las Vegas", star: true, desc: "Tomatsaus, ost, marinert biff, skinke, løk, tomat.", allergens: "1,2,3,4,5,6", prices: [159, 259] },
      { nr: 27, name: "Miami Pizza", star: true, desc: "Tomatsaus, ost, biff, bacon, rødløk.", allergens: "1,2,3,4,5", prices: [159, 259] },
      { nr: 28, name: "Panama Pizza", star: true, desc: "Tomatsaus, ost, biff, pepperoni, bacon.", allergens: "1,2,3,4,5,6,7", prices: [164, 269] },
      { nr: 29, name: "Favoritt", star: true, desc: "Tomatsaus, ost, biff, skinke, champignon, rødløk.", prices: [159, 259] },
      { nr: 30, name: "Hawaii", desc: "Tomatsaus, ost, marinert biff, kylling, rødløk.", allergens: "1,2,3,4,5,6,7", prices: [159, 259] },
      { nr: 31, name: "Americana", desc: "Tomatsaus, ost, bacon, skinke, tomat.", allergens: "1,2,3,4,5", prices: [159, 259] },
      { nr: 32, name: "Mexicana", star: true, desc: "Tomatsaus, ost, pepperoni, bacon, kjøttdeig, rødløk, tomat.", allergens: "1,2,3,4,5,6,7", prices: [169, 274] }
    ]
  }
};
