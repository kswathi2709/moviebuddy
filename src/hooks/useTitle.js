import React from 'react'
import { useEffect } from 'react';

export const useTitle = (title) => {

    useEffect(()=>{
        document.title=`${title}/MovieBuddy`
    });

  return null;
}