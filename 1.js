var mieDiscount = (duit) => {
    var total = duit/2500
    var hasil = (total + (total/4))
    
    return Math.floor(hasil) 
} 
    

console.log(mieDiscount(50000))
