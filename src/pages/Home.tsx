import React, { useEffect, useState } from 'react';
import styles from '@/pages/Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Home() {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = '안녕하세요 Diary 입니다!!\n나만의 다이어리를 작성해 보세요!';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        const result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 200);

    return () => clearInterval(typingInterval);
  });

  return (
    <div className={`${cx('home-container')}`}>
      <p>{blogTitle}</p>
    </div>
  );
}

export default Home;
