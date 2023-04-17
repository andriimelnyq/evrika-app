import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Breadcrumbs, Button, FormControl, InputLabel, Link, MenuItem,
  Pagination, Select, SelectChangeEvent, TextField, Typography,
} from '@mui/material';
import { debounce } from 'lodash';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Course } from '../../types/Course';
import { ErrorText } from '../../types/ErrorText';
import { getSearchWith } from '../../helpers/SearchHelper';
import { CoursesContext } from '../../helpers/CoursesContext';
import { ErrorContext } from '../../helpers/ErrorContext';
import { CourseCard } from '../CourseCard';
import { FilterSlider } from '../FilterSlider';
import { getCoursesBySchool } from '../../helpers/api';
import { Loader } from '../Loader/Loader';
import { NoResults } from '../NoResults';
import './CoursesList.scss';

export const CoursesList = () => {
  const { coursesFromServer } = useContext(CoursesContext);
  const { setError } = useContext(ErrorContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const minDuration = searchParams.get('minDuration') || 1;
  const maxDuration = searchParams.get('maxDuration') || 12;
  const [duration, setDuration] = useState<number[]>([+minDuration, +maxDuration]);

  const minAge = searchParams.get('minAge') || 7;
  const maxAge = searchParams.get('maxAge') || 18;
  const [age, setAge] = useState<number[]>([+minAge, +maxAge]);

  const isSchool = searchParams.get('isSchool') || '';
  const [isSchoolSubject, setIsSchoolSubject] = useState(isSchool);

  const page = searchParams.get('page') || '1';
  const query = searchParams.get('query') || '';
  const [queryValue, setQueryValue] = useState(query || '');

  const visibleCourses = filteredCourses.filter(course => (
    +course.duration >= +minDuration
      && +course.duration <= +maxDuration
      && +course.age_of_pupils >= +minAge
      && +course.age_of_pupils <= +maxAge
      && course.title.replace(/\s+/g, '').trim().toLocaleLowerCase().includes(query)
  ));

  const countPagination = Math.ceil(visibleCourses.length / 3);
  const coursesOnPage = visibleCourses
    .slice(3 * (+page - 1), 3 * (+page - 1) + 3);

  const applyQuery = useCallback(
    debounce(setSearchParams, 1000),
    [],
  );

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(e.target.value);
    applyQuery(
      getSearchWith(searchParams,
        {
          query: e.target.value.replace(/\s+/g, '')
            .trim().toLocaleLowerCase() || null,
          page: '1',
        }),
    );
  };

  const handleChangeSchoolSub = (event: SelectChangeEvent) => {
    setIsSchoolSubject(event.target.value as string);
  };

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams(
      getSearchWith(searchParams, {
        page: `${value}`,
      }),
    );
  };

  const handleOnChangeSearchParams = () => {
    setSearchParams(
      getSearchWith(searchParams, {
        minDuration: `${duration[0]}` || null,
        maxDuration: `${duration[1]}` || null,
        minAge: `${age[0]}` || null,
        maxAge: `${age[1]}` || null,
        isSchool: (isSchoolSubject !== 'all' && isSchoolSubject !== '') ? isSchoolSubject : null,
        page: null,
      }),
    );
  };

  const handleResetSearchParams = () => (
    setSearchParams(
      getSearchWith(searchParams, {
        minDuration: null,
        maxDuration: null,
        minAge: null,
        maxAge: null,
        isSchool: null,
        page: null,
        query: null,
      }),
    )
  );

  const loadFilteredCourses = async () => {
    setIsLoad(true);
    try {
      if (isSchool) {
        const courses = await getCoursesBySchool(isSchool);

        setFilteredCourses(courses);
      } else {
        setFilteredCourses(coursesFromServer);
      }
    } catch {
      setError(ErrorText.FILTER);
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    if (isMounted) {
      loadFilteredCourses();
    }
  }, [isSchool]);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

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
    <Typography key="2" color="text.primary">
      Курси
    </Typography>,
  ];

  return (
    isLoad
      ? <Loader />
      : (
        <section
          className="courses-list"
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
              Оберіть курс
            </Typography>
            <div className="courses-list__content">
              <div className="courses-list__filter">
                <TextField
                  label="Пошук за назвою"
                  variant="outlined"
                  className="text-field"
                  value={queryValue}
                  onChange={handleChangeInput}
                />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Тип курсу</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={isSchoolSubject}
                    className="select"
                    label="Тип курсу"
                    onChange={handleChangeSchoolSub}
                  >
                    <MenuItem value="all">Всі</MenuItem>
                    <MenuItem value="true">Шкільний курс</MenuItem>
                    <MenuItem value="false">Позашкільний курс</MenuItem>
                  </Select>
                </FormControl>

                <FilterSlider
                  values={duration}
                  setValues={setDuration}
                  minMax={[1, 12]}
                  title="Тривалість, місяці"
                />

                <FilterSlider
                  values={age}
                  setValues={setAge}
                  minMax={[7, 18]}
                  title="Вік, роки"
                />

                <Button
                  variant="contained"
                  color="primary"
                  className="button"
                  onClick={handleOnChangeSearchParams}
                >
                  Фільтрувати
                </Button>

                <Button
                  sx={{ borderRadius: '33px' }}
                  onClick={handleResetSearchParams}
                >
                  Скинути
                </Button>
              </div>

              <div className="courses-list__main-content">
                <div className="courses-list__items">
                  {coursesOnPage.map(course => (
                    <CourseCard
                      course={course}
                      key={course.title}
                    />
                  ))}

                  {coursesOnPage.length === 0 && (
                    <NoResults
                      text="Нічого не знайдено"
                      listModificator
                    />
                  )}
                </div>

                {visibleCourses.length > 3 && (
                  <Pagination
                    count={countPagination}
                    variant="outlined"
                    color="primary"
                    page={+page}
                    className="pagination"
                    onChange={handleChangePagination}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )
  );
};
