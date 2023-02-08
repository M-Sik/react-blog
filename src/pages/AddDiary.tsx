import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import ConfirmDialog from '@/components/dialogs/ConfirmDialog';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import commonApi from '@/api/common/CommonApi';
import { diaryStore } from '@/store/DiaryStore';

function AddDiary() {
  const useInputs = () => {
    const [inputs, setInputs] = useState({
      title: '',
      body: '',
    });
    const inputOnChange = (e: any) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    };
    return { inputs, setInputs, inputOnChange };
  };

  const useDiary = () => {
    // zustand
    const { addDiary } = diaryStore();
    const onSubmit = () => {
      console.log(inputs.title, inputs.body);
      setDialogContent('게시글 작성을 완료하였습니다.');
      const createDate = commonApi.dateFormat(new Date());
      console.log('작성날짜 => ', createDate);

      setDialog(true);
      addDiary({ title: inputs.title, body: inputs.body, createDate: createDate });
    };
    const btnDisabled = useMemo(() => {
      return inputs.title !== '' && inputs.body !== '' ? false : true;
    }, [inputs]);
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

  const { inputs, inputOnChange } = useInputs();
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
          value={inputs.title || ''}
          onChange={inputOnChange}
        />
      </article>
      <article>
        <label>내용</label>
        <textarea
          placeholder="내용을 입력해주세요."
          name="body"
          value={inputs.body}
          onChange={inputOnChange}
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
