import './App.css'
import { CopilotKit } from "@copilotkit/react-core"; 
import { CopilotChat } from "@copilotkit/react-ui";



function App() {

  return (
    <>
      <CopilotKit
        publicApiKey={import.meta.env.VITE_COPILOTKIT_API_KEY}
        agent='health_buddy_agent'
        showDevConsole={false}
      >
        <CopilotChat
      
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Your Assistant",
          initial: "Hi! 👋 How can I assist you today?",
        }}
      />
      </CopilotKit>

    </>
  )
}

export default App
