import React, { useEffect } from 'react';
import TawkTo from 'tawkto-react';

const App = () => {
  useEffect(() => {
    const propertyId = '626ead64b0d10b6f3e702b9e';
    const tawkId = '1g205al6o';
    var tawk = new TawkTo(propertyId, tawkId);

    tawk.onStatusChange((status) => {
      // console.log(status)
    });
  });

  return <></>;
};

export default App;
