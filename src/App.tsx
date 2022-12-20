import { ChangeEvent, useState } from 'react';
import './App.scss';
import '@/assets/scss/common.scss';
import { CssBaseline } from '@mui/material';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Hello from './pages/Hello';
// import TodoPage from '@/pages/TodoPage';

function App(): JSX.Element {
  const [title, setTitle] = useState('');

  const titleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputTitle = e.target.value;
    setTitle(inputTitle);
    console.log(inputTitle);
  };

  return (
    // <div className="App">
    //   <CssBaseline />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Hello />} />
    //       <Route path="/todo-page" element={<TodoPage name="sik" />} />
    //       {/* <Route exact path="/login" component={} /> */}
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div>
      <CssBaseline />
      <div>
        <label>Title</label>
        <input
          placeholder="제목을 입력해주세요."
          className="main-input"
          type="text"
          value={title || ''}
          onChange={titleInputChange}
        />
      </div>
      <button className="mt-3 main-btn">Post</button>
    </div>
  );
}

export default App;
