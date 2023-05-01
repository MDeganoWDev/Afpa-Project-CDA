export interface Product {
    code: string;
    product: {
      ingredients: Ingredient[];
      image_ingredients_url:any;
      nova_group:number;
      ingredients_text:string;
      product_name:string;
      nutriscore_grade:string;

      nutriments:{
        fat:number;
        sugars:number;
        salt:number;
        "saturated-fat":number;      
      }
      image_nutrition_url:any;
    }
   
  }
  export interface Ingredient {
    // id: string;
    // percent_estimate: number;
    // percent_max: number;
    // percent_min: number;
    text: string;
    // vegan: string;
    // vegetarian: string;
    // Ajoutez d'autres propriétés ici si nécessaire
  }