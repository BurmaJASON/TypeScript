interface Reportable {
    summary() : string;
}

const oldCivic = {
    name : 'civic',
    year : new Date,
    broken : true,
    summary() : string {
        return `Item Name ${this.name}`
    }
};

const printVehicle = (item : Reportable) : void  => {
    console.log(item.summary());
}

printVehicle(oldCivic);