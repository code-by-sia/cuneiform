import { AppDatabase } from '@/services/database'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import listOf from './list'

export const dataImported = createAsyncThunk(
  'data/import',
  async (data) => await AppDatabase.importData(data)
)

const createFetchAction = (name) =>
  createAsyncThunk(
    `data/fetchAll` + name,
    async () => await AppDatabase.getAll(name.toLowerCase())
  )

const createUpdateAction = (name) =>
  createAsyncThunk(
    `data/update` + name,
    async (payload) => await AppDatabase.put(name.toLowerCase(), payload)
  )

const createInsertAction = (name) =>
  createAsyncThunk(
    `data/insert` + name,
    async (payload) => await AppDatabase.add(name.toLowerCase(), payload)
  )

const createDeleteAction = (name) =>
  createAsyncThunk(
    `data/delete` + name,
    async (key) => await AppDatabase.delete(name.toLowerCase(), key)
  )

export const filesFetched = createFetchAction('Taxonomy')

export const initializeData = createAsyncThunk(
  'data/initialize',
  async (_, { dispatch }) => {
    await dispatch(filesFetched())
  }
)

export const fileCreated = createInsertAction('Taxonomy')
export const fileUpdated = createUpdateAction('Taxonomy')
export const fileDeleted = createDeleteAction('Taxonomy')

const initialState = {
  taxonomy: [],
}

export const dataSlice = createSlice({
  initialState,
  name: 'data',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(dataImported.fulfilled, (state, action) => {
      state.taxonomy = action.payload
    })

    builder.addCase(filesFetched.fulfilled, (state, action) => {
      state.taxonomy = action.payload
    })
    builder.addCase(fileCreated.fulfilled, (state, action) => {
      state.taxonomy.push(action.payload)
    })
    builder.addCase(fileDeleted.fulfilled, (state, action) => {
      state.taxonomy = listOf(state.taxonomy).delete(action.payload)
    })
    builder.addCase(fileUpdated.fulfilled, (state, action) => {
      state.taxonomy = listOf(state.taxonomy).upsert(action.payload)
    })
  },
})
