import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/cards/DiaryCard.module.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Diary } from '@/types/Interface';
const cx = classNames.bind(styles);

interface DiaryCardProps {
  diary: Diary;
  openDetail: (index: number) => void;
  index: number;
}

function DiaryCard({ diary, openDetail, index }: DiaryCardProps) {
  const handleClick = () => {
    openDetail(index);
  };
  return (
    <section onClick={handleClick} className={cx('wrap-card')}>
      <article className={cx('wrap-title')}>
        <p>
          {diary.title} <span>{diary.createDate}</span>
        </p>
        <ChevronRightIcon />
      </article>
      <div className="h1-divider mt-4 mb-4"></div>
      <article className={cx('wrap-content')}>{diary.body}</article>
    </section>
  );
}

export default DiaryCard;
