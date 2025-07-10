import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider'
import { CopilotKit } from "@copilotkit/react-core"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CopilotKit runtimeUrl="http://localhost:4000/copilotkit">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CopilotKit>
  </React.StrictMode>,
)
