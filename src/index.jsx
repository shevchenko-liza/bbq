import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom"

import App from './App'

import './index.scss'

const MOUNT_POINT = document.getElementById('root')

try {
  if (!MOUNT_POINT) {
    throw new Error('#root mount point not found')
  }

  const root = ReactDOM.createRoot(MOUNT_POINT)

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
} catch (error) {
  console.error(error.message);
}
