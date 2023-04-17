import React, { useContext, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SelectedCoursesContext, TokenContext } from '../../helpers/LocaleStorageContext';
import { ErrorContext } from '../../helpers/ErrorContext';
import { CourseCard } from '../../components/CourseCard';
import { Course } from '../../types/Course';
import { postOrder } from '../../helpers/api';
import { ErrorText } from '../../types/ErrorText';
import { Loader } from '../../components/Loader/Loader';
import { NoResults } from '../../components/NoResults';
import { NotificationContext } from '../../helpers/NotificationContext';
import './SelectedPage.scss';

export const SelectedPage = () => {
  const { selectedCourses, setSelectedCourses } = useContext(SelectedCoursesContext);
  const [isLoad, setIsLoad] = useState(false);
  const { tokens } = useContext(TokenContext);
  const { setError } = useContext(ErrorContext);
  const { setNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const amount = selectedCourses.reduce((acc, course) => +course.price + acc, 0);

  const handleDelete = (course: Course) => {
    if (course) {
      setSelectedCourses(
        selectedCourses.filter(selectedCourse => (
          selectedCourse.id !== course.id
        )),
      );
    }
  };

  const handleOrder = async () => {
    if (tokens.access) {
      try {
        setIsLoad(true);
        const data = selectedCourses.map(course => (
          course.id
        ));

        await postOrder(data, tokens.access);
        setNotification('Дякуємо за довіру! Невдовзі ми з Вами зв`яжемось!');
        setSelectedCourses([]);
        navigate('/home');
      } catch {
        setError(ErrorText.POST_ORDER);
      } finally {
        setIsLoad(false);
      }
    } else {
      navigate('/auth');
    }
  };

  return (
    isLoad
      ? (<Loader />)
      : (
        <section
          className="selected-page"
        >
          <div className="container">
            {selectedCourses.length === 0
              ? (
                <NoResults
                  text="Ви ще не обрали жодного курсу"
                />
              )
              : (
                <>
                  <Typography
                    variant="h4"
                    sx={{ margin: '30px 0' }}
                  >
                    Обрані курси
                  </Typography>
                  <div className="selected-page__content">
                    <div
                      className="selected-page__items"
                    >
                      {selectedCourses.map(course => (
                        <CourseCard
                          key={course.description}
                          course={course}
                          handleDelete={handleDelete}
                        />
                      ))}
                    </div>

                    <div className="selected-page__info">
                      <Typography
                        variant="h5"
                      >
                        Сума
                      </Typography>

                      <Typography
                        variant="h4"
                        className="selected-page__amount"
                      >
                        {`${amount} грн`}
                      </Typography>

                      <Button
                        variant="contained"
                        className="button"
                        sx={{
                          backgroundColor: '#F48C06',
                        }}
                        onClick={handleOrder}
                      >
                        Придбати
                      </Button>
                    </div>
                  </div>
                </>
              )}
          </div>
        </section>
      )
  );
};
