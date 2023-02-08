import { Diary } from '@/types/Interface';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface DiaryStoreInfo {
  storeDiarys: Diary[];
  addDiary: (diary: Diary) => void;
  deleteDiary: (createDate: string) => void;
  updateDiary: (diaryIndex: number, updateTitle: string, updateBody: string) => void;
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
      deleteDiary: (createDate) => {
        set((state) => ({
          storeDiarys: state.storeDiarys.filter((diary) => diary.createDate !== createDate),
        }));
      },
      updateDiary: (diaryIndex: number, updateTitle: string, updateBody: string) => {
        // console.log(diaryIndex, updateTitle, updateBody);
        set((state) => ({
          storeDiarys: state.storeDiarys.map((diary, index) =>
            diaryIndex === index ? { ...diary, title: updateTitle, body: updateBody } : diary,
          ),
        }));
      },
    }),
    { name: 'diary' },
  ),
);

mountStoreDevtool('Store', diaryStore);
