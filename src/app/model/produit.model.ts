export class Produit {

   constructor(
      public id: number | string = "",
      public image_url: string = "",
      public product_name: string = "",
      public GeneriqueName: string = "",
      public quantity: string = "",
      public packaging: string = "",
      public brands: string = "",
      public categories: string = "",
      public labels: string = "",
      public ingredients_original_tags: string = "",
      public code: string = "",
      public link: string = "",
      public stores: string = "",
      public countries: string = "",
      public nutriscore: string = "",
      public nova: string = "",
      public ecoscore: string = "",
   ) { }
}