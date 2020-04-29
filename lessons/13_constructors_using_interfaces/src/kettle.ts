interface Kettle {
    volume : number;
}

interface KettleConstructor {
    new (volume: number): Kettle;
}

class TeaKettle implements Kettle {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;
    }
}

class ElectricKettle implements Kettle {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;
    }
}

function kettleFactory(KettleClass: KettleConstructor) {
    const kettle = new KettleClass(2);
    return kettle;
}

const teaKettle = kettleFactory(TeaKettle);
const electricKettle = kettleFactory(ElectricKettle);