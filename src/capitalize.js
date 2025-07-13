export default function capitalize(word) {

    if (word === "") { return ""; }
    else if (/[a-zA-Z]/.test(word.at(0))) {
        const firstLetter = word.slice(0, 1).toUpperCase();
        const capitalizedWord = firstLetter.concat(word.slice(1));
        return capitalizedWord;
    }
    else { return "Error"; }
}