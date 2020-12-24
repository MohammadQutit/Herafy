import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';

export default function A() {
  const day = {
    '2020-12-14': {startingDay: true, color: 'green'},
    '2020-12-15': {color: 'green'},
    '2020-12-16': {color: 'green'},
    '2020-12-17': {color: 'green', endingDay: true},
  };
  return (
    <Calendar
      markedDates={day}
      // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
      markingType="period"
    />
  );
}
