import React from "react";
import { Activity } from "lucide-react";

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
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <Activity className="text-blue-500 mr-3" size={24} />
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Possible Causes:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {possibleCauses.map((cause, index) => (
            <li key={index}>{cause}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">When to see a doctor:</h3>
        <p className="text-gray-600 bg-amber-100 border-l-4 border-amber-500 p-3 rounded-md">
          {whenToSeeADoctor}
        </p>
      </div>
    </div>
  );
};

export default HealthRecommendationCard;
