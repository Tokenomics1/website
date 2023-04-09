import React from 'react'
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',

    },
    {
        title: 'Recipes',
        path: '/recipes',
        icon: <GiIcons.GiCookingPot />,
        cName: 'nav-text',

    },   {
        title: 'Crafts',
        path: '/crafts',
        icon: <BsIcons.BsFillPaletteFill />,
        cName: 'nav-text',

    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiOutlineExperiment />,
        cName: 'nav-text',

    }
]
