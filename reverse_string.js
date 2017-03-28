function rev(){
    var name = ["H","E","L","L","O"];
    var blank = [];
    for(var i = name.length-1; i >= 0; i--){        
        blank.push(name[i]);
    }
    return blank;
};
console.log(rev());