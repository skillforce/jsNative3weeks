import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.51,
            sellRate: 2.49,
        },
        {
            currencyName: 'EUR',
            buyRate: 2.94,
            sellRate: 2.86,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.039,
            sellRate: 0.037,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
            return {
                ...state,
                ...action.payload,
                amountOfBYN: '',
                amountOfCurrency: '',
            }
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
};
