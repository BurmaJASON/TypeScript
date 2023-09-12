const drink = {
    color : 'brown',
    carbonated : true,
    sugar : 40
};

// const pepsi : [string,boolean,number] = ['brown', true, 40]; 
// pepsi[0] = 40; error


// type alias
type Drink = [string, boolean, number];
const pepsi : Drink = ['brown', true, 40]; 
const cola : Drink = ['brown', false, 100]; 



// why not use often tuples
const carSpecs : [number, number] = [400,233]; //not clear what it means

const carStats = {
    horsepower : 400,
    weight : 223
}// clear with object what it means