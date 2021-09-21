import PropTypes from 'prop-types';
import s from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);
  return (
    <div className={s.button__container}>
      {buttons.map(button => (
        <button
          className={s.button}
          type="button"
          onClick={() => {
            onLeaveFeedback(button);
          }}
          key={button}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
