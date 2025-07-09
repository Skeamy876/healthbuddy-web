import "./App.css";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl">
        <CopilotKit
          runtimeUrl="http://localhost:4000/copilotkit"
          showDevConsole={true}
        >
          <CopilotChat
            instructions={
              "You are Health Buddy, an AI assistant. When a user provides symptoms, analyze them and present your findings using the `displayHealthRecommendation` tool. Be concise and clear in the information you provide."
            }
            labels={{
              title: "Health Buddy",
              initial: "Hi! 👋 I'm Health Buddy. How are you feeling today?",
            }}
          />
        </CopilotKit>
      </div>
    </Layout>
  );
}

export default App;
