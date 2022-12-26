import DiaryCard from '@/components/cards/DiaryCard';
import { Diary } from '@/types/Interface';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { diaryStore } from '@/store/DiaryStore';

function Diarys() {
  const [diarys, setDiarys] = useState<Diary[]>([]);
  // zustand hook
  const { storeDiarys } = diaryStore();

  const getDiary = () => {
    // axios.get('http://localhost:3001/posts').then((res: AxiosResponse<Diary[]>) => {
    //   console.log('받아온 리스트 정보 => ', res);
    //   setDiarys(res.data);
    // });
    setDiarys(storeDiarys);
  };
  // useEffect 의 뒤에 빈배열 []을 넣어놓으면 한번만 실행된다.
  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div className="main-layouts">
      {diarys
        .map((diary) => {
          return <DiaryCard key={diary.createDate} diary={diary} />;
        })
        .reverse()}
    </div>
  );
}

export default Diarys;
