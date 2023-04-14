import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import { Course } from '../../types/Course';
import './CourseCard.scss';

type Props = {
  course: Course,
};

export const CourseCard: React.FC<Props> = ({ course }) => {
  const {
    id, title, duration, age_of_pupils, price,
  } = course;

  return (
    <Card
      className="course-card"
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            height: '65px',
          }}
        >
          {title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`Для дітей віком ${age_of_pupils} років`}
        </Typography>

        <Typography variant="body2">
          {`Тривалість в місяціях: ${duration}`}
        </Typography>

        <div className="course-card__row">
          <Typography variant="body2">
            Вартість за курс:
          </Typography>

          <Typography color="text.secondary">
            {`${price.slice(0, -3)} грн`}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        {/* <Button
          className="course-card__button"
          size="small"
        >
          <Link
            to={`../courses/${id}`}
            className="course-card__button-link"
          >
            Детальніше
          </Link>
        </Button> */}
        <Link
          to={`../courses/${id}`}
          className="course-card__button-link"
        >
          Детальніше
        </Link>
      </CardActions>
    </Card>
  );
};
