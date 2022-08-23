class uber {
    constructor(rate, distance, waitingPeriod){
      this. rate = rate;
      this. distance = distance;
      this. waitingPeriod = waitingPeriod;
    }
   
    getPrice() {
      return (`The rate per km is Rs. ${this.rate} with the distance of ${this.distance} KM and the waiting period ${this.waitingPeriod} minutes`)
    }
    getTotalPrice(){
      let totalprice = (this.rate * this.distance) + (this.waitingPeriod + 5)
      return totalprice;
    }
  }
  
  let ride1 = new uber (10, 15, 10);
  let ride2 = new uber (9, 30, 20);
  let ride3 = new uber (8, 35, 5)
  
  
  console.log(ride1.getPrice());
  console.log("Total price = Rs. " +  ride1.getTotalPrice());
  console.log(ride2.getPrice());
  console.log("Total price = Rs. " +  ride2.getTotalPrice());
  console.log(ride3.getPrice());
  console.log("Total price = Rs. " +  ride3.getTotalPrice());