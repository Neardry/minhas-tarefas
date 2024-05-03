import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/Tarefas'
import filtroReducer from './reducers/Filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
