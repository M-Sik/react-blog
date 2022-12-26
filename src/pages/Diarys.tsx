import DiaryCard from '@/components/cards/DiaryCard';
import { Diary } from '@/types/Interface';
import React, { useEffect, useState } from 'react';
import { diaryStore } from '@/store/DiaryStore';

function Diarys() {
  const [diarys, setDiarys] = useState<Diary[]>([]);
  // zustand hook
  const { storeDiarys } = diaryStore();

  const getDiary = () => {
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
