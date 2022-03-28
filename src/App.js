import React from 'react';
import { useSelector } from 'react-redux';
import { useGetEventsQuery } from './app/api';
import './app.scss';

import Header from './features/header/Header'
import Footer from './features/footer/Footer'
import CardList from './features/cardList/CardList';
import Icon from './features/Icon/Icon';
import Spinner from './features/spinner/Spinner';




function App() {

  // const city = useSelector(state => state.city.city.nameEn);
  // const { data, isFetching } = useGetEventsQuery({ city, params: { ageFrom: '12' } });

  // const renderCard = ({id, ...data}) => {
  //   return (
  //     <EventCard key={id} {...data} >
  //       { VerticalCard }
  //     </EventCard>
  //   )
  // }

  return (
    <div className="app">
      <Header className="app__header" />

      <CardList />
      
      {/* <RowOfCards className="app__rowOfCards" header={<TitleWithLink link="#">Россия</TitleWithLink>}>
        { isFetching ? <Spinner /> : data.map(item => renderCard(item)) }
      </RowOfCards> */}

      {/* <RowOfCards className="app__rowOfCards" header={<TitleWithLink link="#">Россия</TitleWithLink>}>
        { isFetching ? <Spinner /> : data.map(item => <EventCard key={item.id} vertical {...item} />) }
      </RowOfCards> */}
    
      <Footer className="app__footer" />
    </div>
  );
}

export default App;
