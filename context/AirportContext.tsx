/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';

type AirportObjectType = {
  departure: { iata_code: string; city: string };
  arrival: { iata_code: string; city: string };
};

interface AirportContextInterface {
  airportObj: AirportObjectType;
  setAirports: (obj: AirportObjectType) => void;
}

export const AirportContext = createContext<AirportContextInterface>({
  airportObj: {
    departure: { iata_code: 'ICN', city: 'Seoul/Incheon' },
    arrival: { iata_code: 'JFK', city: 'New York' },
  },
  setAirports: () => {},
});

interface AirportProviderProps {
  children: ReactNode;
}

export const AirportProvider: React.FC<AirportProviderProps> = ({ children }) => {
  const [airportObj, setAirportObj] = useState<AirportObjectType>({
    departure: { iata_code: 'ICN', city: 'Seoul/Incheon' },
    arrival: { iata_code: 'JFK', city: 'New York' },
  });

  const setAirports = (obj: AirportObjectType) => {
    setAirportObj(obj);
  };

  return (
    <AirportContext.Provider value={{ setAirports, airportObj }}>
      {children}
    </AirportContext.Provider>
  );
};
