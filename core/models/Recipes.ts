export interface Recipes {
  idRecipe: string;
  name: string;
  image: string;
  instructions: string;
  ingredients: Array<string>;
  measures: Array<string>;
  countryOrigin: string;
}
