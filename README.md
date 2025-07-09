# Health Buddy

Health Buddy is an AI-powered health assistant that helps users understand their symptoms and provides them with relevant information and recommendations.

## Features

*   **Symptom Analysis:** Users can describe their symptoms in natural language.
*   **AI-Powered Recommendations:** The application uses an AI agent to analyze the symptoms and provide information about possible causes and when to see a doctor.
*   **Rich UI Components:** The agent presents information in a clear and organized manner using custom UI components.
*   **Modern and Responsive UI:** The user interface is built with React, TypeScript, and Tailwind CSS, providing a clean and modern experience on all devices.

## Getting Started

### Prerequisites

*   Node.js (v18 or later)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/healthbuddy-web.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd healthbuddy-web
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port specified in the console).

## How It Works

Health Buddy uses the **CopilotKit** framework to create an AI-powered chatbot. When a user enters their symptoms, the AI agent analyzes the input and uses a custom tool called `displayHealthRecommendation` to render a `HealthRecommendationCard` component with the relevant information.

This approach creates a more "agentic" experience, where the AI is not just providing text-based responses but is actively manipulating the UI to present information in a more effective and user-friendly way.
