import { Diary } from '@/types/Interface';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface DiaryStoreInfo {
  storeDiarys: Diary[];
  addDiary: (diary: Diary) => void;
}
// 미들웨어 persist 를 사용하기위한 타입
type MyPersist = (
  config: StateCreator<DiaryStoreInfo>,
  options: PersistOptions<DiaryStoreInfo>,
) => StateCreator<DiaryStoreInfo>;

export const diaryStore = create<DiaryStoreInfo>(
  (persist as MyPersist)(
    (set) => ({
      storeDiarys: [],
      addDiary: (diary) => {
        set((state) => ({ storeDiarys: [...state.storeDiarys, diary] }));
      },
    }),
    { name: 'diary' },
  ),
);

mountStoreDevtool('Store', diaryStore);
