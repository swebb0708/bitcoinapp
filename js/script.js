const displayPrice = document.querySelectorAll("#currencyContainer");
const calledArticle = document.querySelector("#newsContainer");
const API_Key = "39dd4ed66e764e1ab4b7d05441bf160b";
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");

class PriceDisplay{
    // constructor(country){
    //     this.country = country;
    //     this.enterPriceInfo();
    //     this.getFlag();
    //     localStorage[this.country.code] = JSON.stringify(this.country);
    // }

    // enterPriceInfo(country){
    //     country.innerHTML += 
    //     `
    //         <div class= "currencyContainer" id= ${this.country.code}>
    //         <div class="flag"></div>
    //         <div class="price">
    //         <div> ${this.country.name} </div>
    //          <div> ${this.country.rate} </div>
    //         </div>
    //         <div class="change">
    //             <div> Change % </div>
    //              <div>
    //                  ${
    //                     (localStorage.getItem(this.country.code) === null) ? "0.00%" : ((((this.country.rate) - (JSON.parse(localStorage.getItem(this.country.code)).rate)) / (JSON.parse(localStorage.getItem(this.country.code)).rate)) * 100).toFixed(2)
    //                    }
    //              </div>
        
    //           </div>
    //         </div>
    //      `
    //      console.log("coins")
    constructor(country) {
        this.country = country;
        this.addPrice();
        this.getFlag();
        localStorage[this.country.code] = JSON.stringify(this.country);
      }
      addPrice() {
        displayPrice.innerHTML += `
          <div class="price_container" id=${this.country.code}>
            <div class= "flag_container"></div>
            <div class="price">
              <div> ${this.country.name} </div>
              <div> ${this.country.rate}</div>
            </div>
            <div class="change">
            <div> Change % </div>
            <div>
            ${
          (localStorage.getItem(this.country.code) === null)? "0.00%" : 
          ((((this.country.rate) - (JSON.parse(localStorage.getItem(this.country.code)).rate)) / (JSON.parse(localStorage.getItem(this.country.code)).rate)) * 100).toFixed(2)
          }
              </div>
            </div>
          </div
        `;

    }

//     getFlag(){
//         fetch(`http://api.techlaunch.io:89/flags/${this.country.code}`)
//         .then( res => res.json())
//         .then(data => {
//             const flag_container = document.querySelector(`#${this.country.code} .flag_container`);
//             flag_container.innerHTML = `
//                 <img src="${data.icon}" alt= "flag icon">
//             `
//         })
//         .catch( error => {
//             console.log("there was an error");
//             console.log(error);
//             console.error("there was an error");
//         })
//     }
// }
getFlag(){
    fetch(`http://api.techlaunch.io:89/flags/${this.country.code}`)
    .then(res => res.json())
    .then(data => {
      const flag_container = document.querySelector(`#${this.country.code} .flag_container`);
      flag_container.innerHTML +=`
        <img src="${data.icon}" alt="flag icon">
      `
    })
    .catch(error =>{
      console.error(error);
      console.error("There was an error!")
    })
      ;
  }
}



class NewsDisplay{
    constructor(calledArticle){
        this.calledArticle = calledArticle;
        this.enterNewsInfo()
    }

    enterNewsInfo(){
        //.innerHTML += "Tea"
        console.log("tea")
    }

}

class Bitcoin{
    constructor(){
        this.setDefaultCountries();
        this.getPrices();
        // this.setPrices();
        this.addCountry();
        this.removeCountry();
        this.getNewsStories();
        this.addNewsStories();
    }
    setDefaultCountries(){
        console.log('Jamaica');
        this.countries = [
            {index: 1, code: "BCH"},
            {index: 2, code: "USD"},
            {index: 3, code: "EUR"},
            {index: 4, code: "GBP"},
            {index: 5, code: "JPY"},
            {index: 6, code: "CAD"}
            
        ]
    }
     getPrices(){
        console.log('$$')
        fetch('https://bitpay.com/api/rates')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.prices = data;
            this.setPrices();
        })
        .catch( error => {
            console.log(error);
            console.log("there was an error");
        })
     }

     setPrices(){
        console.log("$$$$$$")
        for( let i=0; i<this.countries.length; i++){
            new PriceDisplay(this.prices[this.countries[i].index]);
        }
     }
     addCountry(){
        console.log("I see pride")
     }
     removeCountry(){
        console.log("I see powah")
     }
     getNewsStories(){
        console.log("I see a bad ass motherfkr")
     }
     addNewsStories(){
        console.log("That don't take no crap from nobody")
     }
}



// const priceDisplay = new PriceDisplay(
//     {
//         code: "USD",
//         name: "Test Country",
//         rate: 999,
//     }
// );
const newsDisplay = new NewsDisplay();
const bitcoin = new Bitcoin();