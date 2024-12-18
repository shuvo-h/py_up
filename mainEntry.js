const builder = require("./botBuilder")
const builderFandB = require("./botBuilders/f_and_b")
console.log(builder);

module.exports = {
    builder,
    f_and_b: builderFandB
};