// 첫 렌더링때 useEffect가 작동하는데 그걸 막기위해 커스텀 훅 사용
// 첫 렌더링 이후부터 데이터변화 감지

import { useEffect, useRef } from 'react';

const useDidMountEffect = (func: any, deps: any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
