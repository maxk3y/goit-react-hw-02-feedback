import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  StatisticsWrapper,
  ReviewContainer,
  ReviewItem,
} from './Statistics.styled';

export class Statistics extends Component {
  render() {
    return (
      <StatisticsWrapper>
        <ReviewContainer>
          <ReviewItem>Good: {this.props.goodReview}</ReviewItem>
          <ReviewItem>Neutral: {this.props.neutralReview}</ReviewItem>
          <ReviewItem>Bad: {this.props.badReview}</ReviewItem>
          <ReviewItem>Total: {this.props.total}</ReviewItem>
          <ReviewItem>
            Positive feedback: {this.props.positivePercentage}%
          </ReviewItem>
        </ReviewContainer>
      </StatisticsWrapper>
    );
  }
}

Statistics.propTypes = {
  goodReview: PropTypes.number.isRequired,
  neutralReview: PropTypes.number.isRequired,
  badReview: PropTypes.number.isRequired,
};
