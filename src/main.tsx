import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CopilotKit } from "@copilotkit/react-core";

import './index.css'
import App from './App.tsx'
import "@copilotkit/react-ui/styles.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <CopilotKit
        runtimeUrl="http://localhost:4000/copilotkit"
        agent='health_buddy_agent'
        showDevConsole={true}
      >
        <App />
      </CopilotKit>
    
  </StrictMode>,
)
