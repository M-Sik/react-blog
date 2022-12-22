import axios from 'axios';
import React, { ChangeEvent, useState, useMemo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ConfirmDialog from '@/components/dialogs/ConfirmDialog';
import useDidMountEffect from '@/hooks/useDidMountEffect';

function AddPost() {
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });
  const [dialog, setDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const navigate = useNavigate();
  // 커스텀 훅
  useDidMountEffect(() => {
    if (!dialog) navigate('/blogs');
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
    // setDialog(true);
    // axios.post('http://localhost:3001/posts', { title: inputs.title, body: inputs.body });
  };
  const btnDisabled = useMemo(() => {
    return inputs.title !== '' && inputs.body !== '' ? false : true;
  }, [inputs]);
  return (
    <section className="main-layouts">
      <h1>Add Blog Post</h1>
      <div className="mb-4">
        <label>Title</label>
        <input
          placeholder="제목을 입력해주세요."
          className="main-input"
          name="title"
          type="text"
          value={inputs.title || ''}
          onChange={inputOnChange}
        />
      </div>
      <div>
        <label>Body</label>
        <textarea
          placeholder="내용을 입력해주세요."
          name="body"
          value={inputs.body}
          onChange={inputOnChange}
          rows={20}
        ></textarea>
      </div>
      <button disabled={btnDisabled} className="mt-4 main-btn" onClick={onSubmit}>
        Add
      </button>
      <ConfirmDialog dialog={dialog} dialogContent={dialogContent} dialogFunc={setDialog} />
    </section>
  );
}

export default React.memo(AddPost);
