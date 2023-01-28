import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => (
    <>
        <p className={css.statVariant}>
            Good: <span>{good}</span>
        </p>
        <p className={css.statVariant}>
            Neutral: <span>{neutral}</span>
        </p>
        <p className={css.statVariant}>
            Bad: <span>{bad}</span>
        </p>
        <p className={css.statVariant}>
            Total: <span>{total}</span>
        </p>
        <p className={css.statVariant}>
            Positive feedback:{' '}
            <span
                style={{
                    color: positivePercentage > 0 ? 'green' : 'red',
                }}
            >
                {positivePercentage}%
            </span>
        </p>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
