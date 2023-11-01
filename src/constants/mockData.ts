export interface WarehouseItem {
    id: number;
    category: string;
    color: string;
    total: number;
  }
export interface MonthItem {
    id: number,
    name: string,
    total: number,
    beneficiaries: {
        men: number,
        women: number,
        children: number
    }
}
export interface ProductItem{
    id: number,
    name: string,
    quantity: number,
    reason: string,
    station: string,
    date: string,
}

export interface StateData {
    id: number;
    state: string;
    warehouse: WarehouseItem[];
    type: string,
    months: MonthItem[];
    change: string;
    products: ProductItem[];
  }

  export interface Products{
    id: number,
    name: string,
    quantity: number,
    reason: boolean,
    station: string,
    date: string,
}


 const data: StateData[] =[
    {
        id: 1,
        state: "Kano",
        type: 'Territorial',
        change: 'increase',
        products:[
            {
            id: 1,
            name: "Rice 25kg",
            quantity: 100,
            station: "Kano",
            reason: "restock",
            date: "16-10-2023"
            },
            {
                id: 2,
                name: "Maize 50kg",
                quantity: 80,
                station: "Kano",
                reason: "distribution",
                date: "16-10-2023"
            },
            {
                id: 3,
                name: "BUA Cement",
                quantity: 125,
                station: "Kano",
                reason: "restock",
                date: "16-10-2023"
                },
                {
                    id: 4,
                    name: "Fertilizer",
                    quantity: 900,
                    station: "Kano",
                    reason: "distribution",
                    date: "16-10-2023"
                },
        ],
        months: [
            {
              id: 1,
              name: 'January',
              total: 12000,
              beneficiaries: {
                men: 100,
                women: 250,
                children: 320
              }  
            },
            {
                id: 2,
                name: 'February',
                total: 5000,
                beneficiaries: {
                    men: 100,
                    women: 250,
                    children: 320
                  }  
            },
            {
                id: 3,
                name: 'March',
                total: 7000,
                beneficiaries: {
                    men: 120,
                    women: 240,
                    children: 310
                  }  
            },
            {
                id: 4,
                name: 'April',
                total: 16000,
                beneficiaries: {
                    men: 400,
                    women: 250,
                    children: 320
                  }  
            },
            {
                id: 5,
                name: 'May',
                total: 3000,
                beneficiaries: {
                    men: 100,
                    women: 250,
                    children: 320
                  }  
            },
            {
                id: 6,
                name: 'June',
                total: 9000,
                beneficiaries: {
                    men: 100,
                    women: 350,
                    children: 320
                  }  
            }
        ],
        warehouse:[
    {
        id: 1,
        category: "Food Items",
        color: "#FFA523",
        total: 150000,

    },
    {
        id: 2,
        category: "Non-Food Items",
        color: "#FE3169",
        total: 100000,
        
    },
    {
        id: 3,
        category: "Livelihood",
        color:  '#00B5B0',
        total: 80000,
        
    },
    {
        id: 4,
        category: "Agro-Chemical",
        color:  '#9F48A6',
        total: 130000,
        
    },
    {
        id: 5,
        category: "Building Materials",
        color:  '#049FCB',
        total: 50000,
    }
    ]
},
{
    id: 2,
    state: "Lagos",
    type: 'Territorial',
    change: 'decrease',
    products:[
        {
        id: 1,
        name: "BUA Cement",
        quantity: 100,
        station: "Lagos",
        reason: "distribution",
        date: "16-10-2023"
        },
        {
            id: 1,
            name: "Roofing Sheets",
            quantity: 80,
            station: "Lagos",
            reason: "restock",
            date: "16-10-2023"
        },
    ],
    months: [
        {
          id: 1,
          name: 'January',
          total: 15000,
          beneficiaries: {
            men: 100,
            women: 250,
            children: 220
          }  
        },
        {
            id: 2,
            name: 'February',
            total: 7500,
            beneficiaries: {
                men: 130,
                women: 250,
                children: 300
              }  
        },
        {
            id: 3,
            name: 'March',
            total: 3000,
            beneficiaries: {
                men: 100,
                women: 250,
                children: 120
              }  
        },
        {
            id: 4,
            name: 'April',
            total: 16000,
            beneficiaries: {
                men: 150,
                women: 250,
                children: 160
              }  
        },
        {
            id: 5,
            name: 'May',
            total: 3000,
            beneficiaries: {
                men: 100,
                women: 250,
                children: 320
              }  
        },
        {
            id: 6,
            name: 'June',
            total: 12000,
            beneficiaries: {
                men: 300,
                women: 250,
                children: 320
              }  
        }
    ],
    warehouse:[
{
    id: 1,
    category: "Food Items",
    color: "#FFA523",
    total: 150000,

},
{
    id: 2,
    category: "Non-Food Items",
    color: "#FE3169",
    total: 100000,
    
},
{
    id: 3,
    category: "Livelihood",
    color:  '#00B5B0',
    total: 80000,
    
},
{
    id: 4,
    category: "Agro-Chemical",
    color:  '#9F48A6',
    total: 130000,
    
},
{
    id: 5,
    category: "Building Materials",
    color:  '#049FCB',
    total: 50000,
},

]
},
{
    id: 3,
    state: "Port-Harcourt",
    type: 'Zonal',
    change: 'increase',
    products:[
        {
        id: 1,
        name: "Fertilizer",
        quantity: 350,
        station: "Port-Harcourt",
        reason: "restock",
        date: "16-10-2023"
        },
        {
            id: 1,
            name: "Mattress",
            quantity: 80,
            station: "Port-Harcourt",
            reason: "restock",
            date: "16-10-2023"
        },
    ],
    months: [
        {
          id: 1,
          name: 'January',
          total: 12000,
          beneficiaries: {
            men: 100,
            women: 250,
            children: 520
          }  
        },
        {
            id: 2,
            name: 'February',
            total: 5000,
            beneficiaries: {
                men: 100,
                women: 250,
                children: 320
              }  
        },
        {
            id: 3,
            name: 'March',
            total: 7000, 
            beneficiaries: {
                men: 100,
                women: 230,
                children: 320
              }  
        },
        {
            id: 4,
            name: 'April',
            total: 16000, 
            beneficiaries: {
                men: 160,
                women: 250,
                children: 320
              }  
        },
        {
            id: 5,
            name: 'May',
            total: 3000,
            beneficiaries: {
                men: 100,
                women: 250,
                children: 300
              }  
        },
        {
            id: 6,
            name: 'June',
            total: 9000,
            beneficiaries: {
                men: 120,
                women: 350,
                children: 320
              }  
        }
    ],
    warehouse:[
{
    id: 1,
    category: "Food Items",
    color: "#FFA523",
    total: 150000,

},
{
    id: 2,
    category: "Non-Food Items",
    color: "#FE3169",
    total: 100000,
    
},
{
    id: 3,
    category: "Livelihood",
    color:  '#00B5B0',
    total: 80000,
    
},
{
    id: 4,
    category: "Agro-Chemical",
    color:  '#9F48A6',
    total: 130000,
    
},
{
    id: 5,
    category: "Building Materials",
    color:  '#049FCB',
    total: 50000,
},

]
}
]

