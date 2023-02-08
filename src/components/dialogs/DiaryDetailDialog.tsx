import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import classNames from 'classnames/bind';
import styles from '@/components/dialogs/DiaryDetailDialog.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import DeleteDialog from '@/components/dialogs/CancelAndConfirmDialog';
import { diaryStore } from '@/store/DiaryStore';
const cx = classNames.bind(styles);

interface ConfirmDialogProps {
  dialog: boolean;
  dialogFunc: Dispatch<SetStateAction<boolean>>;
  diaryIndex: number | null;
  initDiaryIndex: Dispatch<SetStateAction<number | null>>;
}

function diaryDetailDialog({ dialog, dialogFunc, diaryIndex, initDiaryIndex }: ConfirmDialogProps) {
  const useInputs = () => {
    const [inputsToggle, setInputsToggle] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };
    const handleBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setBody(e.target.value);
    };
    return {
      inputsToggle,
      setInputsToggle,
      title,
      setTitle,
      body,
      setBody,
      handleTitle,
      handleBody,
    };
  };

  const useDiary = () => {
    // zustand
    const { storeDiarys } = diaryStore();
    const { deleteDiary } = diaryStore();
    const { updateDiary } = diaryStore();
    const handleUpdateDiary = () => {
      console.log(' diary index => ', diaryIndex);
      setInputsToggle(true);
      if (diaryIndex !== null) {
        setTitle(storeDiarys[diaryIndex].title);
        setBody(storeDiarys[diaryIndex].body);
      }
    };
    const handleCompleteDiary = () => {
      setInputsToggle(false);
      console.log(title, body);
      updateDiary(diaryIndex as number, title, body);
    };
    const handleDelete = () => {
      setInputsToggle(false);
      setDeleteDialog(false);
      if (diaryIndex !== null) {
        deleteDiary(storeDiarys[diaryIndex].createDate);
      }
      initDiaryIndex(null);
      dialogFunc(false);
    };
    return {
      storeDiarys,
      deleteDiary,
      updateDiary,
      handleUpdateDiary,
      handleCompleteDiary,
      handleDelete,
    };
  };
  const useDialog = () => {
    const [deleteDialog, setDeleteDialog] = useState(false);

    const handleClose = () => {
      setInputsToggle(false);
      dialogFunc(false);
    };
    const ondeletePopUp = () => {
      setDeleteDialog(true);
    };

    return { deleteDialog, setDeleteDialog, handleClose, ondeletePopUp, handleDelete };
  };
  const { inputsToggle, setInputsToggle, title, setTitle, body, setBody, handleTitle, handleBody } =
    useInputs();
  const { storeDiarys, deleteDiary, handleUpdateDiary, handleCompleteDiary, handleDelete } =
    useDiary();
  const { deleteDialog, setDeleteDialog, handleClose, ondeletePopUp } = useDialog();

  return (
    <div>
      <Dialog open={dialog} onClose={handleClose} className={cx('wrap-dialog')}>
        <div className={cx('wrap-card')}>
          <div onClick={handleClose} className={cx('wrap-close-icon')}>
            <CloseIcon />
          </div>
          <div className={`${cx('wrap-title')}`}>
            <h2 className="d-flex">
              제목 :
              <span className="ml-3">
                {inputsToggle ? (
                  <input type="text" value={title} onChange={handleTitle} />
                ) : (
                  diaryIndex !== null && storeDiarys[diaryIndex].title
                )}
              </span>
            </h2>
            {diaryIndex !== null && <p>{storeDiarys[diaryIndex].createDate}</p>}
          </div>
          <div className="h1-divider"></div>
          {inputsToggle ? (
            <textarea
              className="mt-4"
              placeholder="내용을 입력해주세요."
              name="body"
              value={body}
              onChange={handleBody}
              rows={20}
            ></textarea>
          ) : (
            <p className={`${cx('wrap-content')} mt-4 mb-4`}>
              {diaryIndex !== null && storeDiarys[diaryIndex].body}
            </p>
          )}
          <div className={cx('wrap-btn')}>
            {inputsToggle ? (
              <button onClick={handleCompleteDiary} type="button">
                완료하기
              </button>
            ) : (
              <button onClick={handleUpdateDiary} type="button">
                수정하기
              </button>
            )}

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
