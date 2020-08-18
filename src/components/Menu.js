import React, { useCallback } from 'react';
import { viewCategoryState } from '../atoms'
import { useRecoilState } from 'recoil';

const VIEW_TYPES = ['daily', 'weekly', 'monthly'];

const Menu = () => {
    const [view, setView] = useRecoilState(viewCategoryState);
    const selectView = useCallback((viewType) => () => {
        setView(viewType);
    }, [setView]);


    return  VIEW_TYPES.map(viewType =>
        <button disabled={view === viewType} onClick={selectView(viewType)}>{viewType}</button>
    )
}

export default Menu;
