import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil'
import {  reposState, viewCategoryState } from '../atoms'

const Repos = () => {
    const view = useRecoilValue(viewCategoryState);
    const [repos, setRepos] = useRecoilState(reposState);

    useEffect( () => {
        const getRepos = async () => {
            const responseData = await fetch(`https://ghapi.huchen.dev/repositories?since=${view}`)
            const body = await responseData.json();

            setRepos({
                ...repos,
                [view]: body
            })
        }

        getRepos();
    }, [setRepos, view])

    return repos[view] ? (
        <ul>
            {repos[view].map((repo) => <li>Repo name {repo.name }</li>)}
        </ul>
    ) : <p>No data</p>;

}

export default Repos;
