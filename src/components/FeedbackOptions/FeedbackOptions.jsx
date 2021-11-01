import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((name) => {
            return <button key={name} type="button" className={s.button} onClick={(e) => onLeaveFeedback(name)}>
                {name}

            </button>
        })}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;