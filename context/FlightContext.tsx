/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';
import { getFormatedDate } from 'react-native-modern-datepicker';

type FlightObjectType = {
  departure: { iata_code: string; city: string; date: string | null };
  arrival: { iata_code: string; city: string; date: string | null };
};

interface FlightContextInterface {
  flightObj: FlightObjectType | any;
  setFlight: (obj: FlightObjectType) => void;
}

export const FlightContext = createContext<FlightContextInterface>({
  flightObj: {
    departure: {},
    arrival: {},
  },
  setFlight: () => {},
});

interface FlightProviderProps {
  children: ReactNode;
}

export const FlightProvider: React.FC<FlightProviderProps> = ({ children }) => {
  const [flightObj, setFlightObj] = useState<FlightObjectType>({
    departure: {
      iata_code: 'ICN',
      city: 'Seoul/Incheon',
      date: getFormatedDate(new Date(), 'YYYY/MM/DD') || '-',
    },
    arrival: {
      iata_code: 'JFK',
      city: 'New York',
      date: getFormatedDate(new Date(), 'YYYY/MM/DD') || '-',
    },
  });

  const setFlight = (obj: FlightObjectType) => {
    setFlightObj(obj);
  };

  return (
    <FlightContext.Provider value={{ setFlight, flightObj }}>
      {children}
    </FlightContext.Provider>
  );
};
