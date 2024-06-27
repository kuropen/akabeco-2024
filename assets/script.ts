import Alpine from 'alpinejs';

Object.assign(window, {Alpine});

interface Item {
  affiliateRate: number;
  affiliateUrl: string;
  asurakuArea: string;
  asurakuClosingTime: string;
  asurakuFlag: number;
  availability: number;
  catchcopy: string;
  creditCardFlag: number;
  endTime: string;
  genreId: string;
  giftFlag: number;
  imageFlag: number;
  itemCaption: string;
  itemCode: string;
  itemName: string;
  itemPrice: number;
  itemUrl: string;
  mediumImageUrls: string[];
  pointRate: number;
  pointRateEndTime: string;
  pointRateStartTime: string;
  postageFlag: number;
  reviewAverage: number;
  reviewCount: number;
  shipOverseasArea: string;
  shipOverseasFlag: number;
  shopAffiliateUrl: string;
  shopCode: string;
  shopName: string;
  shopOfTheYearFlag: number;
  shopUrl: string;
  smallImageUrls: string[];
  startTime: string;
  tagIds: number[];
  taxFlag: number;
}

interface ProductsApiResponse {
  GenreInformation: never[];
  Items: Item[];
}

// 日本語環境か確認する
const isJapanese = navigator.language.startsWith('ja');

document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    isJapanese,
    getProducts: async (limit: number) => {
      const response = await fetch(
        'https://akabeco-products-api.kuropen.workers.dev/'
      );
      const data: ProductsApiResponse = await response.json();
      if (limit > 0) {
        return data.Items.slice(0, limit);
      }
      return data.Items;
    },
  }));
});

Alpine.start();
