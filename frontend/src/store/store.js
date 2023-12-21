import {configureStore} from '@reduxjs/toolkit'
import categoriaSlice from './reducers/categoriasReducer'
import itensSlice from'./reducers/itensReducers'
const Store = configureStore({
    reducer: {
        categorias: categoriaSlice,
        itens: itensSlice
    }
        
   
})

export default Store