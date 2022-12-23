import { BlogList } from '@/types/Interface';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

function Diarys() {
  const [posts, setPosts] = useState([] as BlogList[]);

  const getPosts = () => {
    axios.get('http://localhost:3001/posts').then((res: AxiosResponse<BlogList[]>) => {
      console.log('받아온 리스트 정보 => ', res);
      setPosts(res.data);
    });
  };
  // useEffect 의 뒤에 빈배열 []을 넣어놓으면 한번만 실행된다.
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="main-layouts">
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}

export default Diarys;
