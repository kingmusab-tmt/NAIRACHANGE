export default class Changes {
  constructor(note) {
    this.note = note;
    this.notes = {
      "One thousand": 1000,
      "Five hundred": 500,
      "Two hundred": 200,
      "One hundred": 100,
      Fifty: 50,
      Twenty: 20,
      Ten: 10,
      Five: 5,
      One: 1,
    };
  }

  pieces(note) {
    const myPieces = {};
    for (let keys in this.notes) {
      if (Math.floor(note / this.notes[keys]) === 0) {
        continue;
      } else {
        myPieces[keys] = Math.floor(note / this.notes[keys]);
        note = note % this.notes[keys];
      }
    }
    return myPieces;
  }
}

export function resetForm(setNote, setResult) {
  document.getElementById("naira-change").reset();
  setNote("");
  setResult({});
}
