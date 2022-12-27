import React, { Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import classNames from 'classnames/bind';
import styles from '@/components/dialogs/ConfirmDialog.module.scss';
import { Diary } from '@/types/Interface';
const cx = classNames.bind(styles);

interface ConfirmDialogProps {
  dialog: boolean;
  diary: Diary;
  dialogFunc: Dispatch<SetStateAction<boolean>>;
}

function diaryDetailDialog({ dialog, diary, dialogFunc }: ConfirmDialogProps) {
  const handleClose = () => {
    dialogFunc(false);
  };
  return (
    <div>
      <Dialog open={dialog} onClose={handleClose} className={cx('wrap-dialog')}>
        <div className={cx('wrap-card')}>
          {diary.title} {diary.body} {diary.createDate}
          <button onClick={handleClose} type="button">
            확인
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default diaryDetailDialog;
