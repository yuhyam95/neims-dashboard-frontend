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

export interface BinCard{
    id: number,
    date: string,
    number: string,
    movement: string,
    quantity: number,
    balance: number,
    signature: string
}
export interface Reports {
    id: number,
    station: string,
    title: string,
    body: string,
    date: string,
}

 const mockData: StateData[] =[
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
}
]

export const products: Products[] = 
[{id:1,name:"Wine - Barolo Fontanafredda",quantity:4713,station:"Svay Rieng",reason:false,date:"10/17/2023"},
{id:2,name:"Chicken - Base",quantity:685,station:"Boshof",reason:true,date:"8/21/2023"},
{id:3,name:"Beef - Cow Feet Split",quantity:2651,station:"Jijiga",reason:false,date:"12/22/2022"},
{id:4,name:"Table Cloth 62x114 White",quantity:3317,station:"Washington",reason:true,date:"6/28/2023"},
{id:5,name:"Dish Towel",quantity:3849,station:"Chengzhai",reason:true,date:"8/27/2023"},
{id:6,name:"Cookies Oatmeal Raisin",quantity:9041,station:"Niños Heroes",reason:false,date:"1/19/2023"},
{id:7,name:"Greens Mustard",quantity:4677,station:"Mangaran",reason:true,date:"1/4/2023"},
{id:8,name:"Soup - Cream Of Potato / Leek",quantity:8320,station:"Mansôa",reason:false,date:"1/1/2023"},
{id:9,name:"Garbage Bag - Clear",quantity:2747,station:"Krasyliv",reason:false,date:"6/6/2023"},
{id:10,name:"Turnip - Mini",quantity:8748,station:"Lukou",reason:true,date:"3/3/2023"},
{id:11,name:"Bread - Calabrese Baguette",quantity:7481,station:"Areni",reason:true,date:"12/26/2022"},
{id:12,name:"Pepsi - Diet, 355 Ml",quantity:6354,station:"Bandar-e Ganāveh",reason:true,date:"7/10/2023"},
{id:13,name:"Lychee",quantity:4842,station:"Bilicenii Vechi",reason:true,date:"1/24/2023"},
{id:14,name:"Lettuce - California Mix",quantity:7923,station:"Rueil-Malmaison",reason:false,date:"8/21/2023"},
{id:15,name:"Lamb - Bones",quantity:5746,station:"Kumla",reason:false,date:"9/30/2023"},
{id:16,name:"Bok Choy - Baby",quantity:5216,station:"Pingtan",reason:false,date:"12/29/2022"},
{id:17,name:"Appetizer - Chicken Satay",quantity:5669,station:"Białośliwie",reason:false,date:"3/23/2023"},
{id:18,name:"Wine - Sake",quantity:3234,station:"Bodzechów",reason:true,date:"2/12/2023"},
{id:19,name:"Cloves - Ground",quantity:3364,station:"Cluny",reason:true,date:"8/18/2023"},
{id:20,name:"Container - Foam Dixie 12 Oz",quantity:5926,station:"Laon",reason:false,date:"8/29/2023"},
{id:21,name:"Sauce - Black Current, Dry Mix",quantity:3639,station:"Ludvika",reason:true,date:"1/22/2023"},
{id:22,name:"Straws - Cocktale",quantity:3139,station:"Mnogoudobnoye",reason:false,date:"7/26/2023"},
{id:23,name:"Lamb - Shoulder",quantity:6902,station:"High Point",reason:false,date:"12/1/2022"},
{id:24,name:"Mcguinness - Blue Curacao",quantity:6134,station:"Pilaya",reason:false,date:"9/8/2023"},
{id:25,name:"Ham - Cooked Bayonne Tinned",quantity:3807,station:"Passos",reason:false,date:"12/14/2022"},
{id:26,name:"7up Diet, 355 Ml",quantity:6600,station:"Pelym",reason:false,date:"9/7/2023"},
{id:27,name:"Mix - Cocktail Ice Cream",quantity:699,station:"Pillpinto",reason:true,date:"4/7/2023"},
{id:28,name:"Liqueur - Melon",quantity:8908,station:"Wairinding",reason:false,date:"12/30/2022"},
{id:29,name:"Scrubbie - Scotchbrite Hand Pad",quantity:2567,station:"Ágios Andréas",reason:false,date:"4/1/2023"},
{id:30,name:"Fish - Halibut, Cold Smoked",quantity:5934,station:"Thị Trấn Sìn Hồ",reason:false,date:"4/21/2023"},
{id:31,name:"Aspic - Clear",quantity:3602,station:"Protaras",reason:true,date:"10/30/2023"},
{id:32,name:"Mudslide",quantity:5823,station:"Lunenburg",reason:true,date:"3/15/2023"},
{id:33,name:"Longos - Cheese Tortellini",quantity:9269,station:"Tshikapa",reason:false,date:"5/22/2023"},
{id:34,name:"Ham - Virginia",quantity:6821,station:"Ladan",reason:true,date:"11/26/2022"},
{id:35,name:"Beef - Kobe Striploin",quantity:5204,station:"København",reason:true,date:"10/25/2023"},
{id:36,name:"Ice Cream Bar - Hagen Daz",quantity:6415,station:"Pokrovskoye",reason:true,date:"8/16/2023"},
{id:37,name:"Lamb - Whole, Fresh",quantity:7129,station:"Sattahip",reason:false,date:"9/20/2023"},
{id:38,name:"Plasticspoonblack",quantity:3488,station:"Velyka Bahachka",reason:true,date:"1/27/2023"},
{id:39,name:"Puff Pastry - Slab",quantity:3089,station:"Candi Prambanan",reason:false,date:"2/12/2023"},
{id:40,name:"Lotus Root",quantity:2649,station:"Basey",reason:false,date:"6/14/2023"},
{id:41,name:"Blueberries",quantity:3734,station:"Shuangtian",reason:false,date:"6/6/2023"},
{id:42,name:"Pastry - Mini French Pastries",quantity:1879,station:"Lisui",reason:true,date:"8/26/2023"},
{id:43,name:"Onion Powder",quantity:4219,station:"Järfälla",reason:false,date:"4/7/2023"},
{id:44,name:"Shrimp - Prawn",quantity:5077,station:"Bù Đốp",reason:true,date:"8/22/2023"},
{id:45,name:"Squid U5 - Thailand",quantity:7941,station:"Krajan Curahcotok",reason:true,date:"10/29/2023"},
{id:46,name:"Gatorade - Xfactor Berry",quantity:8370,station:"Ishëm",reason:false,date:"9/3/2023"},
{id:47,name:"Lamb - Leg, Boneless",quantity:9100,station:"København",reason:true,date:"11/26/2022"},
{id:48,name:"Hummus - Spread",quantity:3574,station:"Vychegodskiy",reason:false,date:"8/15/2023"},
{id:49,name:"Beef - Striploin",quantity:1000,station:"Sukamaju",reason:false,date:"10/15/2023"},]

