import React, {
  useMemo, useState, useEffect, useContext,
} from 'react';
import { Course } from '../types/Course';
import { ErrorContext } from './ErrorContext';
import { ErrorText } from '../types/ErrorText';
import { getCourses } from './api';

interface CoursesContextType {
  coursesFromServer: Course[],
  setCoursesFromServer: (courses: Course[]) => void,
  isLoad: boolean,
  setIsLoad: (isLoad: boolean) => void,
}

export const CoursesContext = React.createContext<CoursesContextType>({
  coursesFromServer: [],
  setCoursesFromServer: () => {},
  isLoad: false,
  setIsLoad: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CoursesProvider = ({ children }: Props) => {
  const [coursesFromServer, setCoursesFromServer] = useState<Course[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const { setError } = useContext(ErrorContext);

  const contextValues = useMemo(() => (
    {
      coursesFromServer,
      setCoursesFromServer,
      isLoad,
      setIsLoad,
    }
  ), [coursesFromServer, isLoad]);

  const loadCoursesFromServer = async () => {
    try {
      setIsLoad(true);
      const courses = await getCourses();

      setCoursesFromServer(courses);
    } catch {
      setError(ErrorText.LOAD_Courses);
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    loadCoursesFromServer();
  }, []);

  return (
    <CoursesContext.Provider value={contextValues}>
      {children}
    </CoursesContext.Provider>
  );
};
