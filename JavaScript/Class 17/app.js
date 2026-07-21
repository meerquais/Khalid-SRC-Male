// var plan1 = {
//     name:"Basic",
//     price:3.99,
//     space:100,
//     transfer:1000,
//     pages:10,
//     discountMonth:[5,6],
//     calcAnnual:function(discount){
//          var bestPrice = this.price;
//      var currentDate = new Date();
//      var currentMonth = currentDate.getMonth();
//      for(var i = 0; i < this.discountMonth.length;i++){
//          if(this.discountMonth[i] === currentMonth){
//              bestPrice = this.price * discount;
//              break;
//          }
//      }
//      return bestPrice * 12;
//     }
// }

// console.log(plan1.calcAnnual(1));

// function calcAnnual(){
//     var bestPrice = plan1.price;
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth();

//     for(var i = 0; i < plan1.discountMonth.length;i++){
//         if(plan1.discountMonth[i] === currentMonth){
//             bestPrice = plan1.price * .8;
//             break;
//         }
//     }
//     return bestPrice * 12;
// }

// var annualPrice = calcAnnual();

// console.log(annualPrice);

// var plan2= {

// }

function Plan(name, price, space, data, pages, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.data = data;
  this.pages = pages;
  this.discountMonths = discountMonths;
  this.calcAnnual = function (discount) {
    var bestPrice = this.price;
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();

    for (var i = 0; i < this.discountMonths.length;i++) {
      if (this.discountMonths[i] === currentMonth) {
        bestPrice = this.price * discount;
        break;
      }
    }
    return bestPrice * 12;
  };
}

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10,[5,6]);
var plan2 = new Plan("professional", 5.99, 500, 5000, 50,[5,6,7,8]);

console.log(plan1);
console.log(plan2.calcAnnual(.85));
