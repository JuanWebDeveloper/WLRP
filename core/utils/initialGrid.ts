export const initialGrid = (recipeQuantity: number): string => {
  if (recipeQuantity >= 4) {
    return 'fourParts';
  } else if (recipeQuantity >= 3) {
    return 'threeParts';
  } else {
    return 'twoParts';
  }
};
