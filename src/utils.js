import {
    randomTraderName,
    randomId,
    randomCompanyName
} from '@mui/x-data-grid-generator';


const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        description: randomCompanyName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        description: randomCompanyName(),
    },
    // {
    //     id: randomId(),
    //     name: randomTraderName(),
    //     description: randomCompanyName(),
    // },
    // {
    //     id: randomId(),
    //     name: randomTraderName(),
    //     description: randomCompanyName(),
    // },
    // {
    //     id: randomId(),
    //     name: randomTraderName(),
    //     description: randomCompanyName(),
    // },
];



export { initialRows }