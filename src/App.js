import React from 'react';

import CalendarOfEvents from './components/CalendarOfEvents';
import RecentUpdates from './components/RecentUpdates';
import Layout from './layout/Layout';
import LinkPanel from './components/LinkPanel';
import ServicePanel from './components/ServicePanel/Index';
import Banner from './components/Banner';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

function App() {

  const events = [
    {
      month: 'nov',
      date: 22,
      location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
      time: '1:30 pm',
      meetingTitle: 'Board of Economic Advisors Meeting',
      status: 'Updated',
      contactNumber: '(803) 734-2265'
    },
    {
      month: 'nov',
      date: 22,
      location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
      time: '1:30 pm',
      meetingTitle: 'Board of Economic Advisors Meeting',
      status: 'Canceled',
      contactNumber: '(803) 734-2265'
    },
    {
      month: 'nov',
      date: 22,
      location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
      time: '1:30 pm',
      meetingTitle: 'Board of Economic Advisors Meeting',
      contactNumber: '(803) 734-2265'
    },
    {
      month: 'nov',
      date: 22,
      location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
      time: '1:30 pm',
      meetingTitle: 'Board of Economic Advisors Meeting',
      contactNumber: '(803) 734-2265'
    }
  ]

  const blogs = [
    {
      title: 'Local Government Finance',
      content: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nectortor urna. Ut laoreet sodales',
      publishDate: 'Jan 2, 2020',
      status: 'Updated'
    },
    {
      title: 'Local Government Finance',
      content: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nectortor urna. Ut laoreet sodales',
      publishDate: 'Jan 2, 2020',
      status: 'Updated'
    },
    {
      title: 'Local Government Finance',
      content: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nectortor urna. Ut laoreet sodales',
      publishDate: 'Jan 2, 2020',
      status: 'Updated'
    },
    {
      title: 'Local Government Finance',
      content: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nectortor urna. Ut laoreet sodales',
      publishDate: 'Jan 2, 2020',
      status: 'Updated'
    }
  ]

  const [showBackButton, setShowBackButton] = React.useState(false);

  return (
    <Layout handler={setShowBackButton}>
      <Banner></Banner>
      <ServicePanel></ServicePanel>
      <LinkPanel></LinkPanel>
      <div className='flex w-full max-w-screen-xl justify-around flex-wrap'>
        <RecentUpdates blogs={blogs}></RecentUpdates>
        <CalendarOfEvents events={events}></CalendarOfEvents>
      </div>
      <Footer></Footer>
      <BackToTopButton show={showBackButton}></BackToTopButton>
    </Layout>
  );
}

export default App;
