import React from 'react';
import { MapPin } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const TOWN_PATHS: Record<string, string> = {
  'Harlow': '/electrician-harlow',
  'Chelmsford': '/electrician-chelmsford',
  'Basildon': '/electrician-basildon',
  'Brentwood': '/electrician-brentwood',
  'East London': '/electrician-east-london',
  'Southend': '/electrician-southend',
  'Grays': '/electrician-grays',
  'Shoeburyness': '/electrician-shoeburyness',
  'Rayleigh': '/electrician-rayleigh',
  'Braintree': '/electrician-braintree',
  'Tendring': '/electrician-tendring',
  'Colchester': '/electrician-colchester',
  'Tilbury': '/electrician-tilbury',
};

// Real Essex geography — each town's 2-3 closest neighbours from our set of
// covered towns, not an arbitrary/random selection.
const TOWN_ADJACENCY: Record<string, string[]> = {
  'Harlow': ['Chelmsford', 'Brentwood', 'Braintree'],
  'Chelmsford': ['Harlow', 'Braintree', 'Basildon'],
  'Basildon': ['Brentwood', 'Southend', 'Grays'],
  'Brentwood': ['Harlow', 'Basildon', 'East London'],
  'East London': ['Brentwood', 'Grays', 'Tilbury'],
  'Southend': ['Rayleigh', 'Shoeburyness', 'Basildon'],
  'Grays': ['Tilbury', 'East London', 'Basildon'],
  'Shoeburyness': ['Southend', 'Rayleigh'],
  'Rayleigh': ['Southend', 'Shoeburyness', 'Basildon'],
  'Braintree': ['Chelmsford', 'Colchester', 'Harlow'],
  'Tendring': ['Colchester', 'Braintree'],
  'Colchester': ['Tendring', 'Braintree', 'Chelmsford'],
  'Tilbury': ['Grays', 'East London', 'Basildon'],
};

interface NearbyAreasProps {
  /** Town name as it appears as a key in TOWN_ADJACENCY, e.g. "Grays" */
  current: string;
}

const NearbyAreas: React.FC<NearbyAreasProps> = ({ current }) => {
  const neighbours = TOWN_ADJACENCY[current] ?? [];
  if (neighbours.length === 0) return null;

  return (
    <div className="p-6 bg-brand-light rounded-2xl border border-gray-100 mb-10">
      <h3 className="font-bold text-brand-deep mb-4">Nearby Areas We Cover</h3>
      <div className="flex flex-wrap gap-3">
        {neighbours.map((town) => {
          const path = TOWN_PATHS[town];
          if (!path) return null;
          return (
            <RouterLink
              key={town}
              to={path}
              className="flex items-center gap-2 text-sm font-semibold text-brand-electric bg-white hover:bg-brand-electric hover:text-white px-4 py-2 rounded-full transition-colors border border-gray-100"
            >
              <MapPin size={14} /> {town}
            </RouterLink>
          );
        })}
        <RouterLink
          to="/areas"
          className="text-sm font-semibold text-white bg-brand-orange hover:bg-orange-600 px-4 py-2 rounded-full transition-colors"
        >
          See All Areas
        </RouterLink>
      </div>
    </div>
  );
};

export default NearbyAreas;
