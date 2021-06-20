import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import Title from '@atoms/Title';

interface Props {
  readonly text: string;
}

const Memorize = ({ text }: Props) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const vocas = [];

  useEffect(() => {
    axios.get('/api/search', {
      params: {
        text,
      },
    })
      .then((result) => {
        console.log(result);
      });
  }, []);

  if (loading) {
    return <CircularProgress value={progress} />;
  }

  return (
    <>
      <Title text="영어단어 외우기" />
    </>
  );
};

export default Memorize;