export const products: Products[] = 
[{id:1,name:"Wine - Barolo Fontanafredda",quantity:4713,station:"Svay Rieng",reason:false,date:"10/17/2023"},
{"id":2,name:"Chicken - Base",quantity:685,station:"Boshof",reason:true,date:"8/21/2023"},
{"id":3,name:"Beef - Cow Feet Split",quantity:2651,station:"Jijiga",reason:false,date:"12/22/2022"},
{"id":4,name:"Table Cloth 62x114 White",quantity:3317,station:"Washington",reason:true,date:"6/28/2023"},
{"id":5,name:"Dish Towel",quantity:3849,station:"Chengzhai",reason:true,date:"8/27/2023"},
{"id":6,name:"Cookies Oatmeal Raisin",quantity:9041,station:"Niños Heroes",reason:false,date:"1/19/2023"},
{"id":7,name:"Greens Mustard",quantity:4677,station:"Mangaran",reason:true,date:"1/4/2023"},
{"id":8,name:"Soup - Cream Of Potato / Leek",quantity:8320,station:"Mansôa",reason:false,date:"1/1/2023"},
{"id":9,name:"Garbage Bag - Clear",quantity:2747,station:"Krasyliv",reason:false,date:"6/6/2023"},
{"id":10,name:"Turnip - Mini",quantity:8748,station:"Lukou",reason:true,date:"3/3/2023"},
{"id":11,name:"Bread - Calabrese Baguette",quantity:7481,station:"Areni",reason:true,date:"12/26/2022"},
{"id":12,name:"Pepsi - Diet, 355 Ml",quantity:6354,station:"Bandar-e Ganāveh",reason:true,date:"7/10/2023"},
{"id":13,name:"Lychee",quantity:4842,station:"Bilicenii Vechi",reason:true,date:"1/24/2023"},
{"id":14,name:"Lettuce - California Mix",quantity:7923,station:"Rueil-Malmaison",reason:false,date:"8/21/2023"},
{"id":15,name:"Lamb - Bones",quantity:5746,station:"Kumla",reason:false,date:"9/30/2023"},
{"id":16,name:"Bok Choy - Baby",quantity:5216,station:"Pingtan",reason:false,date:"12/29/2022"},
{"id":17,name:"Appetizer - Chicken Satay",quantity:5669,station:"Białośliwie",reason:false,date:"3/23/2023"},
{"id":18,name:"Wine - Sake",quantity:3234,station:"Bodzechów",reason:true,date:"2/12/2023"},
{"id":19,name:"Cloves - Ground",quantity:3364,station:"Cluny",reason:true,date:"8/18/2023"},
{"id":20,name:"Container - Foam Dixie 12 Oz",quantity:5926,station:"Laon",reason:false,date:"8/29/2023"},
{"id":21,name:"Sauce - Black Current, Dry Mix",quantity:3639,station:"Ludvika",reason:true,date:"1/22/2023"},
{"id":22,name:"Straws - Cocktale",quantity:3139,station:"Mnogoudobnoye",reason:false,date:"7/26/2023"},
{"id":23,name:"Lamb - Shoulder",quantity:6902,station:"High Point",reason:false,date:"12/1/2022"},
{"id":24,name:"Mcguinness - Blue Curacao",quantity:6134,station:"Pilaya",reason:false,date:"9/8/2023"},
{"id":25,name:"Ham - Cooked Bayonne Tinned",quantity:3807,station:"Passos",reason:false,date:"12/14/2022"},
{"id":26,name:"7up Diet, 355 Ml",quantity:6600,station:"Pelym",reason:false,date:"9/7/2023"},
{"id":27,name:"Mix - Cocktail Ice Cream",quantity:699,station:"Pillpinto",reason:true,date:"4/7/2023"},
{"id":28,name:"Liqueur - Melon",quantity:8908,station:"Wairinding",reason:false,date:"12/30/2022"},
{"id":29,name:"Scrubbie - Scotchbrite Hand Pad",quantity:2567,station:"Ágios Andréas",reason:false,date:"4/1/2023"},
{"id":30,name:"Fish - Halibut, Cold Smoked",quantity:5934,station:"Thị Trấn Sìn Hồ",reason:false,date:"4/21/2023"},
{"id":31,name:"Aspic - Clear",quantity:3602,station:"Protaras",reason:true,date:"10/30/2023"},
{"id":32,name:"Mudslide",quantity:5823,station:"Lunenburg",reason:true,date:"3/15/2023"},
{"id":33,name:"Longos - Cheese Tortellini",quantity:9269,station:"Tshikapa",reason:false,date:"5/22/2023"},
{"id":34,name:"Ham - Virginia",quantity:6821,station:"Ladan",reason:true,date:"11/26/2022"},
{"id":35,name:"Beef - Kobe Striploin",quantity:5204,station:"København",reason:true,date:"10/25/2023"},
{"id":36,name:"Ice Cream Bar - Hagen Daz",quantity:6415,station:"Pokrovskoye",reason:true,date:"8/16/2023"},
{"id":37,name:"Lamb - Whole, Fresh",quantity:7129,station:"Sattahip",reason:false,date:"9/20/2023"},
{"id":38,name:"Plasticspoonblack",quantity:3488,station:"Velyka Bahachka",reason:true,date:"1/27/2023"},
{"id":39,name:"Puff Pastry - Slab",quantity:3089,station:"Candi Prambanan",reason:false,date:"2/12/2023"},
{"id":40,name:"Lotus Root",quantity:2649,station:"Basey",reason:false,date:"6/14/2023"},
{"id":41,name:"Blueberries",quantity:3734,station:"Shuangtian",reason:false,date:"6/6/2023"},
{"id":42,name:"Pastry - Mini French Pastries",quantity:1879,station:"Lisui",reason:true,date:"8/26/2023"},
{"id":43,name:"Onion Powder",quantity:4219,station:"Järfälla",reason:false,date:"4/7/2023"},
{"id":44,name:"Shrimp - Prawn",quantity:5077,station:"Bù Đốp",reason:true,date:"8/22/2023"},
{"id":45,name:"Squid U5 - Thailand",quantity:7941,station:"Krajan Curahcotok",reason:true,date:"10/29/2023"},
{"id":46,name:"Gatorade - Xfactor Berry",quantity:8370,station:"Ishëm",reason:false,date:"9/3/2023"},
{"id":47,name:"Lamb - Leg, Boneless",quantity:9100,station:"København",reason:true,date:"11/26/2022"},
{"id":48,name:"Hummus - Spread",quantity:3574,station:"Vychegodskiy",reason:false,date:"8/15/2023"},
{"id":49,name:"Beef - Striploin",quantity:1000,station:"Sukamaju",reason:false,date:"10/15/2023"},]


export default data;