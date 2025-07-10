import React from "react";
import { Activity, AlertTriangle, List, Clock } from "lucide-react";

interface HealthRecommendationCardProps {
  title: string;
  description: string;
  possibleCauses: string[];
  whenToSeeADoctor: string;
}

const HealthRecommendationCard: React.FC<HealthRecommendationCardProps> = ({
  title,
  description,
  possibleCauses,
  whenToSeeADoctor,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 
                max-w-md w-full mx-auto transition-all duration-300 animate-fade-in hover:shadow-xl">
      <div className="flex items-center mb-6 pb-3 border-b border-gray-100 dark:border-gray-700">
        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full mr-4">
          <Activity className="text-primary-500 dark:text-primary-300" size={28} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-display">{title}</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <div className="mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
        <div className="flex items-center mb-3">
          <List className="text-secondary-500 dark:text-secondary-400 mr-2" size={20} />
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 text-lg">Possible Causes</h3>
        </div>
        <ul className="list-none text-gray-600 dark:text-gray-300 space-y-2 ml-2">
          {possibleCauses.map((cause, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 dark:bg-secondary-400 mt-2 mr-2"></span>
              <span>{cause}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center mb-3">
          <AlertTriangle className="text-accent-500 dark:text-accent-400 mr-2" size={20} />
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 text-lg">When to see a doctor</h3>
        </div>
        <div className="bg-accent-50 dark:bg-accent-900/30 border-l-4 border-accent-500 dark:border-accent-600 
                     p-4 rounded-md transition-all duration-200 hover:border-l-6">
          <div className="flex items-start">
            <Clock className="text-accent-600 dark:text-accent-400 mr-2 mt-1 flex-shrink-0" size={16} />
            <p className="text-gray-700 dark:text-gray-300">{whenToSeeADoctor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRecommendationCard;
