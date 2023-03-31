import './App.scss';
import '@/assets/scss/common.scss';
import Router from '@/router/index';
import { Suspense } from 'react';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      {/* 페이지 코드스플릿팅을 사용하기위해 suspense사용 */}
      <Suspense>
        <Router></Router>
      </Suspense>
    </div>
  );
};

export default App;
