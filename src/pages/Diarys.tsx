import DiaryCard from '@/components/cards/DiaryCard';
import React, { useState } from 'react';
import { diaryStore } from '@/store/DiaryStore';
import DiaryDetailDialog from '@/components/dialogs/DiaryDetailDialog';

function Diarys() {
  const useDiary = () => {
    const [openDiaryIndex, setOpenDiaryIndex] = useState(null as null | number);
    // zustand hook
    const { storeDiarys } = diaryStore();
    return { openDiaryIndex, setOpenDiaryIndex, storeDiarys };
  };

  const useDialog = () => {
    const [diaryDialog, setDiaryDialog] = useState(false);
    const openDiaryDialog = (index: number) => {
      setOpenDiaryIndex(index);
      setDiaryDialog(true);
    };
    return { diaryDialog, setDiaryDialog, openDiaryDialog };
  };

  const { openDiaryIndex, setOpenDiaryIndex, storeDiarys } = useDiary();
  const { diaryDialog, setDiaryDialog, openDiaryDialog } = useDialog();

  return (
    <div className="main-layouts">
      {storeDiarys
        .map((diary, index) => {
          return (
            <DiaryCard
              openDetail={openDiaryDialog}
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
