import { useState } from 'react';
import {MOBILE_SIZE, DESKTOP_SIZE} from '../utils/constants';

export default function useNavabar(){

    const [isOpened, setIsOpened]=useState(false);

    const handleOpenMenu=()=>{ 
        MOBILE_SIZE 
        ? setIsOpened(!isOpened)
        : setIsOpened(false);
    }

    const closeMenuResponsive = () => {
        return DESKTOP_SIZE 
                ? setIsOpened(false)
                : isOpened;
    }

    return {isOpened, setIsOpened, handleOpenMenu, closeMenuResponsive};
}