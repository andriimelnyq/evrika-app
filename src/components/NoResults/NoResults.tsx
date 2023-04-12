import React from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';
import { ErrorText } from '../../types/ErrorText';
import './NoResults.scss';

type Props = {
  text: string | ErrorText,
  listModificator?: boolean,
};

export const NoResults: React.FC<Props> = ({ text, listModificator }) => {
  return (
    <Typography
      variant="h6"
      className={classNames('no-results', {
        'no-results--list': listModificator,
      })}
    >
      {text}
    </Typography>
  );
};
