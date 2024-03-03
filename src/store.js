import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dataSlice, initializeData } from '@/services/data-service'
import { settingSlice } from '@/services/setting'

const rootReducer = combineReducers({
  [dataSlice.reducerPath]: dataSlice.reducer,
  [settingSlice.reducerPath]: settingSlice.reducer,
})

export const store = configureStore({ reducer: rootReducer })

setupListeners(store.dispatch)

store.dispatch(initializeData())
