import { FeedbackWrapper, ButtonsContainer, Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapper>
      <ButtonsContainer>
        {options.map(label => (
          <Button
            key={label}
            type="button"
            onClick={() => onLeaveFeedback(label)}
          >
            {label}
          </Button>
        ))}
      </ButtonsContainer>
    </FeedbackWrapper>
  );
};
