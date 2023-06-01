export interface ProductProps {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  __v?: number;
  _id: string;
}

interface CategoryConstantsProps {
  MENS_CLOTHING: string;
  WOMENS_CLOTHING: string;
  JEWELERY: string;
  ELECTRONICS: string;
}

export const categoryConstants: CategoryConstantsProps = {
  MENS_CLOTHING: "mens clothing",
  WOMENS_CLOTHING: "womens clothing",
  JEWELERY: "jewelery",
  ELECTRONICS: "electronics",
};

export const getCategory = (category: string) => {
  let _category = "";
  switch (category) {
    case categoryConstants.MENS_CLOTHING:
      _category = "mensClothing";
      break;
    case categoryConstants.WOMENS_CLOTHING:
      _category = "womensClothing";
      break;
    case categoryConstants.JEWELERY:
      _category = categoryConstants.JEWELERY;
      break;
    case categoryConstants.ELECTRONICS:
      _category = categoryConstants.ELECTRONICS;
      break;
    default:
      _category = "mensClothing";
      break;
  }

  return _category;
};

export const getFilteredProducts = (
  products: any,
  option: number
) => {
console.log(option)
  const productList = [...products];
  switch (option) {
    case 0:
      return productList.sort(
        (productOne, productTwo) => productTwo?.price - productOne?.price
      );
    case 1:
      return productList.sort(
       
        (productOne, productTwo) => productOne?.price - productTwo?.price
      );
    case 2:
      return productList.sort(
        (productOne, productTwo) =>
          productTwo?.rating?.rate - productOne?.rating?.rate
      );
    case -1:
      return products;
  }
};
