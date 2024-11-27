import { useState, useEffect } from 'react';
import { fetchTimetable } from '../util/util';

const useTimetable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTimetable = async () => {
      try {
        const data = await fetchTimetable();
        setTimetableData(data);
      } catch (err) {
        setError('Failed to fetch timetable.');
      }
    };

    loadTimetable();
  }, []);

  return { timetableData, error };
};

export default useTimetable;
