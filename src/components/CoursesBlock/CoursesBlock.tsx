import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CoursesContext } from '../../helpers/CoursesContext';
import { CourseCard } from '../CourseCard';
import './CoursesBlock.scss';

export const CoursesBlock = () => {
  const { coursesFromServer } = useContext(CoursesContext);
  const courses = coursesFromServer.slice(0, 4);

  return (
    <section
      className="courses-block"
    >
      <div className="container">
        <div className="courses-block__content">
          <div className="courses-block__header">
            <Typography
              variant="h4"
            >
              Оберіть курс
            </Typography>

            <Link
              to="courses"
              className="link link--onpage"
            >
              Усі курси
            </Link>
          </div>

          <div className="courses-block__main">
            {courses.map(course => (
              <CourseCard
                course={course}
                key={course.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
