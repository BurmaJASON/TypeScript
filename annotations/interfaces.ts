interface Vehicle {
    name : string;
    year : Date;
    broken : boolean;
    summary() : string;
}

const oldCivic = {
    name : 'civic',
    year : new Date,
    broken : true,
    summary() : string {
        return `Name ${this.name}`
    }
};

const printVehicle = (vechicle : Vehicle) : void  => {
    console.log(vechicle.summary());
}

printVehicle(oldCivic);