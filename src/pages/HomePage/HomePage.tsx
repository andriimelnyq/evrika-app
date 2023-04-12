import React, { useContext } from 'react';
import { AboutUs } from '../../components/AboutUs';
import { Banner } from '../../components/Banner';
import { CoursesBlock } from '../../components/CoursesBlock';
import { CoursesContext } from '../../helpers/CoursesContext';

export const HomePage = () => {
  const { coursesFromServer } = useContext(CoursesContext);

  return (
    <>
      <Banner />
      <AboutUs />
      {coursesFromServer[0] && (<CoursesBlock />)}
    </>
  );
};
