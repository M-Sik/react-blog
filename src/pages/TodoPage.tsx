import React from 'react';
import OutLineBtn from '../components/buttons/OutLineBtn';
import CheckBox from '../components/checkBox/CheckBox';

type Props = {
  name: string;
};

const TodoPage = (props: Props) => {
  return (
    <div>
      {props.name}
      <OutLineBtn />
      <CheckBox />
    </div>
  );
};

export default TodoPage;
