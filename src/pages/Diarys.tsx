import DiaryCard from '@/components/cards/DiaryCard';
import React, { useEffect, useState } from 'react';
import { diaryStore } from '@/store/DiaryStore';
import DiaryDetailDialog from '@/components/dialogs/DiaryDetailDialog';

function Diarys() {
  // const [diarys, setDiarys] = useState<Diary[]>([]);
  const [openDiaryIndex, setOpenDiaryIndex] = useState(0);
  const [diaryDialog, setDiaryDialog] = useState(false);
  // zustand hook
  const { storeDiarys } = diaryStore();

  const getDiary = () => {
    // setDiarys(storeDiarys);
    console.log('다이어리 조회 결과 => ', storeDiarys);
  };
  const diaryDetail = (index: number) => {
    setOpenDiaryIndex(index);
    setDiaryDialog(true);
  };
  // useEffect 의 뒤에 빈배열 []을 넣어놓으면 한번만 실행된다.
  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div className="main-layouts">
      {storeDiarys
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
      <DiaryDetailDialog
        diaryIndex={openDiaryIndex}
        dialog={diaryDialog}
        dialogFunc={setDiaryDialog}
        initDiaryIndex={setOpenDiaryIndex}
      />
    </div>
  );
}

export default Diarys;
