import {configureStore} from '@reduxjs/toolkit'
import categoriaSlice from './reducers/categoriasReducer'
import itensSlice from'./reducers/itensReducers'
import carrinhoSlicer from './reducers/carrinhoReducer'

const Store = configureStore({
    reducer: {
        categorias: categoriaSlice,
        itens: itensSlice,
        carrinho: carrinhoSlicer
    }
        
   
})

export default Store