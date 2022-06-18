import React, { useState } from 'react';
import  {QrReader}  from 'react-qr-reader';

interface Props {
  data: string;
  setData: (newValue: string) => void;
} 

const QrScanner = ({data, setData}: Props) => {
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
      <a href={data}>{data}</a>
    </>
  );
}
export default QrScanner;
