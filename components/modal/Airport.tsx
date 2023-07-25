import React, { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import Safe from '../common/Safe';
import data from '../../data/airports.json';
import { View, ScrollView, useColorScheme } from 'react-native';
import Text from '../common/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { ModalContext } from '../../context/ModalContext';
import { FlightContext } from '../../context/FlightContext';

export default function Airport() {
  const colorScheme = useColorScheme();
  const { modalProps, closeModal } = useContext(ModalContext);
  const { flightObj, setFlight } = useContext(FlightContext);
  const [currentCountry, setCurrentCountry] = useState('');
  const [airportList, setAirportList] = useState<any[]>([]);

  const countryList = [
    { id: 0, country: 'United States' },
    { id: 1, country: 'China' },
    { id: 2, country: 'United Kingdom' },
    { id: 3, country: 'Japan' },
    { id: 4, country: 'Australia' },
    { id: 5, country: 'Russia' },
    { id: 6, country: 'South Korea' },
  ];

  const toggleAirportList = (country: string) => {
    currentCountry === country ? setCurrentCountry('') : setCurrentCountry(country);
  };

  const selectAirport = (data: { iata_code: string; city: string }) => {
    const newObj = { ...flightObj[modalProps], ...data };
    setFlight({ ...flightObj, newObj });
    closeModal();
  };

  useEffect(() => {
    const filteredAirport = data.filter((v) => {
      if (v.country === currentCountry) {
        return { name: v.name, iata_code: v.iata_code };
      }
    });
    setAirportList(filteredAirport);
  }, [currentCountry]);

  return (
    <AirportBox>
      <Safe>
        <ScrollView>
          {countryList.map(({ id, country }) => (
            <View key={id} style={{ paddingHorizontal: 16 }}>
              <CountryButton onPress={() => toggleAirportList(country)}>
                <>
                  <Text
                    props={{
                      text: country,
                      size: 'L',
                      weight: 'semiBold',
                      color: 'black',
                    }}
                  />

                  <MaterialIcons
                    name={`keyboard-arrow-${currentCountry === country ? 'up' : 'down'}`}
                    size={24}
                    color={colorScheme === 'dark' ? 'white' : 'black'}
                  />
                </>
              </CountryButton>
              {currentCountry === country && (
                <AirportScroll>
                  <AirportList>
                    {airportList.map((v) => (
                      <AirportButton
                        key={v.iata_code}
                        onPress={() =>
                          selectAirport({ iata_code: v.iata_code, city: v.city })
                        }
                      >
                        <Text
                          props={{
                            text: v.iata_code,
                            size: 'L',
                            weight: 'medium',
                            color: 'black',
                          }}
                        />
                        <Text
                          props={{
                            text: v.city,
                            size: 'M',
                            weight: 'regular',
                            color: 'black',
                          }}
                        />
                      </AirportButton>
                    ))}
                  </AirportList>
                </AirportScroll>
              )}
            </View>
          ))}
        </ScrollView>
      </Safe>
    </AirportBox>
  );
}
const AirportBox = styled.View`
  flex: 1;
  /* padding: 0 16px; */
`;
const CountryButton = styled.TouchableHighlight`
  padding: 16px 0 8px 0;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.grey};
  flex-direction: row;
  justify-content: space-between;
`;
const AirportScroll = styled.ScrollView``;
const AirportList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
  width: 100%;
  margin-top: 12px;
`;
const AirportButton = styled.TouchableOpacity`
  width: 31.8%;
  padding: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.color.pale_grey};
  border-radius: 8px;
`;
