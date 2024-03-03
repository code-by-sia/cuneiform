import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebar: {
    open: sessionStorage.getItem('cuneiform.sidebar') !== 'closed',
  },
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open
      sessionStorage.setItem(
        'cuneiform.sidebar',
        state.sidebar.open ? 'open' : 'closed'
      )
    },
  },
})

export const { toggleSidebar } = settingSlice.actions
