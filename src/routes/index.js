// routes/index.js
import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../application/Home/index.js';
import Recommend from '../application/Recommend/index.js';
import Singers from '../application/Singers/index.js';
import Rank from '../application/Rank/index.js';

export default [ // home 组件对应公共组件，下面推荐组件，歌手列表组件，排行榜组件为具体的功能组件
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => (
                    <Redirect to={"/recommend"}/>
                )
            },
            {
                path: '/recommend',
                component: Recommend,
            },
            {
                path: '/singers',
                component: Singers,
            },
            {
                path: '/rank',
                component: Rank,
            },
        ],
    }
]