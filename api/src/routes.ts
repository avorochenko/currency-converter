import {getAllCurrenciesAction, convertAction} from "./controllers/currency"

export const AppRoutes = [
    {
      path: "/currencies",
      method: "get",
      action: getAllCurrenciesAction
    },
    {
      path: "/convert",
      params: ['value', 'from', 'to', 'email'],
      method: "get",
      action: convertAction
    }
];