export const CARD_SIZES = {
    SMALL: 'small',
    DEFAULT: 'default',
    LARGE: 'large',
    CHART: 'chart',
    CUSTOM: 'custom'
  };
  
export const CARD_DIMENSIONS = {
[CARD_SIZES.SMALL]: {
    minHeight: '300px'
},
[CARD_SIZES.DEFAULT]: {
    minHeight: '400px'
},
[CARD_SIZES.LARGE]: {
    minHeight: '500px'
},
[CARD_SIZES.CHART]: {
    minHeight: '400px',
    aspectRatio: '16/9'
}
};