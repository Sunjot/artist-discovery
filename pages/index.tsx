import dynamic from 'next/dynamic';
import React from 'react';

const Home = dynamic(() => import('../components/Home'));

const Index = () => {
  return(
    <React.Fragment>
      <Home/>
    </React.Fragment>
  );
}
 
export default Index;
