import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import Safe from '../common/Safe';
import data from '../../data/airports.json';
import { View, TouchableOpacity } from 'react-native';
import Text from '../common/Text';

export default function Airport() {
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
        {countryList.map(({ id, country }) => (
          <View key={id}>
            <CountryButton onPress={() => toggleAirportList(country)}>
              <Text
                props={{ text: country, size: 'L', weight: 'semiBold', color: 'black' }}
              />
            </CountryButton>
            {currentCountry === country && (
              <AirportList
                data={airportList}
                renderItem={({ item }: { item: any }) => (
                  <View>
                    <Text
                      props={{
                        text: item.iata_code,
                        size: 'L',
                        weight: 'regular',
                        color: 'black',
                      }}
                    />
                  </View>
                )}
                keyExtractor={(item: any) => item.objectID}
              />
            )}
          </View>
        ))}
      </Safe>
    </AirportBox>
  );
}
const AirportBox = styled.View`
  flex: 1;
  padding: 0 16px;
`;
const CountryButton = styled.TouchableOpacity``;
const AirportList = styled.FlatList``;
const AirportButton = styled.TouchableOpacity``;
