export interface WarehouseItem {
    id: number;
    category: string;
    color: string;
    total: number;
  }
export interface MonthItem {
    id: number,
    name: string,
    total: number
}
  export interface StateData {
    id: number;
    state: string;
    warehouse: WarehouseItem[];
    type: string,
    months: MonthItem[];
  }
 
 const data: StateData[] =[
    {
        id: 1,
        state: "KANO",
        type: 'Territorial',
        months: [
            {
              id: 1,
              name: 'January',
              total: 12000  
            },
            {
                id: 1,
                name: 'January',
                total: 10000  
            },
            {
                id: 2,
                name: 'February',
                total: 5000  
            },
            {
                id: 3,
                name: 'March',
                total: 7000  
            },
            {
                id: 4,
                name: 'April',
                total: 16000  
            },
            {
                id: 5,
                name: 'May',
                total: 3000  
            },
            {
                id: 6,
                name: 'June',
                total: 9000  
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
    state: "LAGOS",
    type: 'Territorial',
    months: [
        {
          id: 1,
          name: 'January',
          total: 15000  
        },
        {
            id: 1,
            name: 'January',
            total: 9000  
        },
        {
            id: 2,
            name: 'February',
            total: 7500  
        },
        {
            id: 3,
            name: 'March',
            total: 3000  
        },
        {
            id: 4,
            name: 'April',
            total: 16000  
        },
        {
            id: 5,
            name: 'May',
            total: 3000  
        },
        {
            id: 6,
            name: 'June',
            total: 12000  
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
    state: "PORT-HARCOURT",
    type: 'Zonal',
    months: [
        {
          id: 1,
          name: 'January',
          total: 12000  
        },
        {
            id: 1,
            name: 'January',
            total: 10000  
        },
        {
            id: 2,
            name: 'February',
            total: 5000  
        },
        {
            id: 3,
            name: 'March',
            total: 7000  
        },
        {
            id: 4,
            name: 'April',
            total: 16000  
        },
        {
            id: 5,
            name: 'May',
            total: 3000  
        },
        {
            id: 6,
            name: 'June',
            total: 9000  
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