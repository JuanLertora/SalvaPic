import React from 'react';
import { View } from 'react-native';
import StyledText from '../../StyledText/StyledText';

const parserThousand = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoriesStats = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText fontWeight='bold' allign='center'>{parserThousand(props.stargazersCount)}</StyledText>
        <StyledText allign='center'>Stars</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' allign='center'>{parserThousand(props.forksCount)}</StyledText>
        <StyledText allign='center'>Forks</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' allign='center'>{parserThousand(props.reviewCount)}</StyledText>
        <StyledText allign='center'>Review</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' allign='center'>{parserThousand(props.ratingAverage)}</StyledText>
        <StyledText allign='center'>Rating</StyledText>
      </View>
    </View>
  )
}

export default RepositoriesStats
