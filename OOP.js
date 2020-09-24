var randomHex = function (len) {
    var maxlen = 8,
    min = Math.pow(16, Math.min(len, maxlen) - 1),
    max = Math.pow(16, Math.min(len, maxlen)) - 1,
    n = Math.floor(Math.random() * (max-min+1)) + min,
    r = n.toString()
    while (r.length < len) {
        r = r + randomHex(len - maxlen)
    }
    return r
}

for (let i = 1; i < 50; i++) {
    console.log(randomHex(24));
}