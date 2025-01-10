class WashingMachine {
    constructor(maker,type,shape,capacity) {
        this.maker = maker;
        this.type = type;
        this.shape = shape;
        this.capacity = capacity;
    }

    wash() {
        console.log("now, washing");
    }

    showStatus(){
        console.log(this.maker);
        console.log(this.type);
        console.log(this.shape);
        console.log(this.capacity);
    }
}

const sentaku = new WashingMachine("メーカーA","全自動","縦型","7.5kg");
sentaku.wash();
sentaku.showStatus();