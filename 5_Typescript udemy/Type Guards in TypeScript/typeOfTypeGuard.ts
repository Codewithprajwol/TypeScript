    function printStrings(str:string | string[]| null){
        if(typeof str ===null){
            console.log("pass an array of strings or a string array please")
        }else if(str=="string"){
                console.log(str)
        }else if(Array.isArray(str)){
             for(const s of str){
                console.log(s)
             }
        }else{
            console.log('chai peelo guys')
        }
    }

    //? or we can do in this case is this

    //? if(str && typeof str=='object') //now it's only runs when it's not null