var primaSegitiga = () => {
    var angka = 5;
    var output="";
    for (var i = 1; i <= angka; i++) {
        for (var j = 1; j <= i; j++) {
            output+=j + "     ";
        }
        console.log(output);
        output="";
    }
}

console.log(primaSegitiga())
