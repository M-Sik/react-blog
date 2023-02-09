import React, { useState, useMemo, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import ConfirmDialog from '@/components/dialogs/ConfirmDialog';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import commonApi from '@/api/common/CommonApi';
import { diaryStore } from '@/store/DiaryStore';

function AddDiary() {
  const useInputs = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };
    const handleBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setBody(e.target.value);
    };
    return { title, setTitle, handleTitle, body, setBody, handleBody };
  };

  const useDiary = () => {
    // zustand
    const { addDiary } = diaryStore();
    const onSubmit = () => {
      setDialogContent('게시글 작성을 완료하였습니다.');
      const createDate = commonApi.dateFormat(new Date());
      console.log('작성날짜 => ', createDate);

      setDialog(true);
      addDiary({ title: title, body: body, createDate: createDate });
    };
    const btnDisabled = useMemo(() => {
      return title !== '' && body !== '' ? false : true;
    }, [title, body]);
    return { addDiary, onSubmit, btnDisabled };
  };

  const useDialog = () => {
    const [dialog, setDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('');
    // 커스텀 훅
    useDidMountEffect(() => {
      if (!dialog) navigate('/diarys');
    }, [dialog]);
    return { dialog, setDialog, dialogContent, setDialogContent };
  };

  const { title, handleTitle, body, handleBody } = useInputs();
  const { onSubmit, btnDisabled } = useDiary();
  const { dialog, setDialog, dialogContent, setDialogContent } = useDialog();
  const navigate = useNavigate();

  return (
    <section className="main-layouts mt-6">
      <article className="mb-4">
        <label>제목</label>
        <input
          placeholder="제목을 입력해주세요."
          name="title"
          type="text"
          value={title}
          onChange={handleTitle}
        />
      </article>
      <article>
        <label>내용</label>
        <textarea
          placeholder="내용을 입력해주세요."
          name="body"
          value={body}
          onChange={handleBody}
          rows={20}
        ></textarea>
      </article>
      <button disabled={btnDisabled} className="mt-6 main-btn" onClick={onSubmit}>
        작성완료!
      </button>
      <ConfirmDialog dialog={dialog} dialogContent={dialogContent} dialogFunc={setDialog} />
    </section>
  );
}

export default AddDiary;
