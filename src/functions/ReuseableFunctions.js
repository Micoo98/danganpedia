import React from 'react';

export const change = () => {
  const spoilers = document.getElementsByClassName("spoiler");
  for(let i = 0; i < spoilers.length; i++)
  {
    spoilers[i].className = undefined;
  }
}