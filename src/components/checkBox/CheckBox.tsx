import React from 'react';
import MCheckbox from '@mui/material/Checkbox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styles from '@/components/checkBox/CheckBox.module.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckBox = () => {
  return (
    <MCheckbox
      {...label}
      className={styles.sikColor}
      checkedIcon={<AddCircleOutlineIcon />}
      defaultChecked
    />
  );
};

export default CheckBox;
