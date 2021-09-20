export const validator =(item)=>{
    for(let key in item){
        if(item[key] === ""){
            return `The ${key} cant be empty`;
        }
    }
    return  false;
}