import React, { useState } from 'react';
import  {QrReader}  from 'react-qr-reader';

const QrScanner = () => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
      constraints={{}}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p>{data}</p>
    </>
  );
}
export default QrScanner;
