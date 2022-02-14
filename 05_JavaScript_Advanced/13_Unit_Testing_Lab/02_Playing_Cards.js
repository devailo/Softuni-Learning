function cardFactory(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    face = face.toUpperCase();

    if (!faces.includes(face)) {
        throw new Error("Invalid face!");
    }

    let card = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }
    return card.toString();
}



let card2 = cardFactory('10', 'H');
card2.toString();
let card = cardFactory('1', 'C');
card.toString();