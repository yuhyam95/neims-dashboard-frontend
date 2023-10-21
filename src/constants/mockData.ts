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
                id: 1,
                name: "Maize 50kg",
                quantity: 80,
                station: "Kano",
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

export default data;