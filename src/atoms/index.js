import { atom, selector } from 'recoil';

export const viewCategoryState = atom({
    key: 'view-category',
    default: 'daily'
});

export const reposState = atom({
   key: 'repos',
   default: {
       daily: [],
       weekly: [],
       monthly: []
   }
});


export const reposCount = selector({
    key: 'repos-count',
    get: ({get}) => Object.values(get(reposState)).reduce((acc, arr) => acc + arr.length, 0)
});
