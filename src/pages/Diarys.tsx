import DiaryCard from '@/components/cards/DiaryCard';
import { Diary } from '@/types/Interface';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

function Diarys() {
  const [diarys, setDiarys] = useState<Diary[]>([]);

  const getPosts = () => {
    axios.get('http://localhost:3001/posts').then((res: AxiosResponse<Diary[]>) => {
      console.log('받아온 리스트 정보 => ', res);
      setDiarys(res.data);
    });
  };
  // useEffect 의 뒤에 빈배열 []을 넣어놓으면 한번만 실행된다.
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="main-layouts">
      {/* {diarys.map((diary) => {
        return <div key={diary.id}>{diary.title}</div>;
      })} */}
      {/* <DiaryCard diary={ }/> */}
      {diarys.map((diary) => {
        return <DiaryCard key={diary.id} diary={diary} />;
      })}
    </div>
  );
}

export default Diarys;
