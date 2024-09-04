import { useState, useEffect } from 'react';
import moment from 'moment';

export const useDateRange = (initialDay = 'Today') => {
   const [day, setDay] = useState(initialDay);
   const [date, setDate] = useState([
      moment().startOf('day').format('yyyy-MM-dd'),
      moment().endOf('day').format('yyyy-MM-dd'),
   ]);

   useEffect(() => {
      if (day === 'Today') {
         setDate([moment().startOf('day').format('yyyy-MM-dd'), moment().endOf('day').format('yyyy-MM-dd')]);
      } else if (day === 'Yesterday') {
         setDate([
            moment().subtract(1, 'days').startOf('day').format('yyyy-MM-dd'),
            moment().subtract(1, 'days').endOf('day').format('yyyy-MM-dd'),
         ]);
      } else if (day === 'This Week') {
         setDate([moment().startOf('week').format('yyyy-MM-dd'), moment().endOf('day').format('yyyy-MM-dd')]);
      } else if (day === 'This Month') {
         setDate([moment().startOf('month').format('yyyy-MM-dd'), moment().endOf('day').format('yyyy-MM-dd')]);
      } else if (day === 'Last Month') {
         setDate([
            moment()
               .subtract(1, 'months')
               .startOf('month')
               .format('yyyy-MM-dd'),
            moment().subtract(1, 'months').endOf('month').format('yyyy-MM-dd'),
         ]);
      } else if (typeof day === 'object') {
         setDate(day);
      } else {
         setDate([moment().startOf('year').format('yyyy-MM-dd'), moment().endOf('day').format('yyyy-MM-dd')]);
      }
   }, [day, setDate]);

   return [day, setDay, date];
};
