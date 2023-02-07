import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import ConfirmDialog from '@/components/dialogs/ConfirmDialog';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import commonApi from '@/api/common/CommonApi';
import { diaryStore } from '@/store/DiaryStore';

function AddDiary() {
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });
  const [dialog, setDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  // zustand
  const { addDiary } = diaryStore();

  const navigate = useNavigate();
  // 커스텀 훅
  useDidMountEffect(() => {
    if (!dialog) navigate('/diarys');
  }, [dialog]);

  const inputOnChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // const titleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const inputTitle = e.target.value;
  //   setTitle(inputTitle);
  //   console.log(inputTitle);
  // };
  // const bodyInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   const inputBody = e.target.value;
  //   setBody(inputBody);
  //   console.log(inputBody);
  // };
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
  return (
    <section className="main-layouts">
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
        Add
      </button>
      <ConfirmDialog dialog={dialog} dialogContent={dialogContent} dialogFunc={setDialog} />
    </section>
  );
}

export default AddDiary;
