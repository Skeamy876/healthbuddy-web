import React from 'react';
import { CopilotChat } from "@copilotkit/react-ui";
import { Layout } from './components/Layout';
import { useCopilotAction } from "@copilotkit/react-core";
import HealthRecommendationCard from './components/HealthRecommendationCard';

interface HealthRecommendation {
  readonly title: string;
  readonly description: string;
  readonly possibleCauses: string[];
  readonly whenToSeeADoctor: string;
}

const App: React.FC = () => {
  const [recommendation, setRecommendation] = React.useState<HealthRecommendation | null>(null);

  useCopilotAction({
    name: "displayHealthRecommendation",
    description: "Display health recommendations based on symptoms",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title or condition name",
        required: true,
      },
      {
        name: "description", 
        type: "string",
        description: "Description of the condition",
        required: true,
      },
      {
        name: "possibleCauses",
        type: "object",
        description: "Array of possible causes",
        required: true,
      },
      {
        name: "whenToSeeADoctor",
        type: "string", 
        description: "When to see a doctor",
        required: true,
      },
    ],
    handler: ({ title, description, possibleCauses, whenToSeeADoctor }) => {
      const newRecommendation: HealthRecommendation = {
        title,
        description,
        possibleCauses: Array.isArray(possibleCauses) ? possibleCauses : [possibleCauses],
        whenToSeeADoctor,
      };
      setRecommendation(newRecommendation);
    },
  });

  return (
    <Layout>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300">
              <CopilotChat 
                instructions="You are Health Buddy, an AI assistant. When a user provides symptoms, analyze them and present your findings using the `displayHealthRecommendation` tool. Be concise and clear in the information you provide. Make sure to ask follow-up questions to better understand the user's condition."
                labels={{
                  title: "Health Buddy",
                  initial: "Hi! 👋 I'm Health Buddy. How are you feeling today?",
                  placeholder: "Describe your symptoms here...",
                }}
                className="h-96"
              />
            </div>
              
              {recommendation && (
                <div className="mt-6 animate-fade-in">
                  <HealthRecommendationCard 
                    title={recommendation.title}
                    description={recommendation.description}
                    possibleCauses={recommendation.possibleCauses}
                    whenToSeeADoctor={recommendation.whenToSeeADoctor}
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">How to use Health Buddy</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Describe your symptoms in detail to get the most accurate analysis. The more information you provide, the better!
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Mention when symptoms started
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Include severity and frequency
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Note any relevant medical history
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Important Disclaimer</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This tool provides general health information only and is not a substitute for professional medical advice. 
                  Always consult with a healthcare provider for proper diagnosis and treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default App;
