export function beautifyNumber(number) {
    let result;
    if (number !== "") {
        result = parseFloat(number).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.')
            .split("").reverse().join("").replace(/(\.)/, ",").split("").reverse().join("");
        return result.substring(0, result.length -3);
    } else {
        return null;
    }
}