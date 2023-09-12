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
