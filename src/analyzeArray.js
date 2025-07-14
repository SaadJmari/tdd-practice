export default function analyzeArray(arr) {
    let sum = arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    let min = arr.reduce((mini, curr) => {
        return curr > mini ? mini : curr;
    }, arr[0]);

    let max = arr.reduce((max, curr) => {
        return curr > max ? curr : max;
    }, arr[0]);

    return {
        average: sum / arr.length,
        min: min,
        max: max,
        length: arr.length
    };
}