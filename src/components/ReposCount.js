import React from 'react';
import { useRecoilValue } from 'recoil';
import { reposCount } from '../atoms';


const ReposCount = () => {
    const count = useRecoilValue(reposCount);

    return `Total count of all repos is: ${count}`
}

export default ReposCount;
