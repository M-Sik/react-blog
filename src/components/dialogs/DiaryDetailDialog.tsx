import React, { Dispatch, SetStateAction, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import classNames from 'classnames/bind';
import styles from '@/components/dialogs/DiaryDetailDialog.module.scss';
import { Diary } from '@/types/Interface';
import CloseIcon from '@mui/icons-material/Close';
import DeleteDialog from '@/components/dialogs/CancelAndConfirmDialog';
import { diaryStore } from '@/store/DiaryStore';
const cx = classNames.bind(styles);

interface ConfirmDialogProps {
  dialog: boolean;
  diary: Diary;
  dialogFunc: Dispatch<SetStateAction<boolean>>;
}

function diaryDetailDialog({ dialog, diary, dialogFunc }: ConfirmDialogProps) {
  const [deleteDialog, setDeleteDialog] = useState(false);

  // zustand
  const { deleteDiary } = diaryStore();

  const handleClose = () => {
    dialogFunc(false);
  };
  const ondeletePopUp = () => {
    setDeleteDialog(true);
  };
  const handleDelete = () => {
    setDeleteDialog(false);
    deleteDiary(diary.createDate);
    dialogFunc(false);
  };
  return (
    <div>
      <Dialog open={dialog} onClose={handleClose} className={cx('wrap-dialog')}>
        <div className={cx('wrap-card')}>
          <div onClick={handleClose} className={cx('wrap-close-icon')}>
            <CloseIcon />
          </div>
          <div className={`${cx('wrap-title')}`}>
            <h2>
              제목 : <span>{diary.title}</span>
            </h2>
            <p>{diary.createDate}</p>
          </div>
          <div className="h1-divider"></div>
          <p className={`${cx('wrap-content')} mt-4 mb-4`}>{diary.body}</p>
          <div className={cx('wrap-btn')}>
            <button onClick={handleClose} type="button">
              수정하기
            </button>
            <button onClick={ondeletePopUp} type="button">
              삭제하기
            </button>
          </div>
        </div>
      </Dialog>
      <DeleteDialog
        dialog={deleteDialog}
        dialogContent="삭제 하시겠습니까?"
        cancelFunc={setDeleteDialog}
        confirmFunc={handleDelete}
      />
    </div>
  );
}

export default diaryDetailDialog;
