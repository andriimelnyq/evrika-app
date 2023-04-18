import React, { useContext } from 'react';
import {
  Breadcrumbs, Button, Link, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { CourseDetailsType } from '../../types/CourseDetailsType';
import { SelectedCoursesContext } from '../../helpers/LocaleStorageContext';
import { CoursesContext } from '../../helpers/CoursesContext';
import './CourseDetails.scss';

type Props = {
  details: CourseDetailsType | null,
};

export const CourseDetails: React.FC<Props> = ({ details }) => {
  const { selectedCourses, setSelectedCourses } = useContext(SelectedCoursesContext);
  const { coursesFromServer } = useContext(CoursesContext);
  const navigate = useNavigate();
  const isAlreadeAdded = selectedCourses.some(course => (
    course.id === details?.id
  ));

  const handleAddingToSelected = () => {
    if (details) {
      setSelectedCourses([
        ...selectedCourses,
        details,
      ]);
    }
  };

  const handleBackInHistory = () => navigate(-1);
  const handleClickNextCourse = () => {
    const max = coursesFromServer.length;
    const randomIndex = Math.floor(Math.random() * max);

    navigate(`/courses/${coursesFromServer[randomIndex].id}`);
  };

  const breadcrumbs1 = [
    <Link title="Головна" underline="hover" key="1" color="inherit" href="/#/home">
      <HomeOutlinedIcon
        color="inherit"
        sx={{
          marginTop: '5px',
          '&:hover': {
            transform: 'scale(1.2)',
          },
          transition: '0.2s',
        }}
      />
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/#/courses"
    >
      Курси
    </Link>,
    <Typography key="2" color="text.primary">
      {details?.title}
    </Typography>,
  ];

  const breadcrumbs2 = [
    <button
      key="1"
      type="button"
      title="Повернутись назад"
      className="breadcrumbs__button"
      onClick={handleBackInHistory}
    >
      <NavigateBeforeIcon />
      <Typography color="inherit">
        Назад
      </Typography>
    </button>,
    <button
      key="2"
      type="button"
      title="Перейти на інший курс"
      className="breadcrumbs__button"
      onClick={handleClickNextCourse}
    >
      <Typography color="inherit">
        Інший курс
      </Typography>
      <NavigateNextIcon />
    </button>,
  ];

  return (
    <section
      className="course-details"
    >
      <div className="container">
        <div className="breadcrumbs">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs1}
          </Breadcrumbs>

          <Breadcrumbs
            separator={<HorizontalRuleIcon sx={{ transform: 'rotate(90deg)' }} />}
            aria-label="breadcrumb"
          >
            {breadcrumbs2}
          </Breadcrumbs>
        </div>

        <Typography
          variant="h4"
          sx={{ margin: '30px 0' }}
        >
          {details?.title}
        </Typography>

        <div className="course-details__content">
          <div className="course-details__img">
            <img src={details?.image_url} alt="course img" />
          </div>

          <div className="course-details__main">
            <Typography
              variant="body2"
              className="course-details__description"
            >
              <Typography
                variant="h5"
                sx={{ textAlign: 'left', color: '#F48C06', marginBottom: '8px' }}
              >
                Опис курсу
              </Typography>
              {details?.description}
            </Typography>

            <div className="course-details__items">
              <div className="course-details__rows">
                <Typography
                  variant="h5"
                  sx={{ textAlign: 'left', color: '#F48C06' }}
                >
                  Характеристика
                </Typography>
                <div className="course-details__row">
                  <Typography variant="body2">
                    Тривалість, місяці
                  </Typography>

                  <Typography color="text.secondary">
                    {details?.duration}
                  </Typography>
                </div>

                <div className="course-details__row">
                  <Typography variant="body2">
                    Вік, роки
                  </Typography>

                  <Typography color="text.secondary">
                    {details?.age_of_pupils}
                  </Typography>
                </div>

                <div className="course-details__row">
                  <Typography variant="body2">
                    Вчитель
                  </Typography>

                  <Typography color="text.secondary">
                    {details?.teacher}
                  </Typography>
                </div>

                <div className="course-details__row">
                  <Typography variant="body2">
                    Тип
                  </Typography>

                  <Typography color="text.secondary">
                    {details?.school_subject === true ? 'Шкільний курс' : 'Позашкільний курс'}
                  </Typography>
                </div>

                <div className="course-details__row">
                  <Typography variant="body2">
                    Вартість за курс
                  </Typography>

                  <Typography color="text.secondary">
                    {`${details?.price.slice(0, -3)} грн`}
                  </Typography>
                </div>
              </div>

              <div className="course-details__control">
                <Button
                  variant="contained"
                  className="button"
                  onClick={handleAddingToSelected}
                  disabled={isAlreadeAdded}
                  sx={{
                    width: '100%',
                    backgroundColor: '#F48C06',
                  }}
                >
                  {isAlreadeAdded ? 'Додано' : 'Додати в обрані'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
