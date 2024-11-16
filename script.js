// Catering
// Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

// Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

// Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

// Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

// Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

// - Catering od Flavour Haven pro 100 lidí za 300000 Kč

// Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

// - Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč

const justFood = (pocetOsob) => {
    const cenaZaOsobu = 300;
    const celkovaCena = pocetOsob * cenaZaOsobu;
    return `catering od Just Food pro ${pocetOsob} lidí za ${celkovaCena} Kč`

};

const yourMama = (pocetOsob) => {
    const cenaZaOsobu = 600;
    const celkovaCena = pocetOsob *cenaZaOsobu;
    return `catering od Your Mama pro ${pocetOsob} lidí za ${celkovaCena} Kč`

};

const flavourHeaven = (pocetOsob) => {
    const cenaZaOsobu = 1000;
    const celkovaCena = pocetOsob * cenaZaOsobu;
    return `catering od Flavour Heaven pro ${pocetOsob} lidí za ${celkovaCena} Kč`

};

console.log(justFood(100))
console.log(yourMama(200))
console.log(flavourHeaven(250))

const createEvent = (nazevUdalosti, pocetOsob, dodavatel) => {
    const cateringMsg = dodavatel(pocetOsob);
    return `Událost ${nazevUdalosti} s ${cateringMsg}`

}

console.log(createEvent('Inaugurace prezidenta', 100, flavourHeaven))
console.log(createEvent('Oslava narozenin', 50, justFood))
console.log(createEvent('Svatba Niny a Petra', 150, yourMama))