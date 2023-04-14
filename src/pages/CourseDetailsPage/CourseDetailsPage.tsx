import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseDetails } from '../../helpers/api';
import { CourseDetailsType } from '../../types/CourseDetailsType';
import { ErrorContext } from '../../helpers/ErrorContext';
import { ErrorText } from '../../types/ErrorText';
import { Loader } from '../../components/Loader/Loader';
import { CourseDetails } from '../../components/CourseDetails';

export const CourseDetailsPage = () => {
  const { courseId = '' } = useParams();
  const [courseDetails, setCourseDetails] = useState<CourseDetailsType | null>(null);
  const [isLoad, setIsLoad] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const { setError } = useContext(ErrorContext);

  const loadCourseDetails = async () => {
    try {
      setIsLoad(true);
      const details = await getCourseDetails(courseId);

      setCourseDetails(details);
    } catch {
      setError(ErrorText.LOAD_CourseDetails);
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    if (isMounted) {
      loadCourseDetails();
    }
  }, [courseId]);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    isLoad
      ? <Loader />
      : <CourseDetails details={courseDetails} />
  );
};
