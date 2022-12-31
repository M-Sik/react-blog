import React, { Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import classNames from 'classnames/bind';
import styles from '@/components/dialogs/CancelAndConfirmDialog.module.scss';
const cx = classNames.bind(styles);

interface ConfirmDialogProps {
  dialog: boolean;
  dialogContent: string;
  cancelFunc: Dispatch<SetStateAction<boolean>>;
  confirmFunc: () => void;
}

function ConfirmDialog({ dialog, dialogContent, cancelFunc, confirmFunc }: ConfirmDialogProps) {
  // console.log('프롭스 보자', dialog);
  const handleCancel = () => {
    cancelFunc(false);
  };
  const handleConfrim = () => {
    confirmFunc();
  };
  return (
    <div>
      <Dialog open={dialog} onClose={handleCancel} className={cx('wrap-dialog')}>
        <div className={cx('wrap-card')}>
          <div className={cx('wrap-content')}>{dialogContent}</div>
          <div className={cx('wrap-btn')}>
            <button onClick={handleCancel} type="button">
              취소
            </button>
            <button onClick={handleConfrim} type="button">
              확인
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default ConfirmDialog;
