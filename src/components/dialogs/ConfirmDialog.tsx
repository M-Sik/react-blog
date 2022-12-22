import React, { Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import classNames from 'classnames/bind';
import styles from '@/components/dialogs/ConfirmDialog.module.scss';
const cx = classNames.bind(styles);

interface ConfirmDialogProps {
  dialog: boolean;
  dialogContent: string;
  dialogFunc: Dispatch<SetStateAction<boolean>>;
}

function ConfirmDialog({ dialog, dialogContent, dialogFunc }: ConfirmDialogProps) {
  console.log('프롭스 보자', dialog);
  const handleClose = () => {
    dialogFunc(false);
  };
  return (
    <div>
      <Dialog open={dialog} onClose={handleClose} className={cx('wrap-dialog')}>
        <div className={cx('wrap-card')}>
          {dialogContent}
          <button onClick={handleClose} type="button">
            확인
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default ConfirmDialog;