export const bincard: BinCard[] = [
{id:1,date:"6/22/2023",number:"0132-0301",movement:"Patos",quantity:1374,balance:5532,signature:"Whitaker Whiteland"},
{id:2,date:"1/1/2023",number:"47632-0029",movement:"Sedlice",quantity:575,balance:9336,signature:"Emelyne Hadlington"},
{id:3,date:"1/5/2023",number:"0363-4016",movement:"Concordia",quantity:9792,balance:9171,signature:"Datha McIlwaine"},
{id:4,date:"7/20/2023",number:"54868-1890",movement:"Kaz",quantity:6315,balance:8797,signature:"Solomon Waistell"},
{id:5,date:"10/15/2023",number:"68703-054",movement:"Palermo",quantity:4922,balance:6303,signature:"Fifine Towne"},
{id:6,date:"1/5/2023",number:"67510-0171",movement:"La Cruz",quantity:6681,balance:9051,signature:"Muffin Cahey"},
{id:7,date:"9/30/2023",number:"61748-205",movement:"Neochóri",quantity:2761,balance:388,signature:"Pen Gatehouse"},
{id:8,date:"11/19/2022",number:"63629-5094",movement:"Novonikol’sk",quantity:5838,balance:6436,signature:"Blondie Joslow"},
{id:9,date:"9/4/2023",number:"23155-179",movement:"Las Palmas",quantity:9686,balance:5463,signature:"Elayne Kemson"},
{id:10,date:"10/7/2023",number:"0456-0457",movement:"Racławice",quantity:3556,balance:7891,signature:"Wilton Calveley"},
{id:11,date:"7/6/2023",number:"13537-011",movement:"Merkezköy",quantity:8477,balance:1685,signature:"Brander Golledge"},
{id:12,date:"8/30/2023",number:"0517-9203",movement:"São Sebastião do Caí",quantity:5217,balance:3286,signature:"Gigi Wreak"},
{id:13,date:"11/20/2022",number:"54458-967",movement:"Vavozh",quantity:5343,balance:8041,signature:"Stacee Tweedle"},
{id:14,date:"3/10/2023",number:"0078-0126",movement:"Gunziying",quantity:7554,balance:2425,signature:"Edith Biesty"},
{id:15,date:"5/15/2023",number:"63402-204",movement:"L’govskiy",quantity:1249,balance:2731,signature:"Isadore Blackhurst"},
{id:16,date:"1/27/2023",number:"0713-0102",movement:"Glugur Tengah",quantity:7397,balance:1741,signature:"Alisa Turtle"},
{id:17,date:"1/15/2023",number:"0143-9783",movement:"Soacha",quantity:8272,balance:5015,signature:"Lazar Slyford"},
{id:18,date:"2/18/2023",number:"67938-0821",movement:"Xiongjia",quantity:3580,balance:7239,signature:"Bourke Borgars"},
{id:19,date:"8/4/2023",number:"76485-1013",movement:"Swellendam",quantity:2769,balance:1991,signature:"Lodovico Charlton"},
{id:20,date:"4/3/2023",number:"0228-2530",movement:"Belang",quantity:3579,balance:9304,signature:"Letisha Adaway"},
{id:21,date:"1/25/2023",number:"58118-8343",movement:"Mazhu",quantity:1821,balance:8300,signature:"Jameson Greguol"},
{id:22,date:"5/30/2023",number:"0093-6108",movement:"Belmullet",quantity:3703,balance:7422,signature:"Calli Scinelli"},
{id:23,date:"5/1/2023",number:"15127-555",movement:"Iwanai",quantity:9879,balance:7443,signature:"Wendeline Bucham"},
{id:24,date:"11/21/2022",number:"63304-621",movement:"Bergen",quantity:5669,balance:2213,signature:"Jewel Ithell"},
{id:25,date:"2/10/2023",number:"46122-262",movement:"Kubangwaru",quantity:4349,balance:3539,signature:"Florian Baiss"},
{id:26,date:"10/30/2023",number:"43063-194",movement:"Dranoc",quantity:3333,balance:3283,signature:"Pammy Adolphine"},
{id:27,date:"5/16/2023",number:"49348-946",movement:"Gangnan",quantity:3809,balance:6612,signature:"Martie Tanman"},
{id:28,date:"7/1/2023",number:"65862-142",movement:"Kostanay",quantity:5849,balance:2507,signature:"Emmalynn Ebourne"},
{id:29,date:"10/24/2023",number:"0076-0902",movement:"Bagangan",quantity:4231,balance:7367,signature:"Rose Merrywether"},
{id:30,date:"4/14/2023",number:"10812-359",movement:"Maras",quantity:2321,balance:1663,signature:"Ruthanne Nowlan"},
{id:31,date:"9/1/2023",number:"30142-693",movement:"Goléré",quantity:9830,balance:9140,signature:"Amalea Kluge"},
{id:32,date:"8/10/2023",number:"55154-1133",movement:"Yangjiaping",quantity:7942,balance:2800,signature:"Elenore Agneau"},
{id:33,date:"7/23/2023",number:"55714-4593",movement:"Kagadi",quantity:439,balance:4235,signature:"Martelle Escofier"},
{id:34,date:"12/18/2022",number:"49288-0251",movement:"Nueva Requena",quantity:5220,balance:893,signature:"Brennan Lannin"},
{id:35,date:"5/3/2023",number:"62742-4050",movement:"Cimara",quantity:7616,balance:827,signature:"Edmon Lambotin"},
{id:36,date:"4/30/2023",number:"68428-157",movement:"Fangqiang",quantity:6207,balance:3963,signature:"Greer Tuppeny"},
{id:37,date:"7/3/2023",number:"13668-088",movement:"Cartagena",quantity:6585,balance:8902,signature:"Alexio Anstice"},
{id:38,date:"1/17/2023",number:"64203-020",movement:"Shawnee Mission",quantity:6119,balance:8727,signature:"Gertruda Spaduzza"},
{id:39,date:"12/5/2022",number:"0085-0571",movement:"Wailiang",quantity:3261,balance:5110,signature:"Guthrie Guinness"},
{id:40,date:"5/2/2023",number:"41190-207",movement:"Shangdongjie",quantity:4110,balance:9551,signature:"Owen Legerwood"},
{id:41,date:"7/22/2023",number:"59533-1001",movement:"Rîşcani",quantity:7609,balance:3611,signature:"Zorana Shill"},
{id:42,date:"1/1/2023",number:"65044-2212",movement:"Guaratuba",quantity:3062,balance:810,signature:"Portia Yesinin"},
{id:43,date:"4/9/2023",number:"41250-693",movement:"Nikolo-Pavlovskoye",quantity:278,balance:1351,signature:"Rolland Vowels"},
{id:44,date:"7/11/2023",number:"63629-4931",movement:"Fangqiang",quantity:1274,balance:1677,signature:"Kellen Matthews"},
{id:45,date:"7/23/2023",number:"36987-2562",movement:"Palagao Norte",quantity:780,balance:5590,signature:"Raynell Cathie"},
{id:46,date:"3/23/2023",number:"0093-1136",movement:"Tilburg",quantity:2593,balance:4919,signature:"Tierney Hortop"},
{id:47,date:"6/6/2023",number:"50268-279",movement:"Smara",quantity:7036,balance:9530,signature:"Adolphus MacCaffrey"},
{id:48,date:"8/18/2023",number:"0904-6079",movement:"Sharïngol",quantity:2725,balance:3773,signature:"Filmer Lemery"},
{id:49,date:"2/12/2023",number:"67296-0683",movement:"Yangiobod",quantity:5211,balance:7639,signature:"Emmalee Darycott"},
{id:50,date:"9/2/2023",number:"13668-103",movement:"Duas Igrejas",quantity:9691,balance:7783,signature:"Celine O' Scallan"}]

export const reports: Reports[] = 
[{id:1,station:"Cinyumput",title:"General Manager",body:`Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, 
                                                        nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                                        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. 
                                                        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.`, date:"9/22/2023",
                                                        },
{id:2,station:"São Gabriel",title:"Software Engineer IV",body:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. 
                                                                Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. 
                                                                Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo,
                                                                rhoncus sed, vestibulum sit amet, cursus id, turpis.`,date:"11/13/2023"},
{id:3,station:"Oyonnax",title:"Account Coordinator",body:"Praesent blandit. Nam nulla.",date:"6/20/2023"},
{id:4,station:"Foumbouni",title:"Staff Scientist",body:"Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",date:"10/2/2023"},
{id:5,station:"Lyozna",title:"Senior Quality Engineer",body:"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",date:"2/1/2023"},
{id:6,station:"Sōja",title:"Assistant Professor",body:"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",date:"12/14/2022"},] 

export default mockData;