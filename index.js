module.exports = {
    findMaxOfTwo: (x, y) => {
        let max;
        if (typeof x !== "number" || typeof y !== "number") {
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
    },
    findMaxOfThree: (x, y, z) => {
        let max;
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
            throw new Error("Incompatible types: Arguments contains non numeric values");
        }
        else {
            if (x > y && x > z) {
                max = x;
            }
            else if (x > y && x < z){
                max = z;
            }
            else {
                max = y;
            }
            return max;
        }
    }
}