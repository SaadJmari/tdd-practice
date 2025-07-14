export default function caesarCipher(word, n) {
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i)
        if (code >= 97 && code <= 122) {
            const base = "a".charCodeAt(0);
            const shifted = (word.charCodeAt(i) - base + n) % 26
            newWord[i] = String.fromCharCode(base + shifted);
        } else if (code >= 65 && code <= 90) {
            const base = "A".charCodeAt(0);
            const shifted = (word.charCodeAt(i) - base + n) % 26
            newWord[i] = String.fromCharCode(base + shifted);
        }
        else {
            newWord[i] = word[i];
        }
    }
    return newWord.join("");
}