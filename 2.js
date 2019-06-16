var prima = []
var segitiga = ""


var primaSegitiga = (input) => {
    if (input <= 0 || input >= 10) {
        input = "alas/tinggi tidak sesuai"
    } else {
        for (var i=1 ; i<=50 ; i++) {
            t = 0
            for (var j=1 ; j<=i ; j++) {
                if(i%j == 0) {
                    t++
                }
            }
            if(t == 2) {
                prima.push(i)
            }
        }
        // segitiganya
        for (var i=0 ; i<input ; i++) {
            for (var j=0 ; j<=i ; j++) {
                segitiga += prima[j]
            }
            segitiga += "\n"
        }
    }

    return segitiga
}

console.log(primaSegitiga(7))
