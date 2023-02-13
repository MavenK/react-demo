import screens from '../contants/screens';

const generateNumBetweenParams = (initial = 0, end = 10) => {
  const numberGenerated = Math.round(Math.random() * 100);
  return numberGenerated;
};

const getPositionImages = (actualScreen) => {
  const generatedTop = generateNumBetweenParams();
  const generatedLeft = generateNumBetweenParams();

  console.log('top ->', generatedTop);
  console.log('generatedLeft ->', generatedLeft);

  if (
    actualScreen < screens.mobile &&
    generatedTop < 63 &&
    generatedLeft < 63
  ) {
    return {
      top: `${String(generatedTop)}%`,
      left: `${String(generatedLeft)}%`,
    };
  } else if (
    actualScreen > screens.mobile &&
    generatedTop < 60 &&
    generatedLeft < 60
  ) {
    return {
      top: `${String(generatedTop)}%`,
      left: `${String(generatedLeft)}%`,
    };
  } else {
    return {
      top: `${String(40)}%`,
      left: `${String(30)}%`,
    };
  }
};

const utils = { generateNumBetweenParams, getPositionImages };

export default utils;
