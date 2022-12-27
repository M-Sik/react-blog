import DiaryCard from '@/components/cards/DiaryCard';
import { Diary } from '@/types/Interface';
import React, { useEffect, useState } from 'react';
import { diaryStore } from '@/store/DiaryStore';
import DiaryDetailDialog from '@/components/dialogs/DiaryDetailDialog';

function Diarys() {
  const [diarys, setDiarys] = useState<Diary[]>([]);
  const [openDiaryInfo, setOpenDiaryInfo] = useState<Diary>({
    body: '',
    title: '',
    createDate: '',
  });
  const [diaryDialog, setDiaryDialog] = useState(false);
  // zustand hook
  const { storeDiarys } = diaryStore();

  const getDiary = () => {
    setDiarys(storeDiarys);
    console.log('다이어리 조회 결과 => ', storeDiarys);
  };
  const diaryDetail = (index: number) => {
    console.log('n 번째 리스트 클릭 => ', index);
    console.log(diarys[index]);
    setOpenDiaryInfo(diarys[index]);
    setDiaryDialog(true);
  };
  // useEffect 의 뒤에 빈배열 []을 넣어놓으면 한번만 실행된다.
  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div className="main-layouts">
      {diarys
        .map((diary, index) => {
          return (
            <DiaryCard
              openDetail={diaryDetail}
              key={diary.createDate}
              diary={diary}
              index={index}
            />
          );
        })
        .reverse()}
      <DiaryDetailDialog diary={openDiaryInfo} dialog={diaryDialog} dialogFunc={setDiaryDialog} />
    </div>
  );
}

export default Diarys;
