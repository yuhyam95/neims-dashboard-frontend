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
{"id":49,name:"Beef - Striploin",quantity:1000,station:"Sukamaju",reason:false,date:"10/15/2023"},
{"id":50,name:"Bread - Crusty Italian Poly",quantity:7785,station:"Sabana Grande de Boyá",reason:true,date:"10/16/2023"},
{"id":51,name:"Wine - Shiraz South Eastern",quantity:3516,station:"Sanzao",reason:false,date:"9/11/2023"},
{"id":52,name:"Sardines",quantity:8793,station:"Krasnogorskiy",reason:true,date:"7/6/2023"},
{"id":53,name:"Beef Flat Iron Steak",quantity:5466,station:"Sigu",reason:true,date:"9/9/2023"},
{"id":54,name:"Port - 74 Brights",quantity:8270,station:"Mhango",reason:true,date:"5/11/2023"},
{"id":55,name:"Wine - White, Lindemans Bin 95",quantity:8429,station:"Mouzourás",reason:false,date:"10/10/2023"},
{"id":56,name:"Beans - Soya Bean",quantity:6342,station:"Lashma",reason:false,date:"7/30/2023"},
{"id":57,name:"Container Clear 8 Oz",quantity:6601,station:"Saint-Denis",reason:true,date:"1/10/2023"},
{"id":58,name:"Nut - Hazelnut, Ground, Natural",quantity:7369,station:"Mastaiciai",reason:true,date:"4/29/2023"},
{"id":59,name:"Bread Base - Italian",quantity:8146,station:"Krylovskaya",reason:false,date:"7/4/2023"},
{"id":60,name:"Quinoa",quantity:3121,station:"Ordos",reason:true,date:"12/21/2022"},
{"id":61,name:"Brandy - Bar",quantity:4181,station:"Amagasaki",reason:false,date:"4/17/2023"},
{"id":62,name:"Lettuce - Boston Bib",quantity:4345,station:"Mattawa",reason:false,date:"12/25/2022"},
{"id":63,name:"Halibut - Fletches",quantity:5959,station:"Stavanger",reason:true,date:"1/12/2023"},
{"id":64,name:"Ecolab - Medallion",quantity:6097,station:"El Progreso",reason:false,date:"4/12/2023"},
{"id":65,name:"Yucca",quantity:221,station:"Morje",reason:true,date:"10/3/2023"},
{"id":66,name:"Paste - Black Olive",quantity:2534,station:"Taochuan",reason:true,date:"7/8/2023"},
{"id":67,name:"Poppy Seed",quantity:1639,station:"Ryōtsu-minato",reason:false,date:"11/10/2022"},
{"id":68,name:"Pasta - Penne, Rigate, Dry",quantity:5838,station:"Dardhas",reason:false,date:"11/8/2022"},
{"id":69,name:"Zucchini - Yellow",quantity:5655,station:"Lao Suea Kok",reason:false,date:"2/2/2023"},
{"id":70,name:"Mushroom - Enoki, Dry",quantity:5341,station:"Donja Brela",reason:true,date:"9/14/2023"},
{"id":71,name:"Curry Powder Madras",quantity:2896,station:"Mafeng",reason:false,date:"3/16/2023"},
{"id":72,name:"Mortadella",quantity:3472,station:"Futu",reason:true,date:"3/21/2023"},
{"id":73,name:"Shrimp - Black Tiger 6 - 8",quantity:3781,station:"Ercheng",reason:true,date:"5/3/2023"},
{"id":74,name:"Pectin",quantity:1509,station:"Quellouno",reason:true,date:"1/28/2023"},
{"id":75,name:"Garbage Bags - Black",quantity:8847,station:"Chattanooga",reason:true,date:"11/20/2022"},
{"id":76,name:"Spring Roll Veg Mini",quantity:1790,station:"Lyamino",reason:false,date:"9/19/2023"},
{"id":77,name:"Raspberries - Frozen",quantity:1202,station:"Stockholm",reason:false,date:"12/14/2022"},
{"id":78,name:"Coffee - Decafenated",quantity:6645,station:"Dandian",reason:false,date:"2/10/2023"},
{"id":79,name:"Muffin Carrot - Individual",quantity:1599,station:"Lüxiang",reason:true,date:"7/15/2023"},
{"id":80,name:"Glass Clear 7 Oz Xl",quantity:6716,station:"Kněžpole",reason:false,date:"6/28/2023"},
{"id":81,name:"Wine - Periguita Fonseca",quantity:2793,station:"Urazovo",reason:false,date:"6/9/2023"},
{"id":82,name:"Muffin - Banana Nut Individual",quantity:8049,station:"Dolní Čermná",reason:true,date:"2/3/2023"},
{"id":83,name:"Beef - Inside Round",quantity:1811,station:"Takanabe",reason:false,date:"9/30/2023"},
{"id":84,name:"Sansho Powder",quantity:2167,station:"Seltjarnarnes",reason:true,date:"7/6/2023"},
{"id":85,name:"Chocolate - Unsweetened",quantity:2368,station:"Aleksinac",reason:false,date:"3/7/2023"},
{"id":86,name:"Bagel - Everything",quantity:7600,station:"Taiyangling",reason:false,date:"1/28/2023"},
{"id":87,name:"Salt And Pepper Mix - Black",quantity:960,station:"Tudela",reason:false,date:"9/11/2023"},
{"id":88,name:"Beef - Striploin Aa",quantity:7479,station:"Zhenghu",reason:false,date:"6/28/2023"},
{"id":89,name:"Soup - Beef, Base Mix",quantity:2260,station:"Thạnh Phú",reason:false,date:"4/16/2023"},
{"id":90,name:"Haggis",quantity:8222,station:"Strazhitsa",reason:false,date:"3/3/2023"},
{"id":91,name:"Wine - Red, Concha Y Toro",quantity:4568,station:"Twardawa",reason:true,date:"3/2/2023"},
{"id":92,name:"Slt - Individual Portions",quantity:6533,station:"Philadelphia",reason:false,date:"3/11/2023"},
{"id":93,name:"Sobe - Liz Blizz",quantity:1543,station:"Eastern Suburbs Mc",reason:true,date:"1/11/2023"},
{"id":94,name:"Rambutan",quantity:9448,station:"Hamburg",reason:true,date:"10/23/2023"},
{"id":95,name:"Grapefruit - White",quantity:1127,station:"Hengliang",reason:false,date:"12/14/2022"},
{"id":96,name:"Chef Hat 20cm",quantity:7683,station:"Otaru",reason:true,date:"5/7/2023"},
{"id":97,name:"Bulgar",quantity:1472,station:"Gonghe",reason:true,date:"12/3/2022"},
{"id":98,name:"Shrimp - 150 - 250",quantity:9000,station:"Xiaocun",reason:true,date:"10/23/2023"},
{"id":99,name:"Bacardi Breezer - Tropical",quantity:5120,station:"Shirgjan",reason:true,date:"6/9/2023"},
{"id":100,name:"Oil - Safflower",quantity:7727,station:"Rudka",reason:true,date:"9/14/2023"}]


export default data;