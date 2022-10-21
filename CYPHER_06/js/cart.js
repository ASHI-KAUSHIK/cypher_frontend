let shop = document.getElementById('shop');


let basket =  [];

let shopitemsdata = [
    {
        id: "a",
        title : "AIR JORDAN 12 RETRO-LOW 'PLAYOFFS'",
       
        img : "img/AIR_JORDAN_12_RETRO-LOW'PLAYOFFS'.png",
        price: "$45"
    } ,
    
    {
        id: "b",
        title : "AIR JORDAN 12 RETRO-LOW 'PLAYOFFS'",
        
        img : "img/Air_Jordan_1_Retro_High_OG_blackwhite.png",
        price: "$55"
    } , 
    {
        id: "c",
        title : "AIR JORDAN 12 RETRO-LOW 'PLAYOFFS'",
       
        img : "img/black-shoe.png",
        price: "$65"
    } , 
    {
        id: "d",
        title : "AIR JORDAN 12 RETRO-LOW 'PLAYOFFS'",
        
        img : "img/off-whitexAirVaporMax'TheTen'.png",
        price: "$75 " 
    },
    {
        id: "e",
        title : "AIR JORDAN 12 RETRO-LOW 'PLAYOFFS'",
       
        img : "img/Air_Jordan_1_Retro_High_OG_blackwhite.png",
        price: "$75"  
    },
    {
        id: "f",
        title : "AIR JORDAN 12 RETRO-LOW 'PLAYOFFS'",
        
        img : "img/shoe1.png",
        price: "$75"  
    },
    {
        id: "g",
        title : "AIR JORDAN 12 RETRO-LOW 'PLAYOFFS'",
       
        img : "img/off-whitexAirVaporMax'TheTen'.png",
        price: "$75"  
    },
    {
        id: "h",
        title : "AIR JORDAN 12 RETRO-LOW 'PLAYOFFS'",
       
        img : "img/off-whitexAirVaporMax'TheTen'.png",
        price: "$75"  
    }
];


let generateShop = () => {
    return(shop.innerHTML = shopitemsdata.map((x)=>{
        let search = basket.find((x) => x.id === id) || []
        return `
        <div class="col" id="product-id-${x.id}">
        <div class="card mt-5  cardcontainer">
          <img src=${x.img} class="card-img-top " alt="...">
        
          <div class="card-body">
            <p class="card-text fw-bold">${x.title}</p>
            <div class="row">
              <div class="col  price">
                  <p>${x.price}</p>
              </div>
              <div class="col  text-end">
                  <i onclick="decrement(${x.id})" class="fa-solid fa-minus"></i>
                  <span id=${x.id} class="quantity">${search.item === undefined ? 0: search.item}</span>
                  <i onclick="increment(${x.id})" class="fa-solid fa-plus"></i>
              </div>
          </div>
          </div>
        </div>
      </div>
        
        `;
    }).join(""));    
};


//IN ORDER TO AVOID  x. from   ${x.anything}   inside the map function take let{id, title, desc, img, price }

generateShop();
 

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push(
            {
                id: selectedItem.id,
                item: 1
            }
        );
    }   //Here by search === undefined we mean that if the item doesn't exist in the basket array


    else{
        search.item +=1;    //and here if the item already exist then increase the quantity by one
    }

    localStorage.setItem("data", JSON.stringify (basket));
   

    

    // console.log(basket);
    update(selectedItem.id);
   
    
    // console.log(basket);
    // selectedItem1 = JSON.stringify(selectedItem.id);
    // alert(selectedItem1);


};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search.item === 0)
        return;
       //Here by search.item === 0 we mean that if the item doesn't exist in the basket array the value on pressing the decrement button is not gonna give a negative actually nothing is gonna happen


    else{
        search.item -=1;    //and here if the item already exist then increase the quantity by one
    }

 
    localStorage.setItem("data", JSON.stringify (basket));
    

    


    // console.log(basket);
    update(selectedItem.id);
    
};
let update = (id) => {
    // console.log(id);
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};


let calculation =()=>{
    
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y , 0)
};

 