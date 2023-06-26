const alessio = [
    31,
    'Alessio',
    'Vietri',
    31,
    'CIAO-EROS',
    'lightcoral',
    '25/11/1991',
    'm',
    true
];

console.log(alessio, typeof alessio);

console.log('Nome dell array alessio', alessio[1]);


const alessioObject = {
    "id": 31,
    'firstName': 'Alessio',
    lastName: 'Vietri',
    age: 31,
    spouse: null,
    cssKnowledge: undefined,
    knownLanguages: [
        'php',
        'js',
        'c++'
    ],
};

console.log(alessioObject, typeof alessioObject);

console.log('Nome dell oggetto alessioObject', alessioObject.firstName);
console.log('Cognome dell oggetto alessioObject con le quadre', alessioObject['lastName']);
console.log('Cognome dell oggetto alessioObject con le quadre', alessioObject.lastName);

let prefix = 'first';
if (false) {
    prefix = 'last';
}
console.log('Proviamo sta sintassi con le quadre:', alessioObject[`${prefix}Name`]);
console.log('Proviamo sta sintassi con le quadre:', alessioObject[prefix + 'Name']);

const alessioKeys = [
    'id',
    'firstName',
    'spouse',
    'cssKnowledge',
    'knownLanguages'
];

for (let i = 0; i < alessioKeys.length; i++) {
    const singleKey = alessioKeys[i];
    console.log(singleKey, alessioObject[singleKey]);
}

	
for (let key in alessioObject) {
    console.log(key, alessioObject[key]);
}

// for (let key in alessioKeys) {
//     console.log(key, alessioKeys[key]);
// }

// const keyFromUser = prompt('Cosa vuoi sapere di Alessio? (nome o cognome)');
// console.log(keyFromUser);

// if (keyFromUser == 'nome') {
//     alert('Il nome di Alessio è ' + alessioObject.firstName);
// }
// else if (keyFromUser == 'cognome') {
//     alert('Il cognome di Alessio è ' + alessioObject.lastName);
// }
// else {
//     alert('Il valore richiesto è: ' + alessioObject[keyFromUser]);
// }

const newKeyFromUser = prompt('Inserisci la chiave da inserire nell oggetto:');
const newKeyValueFromUser = prompt('Inserisci il valore da inserire nella chiave dell oggetto:');

console.log(newKeyFromUser, newKeyValueFromUser);

alessioObject[newKeyFromUser] = newKeyValueFromUser;

console.log(alessioObject, typeof alessioObject);

alessioObject.animal = 'nessuno';

alessioObject.cssKnowledge = 3;

console.log(alessioObject, typeof alessioObject);


const class101 = [
    {
        firstName: 'Christian',
        lastName: 'Mazzaro',
    },
    {
        firstName: 'Luca',
        lastName: 'Tacchino',
    },
    {
        firstName: 'Matteo',
        lastName: 'Bonesini',
    },
];

for (let index = 0; index < class101.length; index++) {
    const element = class101[index];
    
    for (const key in element) {
        console.log(key, element[key]);
    }
}

