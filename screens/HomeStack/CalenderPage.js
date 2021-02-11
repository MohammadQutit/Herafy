import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {API} from '@aws-amplify/api/src/API';
import {graphqlOperation} from '@aws-amplify/api-graphql/dist/aws-amplify-api-graphql';
import {getUser3} from '../../graphql/queries';
import {CategoriesContext} from '../../context/CategoriesContext';
import {getDates} from '../../functions/CalendarGEN';

export default function A() {
  const [Ready, setReady] = React.useState(false);
  const [UserState, dispatch] = React.useContext(CategoriesContext);
  const [Periods, setPeriods] = React.useState({
    '2020-12-14': {color: 'rgba(178,34,34,0.6)'},
    '2020-12-15': {color: 'rgba(178,34,34,0.6)'},
    '2020-12-16': {color: 'rgba(178,34,34,0.6)'},
    '2020-12-17': {color: 'rgba(178,34,34,0.6)'},
  });
  React.useEffect(() => {
    async function GetUserID(params) {
      try {
        setReady(false);
        const c = await API.graphql(
          graphqlOperation(getUser3, {id: UserState.RequstedUserID}),
        );
        const s = c.data.getUser.Calenders.items;
        console.log(s);
        setReady(true);
        let gen = [];
        for (let i = 0; i < s.length; i++) {
          gen = [
            ...getDates(new Date(s[i].StartTime), new Date(s[i].EndTime)),
            ...gen,
          ];
        }
        let obj = {};
        for (let i = 0; i < gen.length; i++) {
          obj = {...obj, [gen[i]]: {color: '#928DAB'}};
        }
        setPeriods(obj);

        console.log(gen);
      } catch (error) {
        setReady(true);
        console.log(error.message);
      }
    }
    GetUserID();
  }, []);

  return Ready === true ? (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Calendar
        markedDates={Periods}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType="period"
      />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="orange" />
    </View>
  );
}
