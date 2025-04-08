import React from 'react';
import { IconBase } from '../IconBase';
import { ICON_TYPES, ICON_SIZES } from '../constants';

const ChevronToggleIcon = ({
  isOpen
  ,type=ICON_TYPES.FOLD
  ,size=ICON_TYPES.LG
  ,...props}) => {
  return (
    <IconBase
      type={type} 
      size={size}
      style={{
        transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
        transition: 'transform 0.2s ease-in-out'
      }}
      {...props} 
    />
  );
};

export default ChevronToggleIcon;