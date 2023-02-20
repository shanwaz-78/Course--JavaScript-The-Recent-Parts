function day({ // i made a function with object parameters;
    name = "sunday", // it's default values which i assing to an object parameter;
    num = 1
}){
    console.log(num + ":" + name)
}
day({name : 'kyle',num : 2}) // if it's both values are undefind then he will be use default name and num values;