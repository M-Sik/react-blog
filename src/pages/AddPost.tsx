import React from 'react';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';

function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputTitle = e.target.value;
    setTitle(inputTitle);
    console.log(inputTitle);
  };
  const bodyInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputBody = e.target.value;
    setBody(inputBody);
    console.log(inputBody);
  };
  const onSubmit = () => {
    console.log(title, body);
    axios.post('http://localhost:3001/posts', { title: title, body: body });
  };
  return (
    <section className="main-layouts">
      <h1>Add Blog Post</h1>
      <div className="mb-4">
        <label>Title</label>
        <input
          placeholder="제목을 입력해주세요."
          className="main-input"
          type="text"
          value={title || ''}
          onChange={titleInputChange}
        />
      </div>
      <div>
        <label>Body</label>
        <textarea
          placeholder="내용을 입력해주세요."
          name=""
          id=""
          value={body}
          onChange={bodyInputChange}
          rows={20}
        ></textarea>
      </div>
      <button disabled={true} className="mt-4 main-btn" onClick={onSubmit}>
        Add
      </button>
    </section>
  );
}

export default AddPost;
