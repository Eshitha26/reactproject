import { configureStore, createSlice } from "@reduxjs/toolkit";
//create productslice
const productslice=createSlice
(
    {
        name:'products',
        initialState:{
            Veg:[{name:"Paneer",price:300,image:"/paneer.png"},
                {name:"Beans",price:240,image:"/beans.png"},
                {name:"Brinjal",price:120,image:"/brinjal.png"},
                {name:"Potota",price:100,image:"/potato.png"},
                {name:"Tomato",price:70,image:"/tomato.png"},
                {name:"Onion",price:300,image:"/onion.png"},
                {name:"Ladiesfinger",price:300,image:"/ladyfinger.png"},
                {name:"Mushroom",price:300,image:"/mushroom.png"},
                {name:"Broccoli",price:300,image:"/broccoli.png"}, 
                {name:"Cauliflower",price:300,image:"/cauliflower.png"},
                {name:"Brinjal",price:120,image:"/brinjal.png"},
                {name:"Paneer",price:300,image:"/paneer.png"}
            ],
            NonVeg:[{name:"Fish",price:300,image:"/fish.png"},
                {name:"Mutton",price:240,image:"/mutton.png"},
                {name:"Prawns",price:120,image:"/prawns.png"},
                {name:"Chicken",price:100,image:"/chicken.png"},
                {name:"Eggs",price:70,image:"/eggs.png"},
                {name:"Beef",price:235,image:"/beef.png"},
                {name:"Crab",price:300,image:"/crab.png"},
                {name:"Duck",price:300,image:"/duck.png"},
                {name:"Rabbit",price:300,image:"/rabbit.png"},
                {name:"Chicken",price:100,image:"/chicken.png"},
                {name:"Prawns",price:120,image:"/prawns.png"},
                {name:"Fish",price:300,image:"/fish.png"}
            ],
            Milk:[{name:"Vijaya",price:300,image:"/vijaya.png"},
                {name:"Amul",price:240,image:"/Amul.png"},
                {name:"Heritage",price:120,image:"/heritage.png"},
                {name:"Nandini",price:100,image:"nandini.png"},
                {name:"Jersey",price:70,image:"jersey.png"},
                {name:"Almond",price:80,image:"almond.png"},
                {name:"Amul",price:240,image:"/Amul.png"},
                {name:"Heritage",price:120,image:"/heritage.png"},
                {name:"Nandini",price:100,image:"nandini.png"},
                {name:"Vijaya",price:300,image:"/vijaya.png"},
                {name:"Almond",price:80,image:"almond.png"},
                {name:"Creammilk",price:180,image:"/creammilk.png"},
            ]

        },
        reducers:{}
    }
)
//create cartslice
const cartSlice=createSlice(
    {
    name:'cart',
    initialState:[],
    reducers:
    {
        addToCart:(state,action)=>
            {
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1
            }
            else
            {
                state.push({...action.payload,quantity:1});
            }
        },
        increment:(state,action)=>
            {
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
    
    },
    decrement:(state,action)=>
        {
        const item=state.find(item=>item.name===action.payload.name);
        if(item && item.quantity>1)
        {
            item.quantity-=1;
        }else
        {
            return state.filter(item=>item.name!==action.payload.name)
        }
    },
    remove:(state,action)=>
        {
        return state.filter(item=>item.name!==action.payload.name);
        },
    clearCart:()=>[]
}
    }
)
//create purchaseSlice
const purchaseSlice=createSlice({
    name:'purchasedetails',
    initialState:[],
    reducers:{
        addPurchaseDetails:(state,action)=>{
            state.push(action.payload);
        }
    }
})
const authSlice = createSlice({
    name: "auth",
    initialState: {
            isAuthenticated: localStorage.getItem("username") ? true : false,
            user: localStorage.getItem("username") || "", // Get stored username
          },
  
    reducers: {
      login: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem("username", action.payload); // Store in localStorage
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = "";
        localStorage.removeItem("username"); // Clear from localStorage
      },
    },
  });
//configure the productslice,cartslice,purchaseslice
const store=configureStore({
            reducer:{products:productslice.reducer,
                cart:cartSlice.reducer,
                purchasedetails:purchaseSlice.reducer,
                auth:authSlice.reducer
            },
})
//export the productslice,cartslice,purchaseslice
export default store;
export const{addToCart,increment,decrement,remove,clearCart}=cartSlice.actions;
export const{addPurchaseDetails}=purchaseSlice.actions;
export const {login,logout} = authSlice.actions;