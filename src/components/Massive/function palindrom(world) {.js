function palindrom(world) {
    let res = world.replace(/[!?,. -]/g, '').toUpperCase()
    if (res === res.split('').reverse().join('')) {
       return true
    }else{
       return false
    }
 }
 console.log(palindrom('asa'));