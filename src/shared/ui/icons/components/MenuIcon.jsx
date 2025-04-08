import React from 'react';
import { IconBase } from '../IconBase';
import { ICON_TYPES, ICON_SIZES } from '../constants';

const MenuIcon = (props) => {
  return (
    <IconBase
      type={ICON_TYPES.MENU} 
      size={ICON_SIZES.LG}
      {...props} 
    />
  );
};

export default MenuIcon