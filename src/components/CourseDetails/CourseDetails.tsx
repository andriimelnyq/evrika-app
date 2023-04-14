import React from 'react';
import {
  Breadcrumbs, Button, Link, Typography,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CourseDetailsType } from '../../types/CourseDetailsType';
import './CourseDetails.scss';

type Props = {
  details: CourseDetailsType | null,
};

export const CourseDetails: React.FC<Props> = ({ details }) => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/#/home">
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

  return (
    <section
      className="course-details"
    >
      <div className="container">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ marginTop: '30px' }}
        >
          {breadcrumbs}
        </Breadcrumbs>

        <Typography
          variant="h4"
          sx={{ margin: '30px 0' }}
        >
          {details?.title}
        </Typography>

        <div className="course-details__content">
          <div className="course-details__img">
            <img src="https://drive.google.com/uc?id=1Br7cD3skh37qo8-Bf36Gyi6jqvYahWqJ" alt="course img" />
          </div>

          <div className="course-details__main">
            <Typography
              variant="body2"
              className="course-details__description"
            >
              {details?.description}
            </Typography>

            <div className="course-details__items">
              <div className="course-details__rows">
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
                    {details?.school_subject === true ? 'Шкільний предмет' : 'Нешкільний предмет'}
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
                  color="primary"
                  className="button"
                  sx={{
                    width: '100%',
                    backgroundColor: '#F48C06',
                  }}
                >
                  Додати в обрані
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
