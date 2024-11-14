function abcd(name, cb) {
    console.log(cb("data"));
    return 'hey';
}
abcd("prajwol", function (value) {
    console.log(value);
    return 'solved';
});
function fun(a, b) {
    if (typeof a === "string" && typeof b === "undefined") {
        console.log("hey");
    }
    else if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error('something went wrong');
}
fun("love");
fun("love", 23);
