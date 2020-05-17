module.exports = {
    findMaxOfTwo: (x, y) => {
        let max;
        if (typeof x !== Number || typeof y !== Number) {
            throw new Error("Incompatible types: Arguments contains non numeric values");
        }
        else {
            if (x > y) {
                max = x;
            }
            else {
                max = y;
            }
            return max;
        }
    }
}