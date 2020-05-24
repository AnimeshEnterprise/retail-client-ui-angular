export class Product {
id: string;
productName: string;
hscode: string;
brandId: string;
brandName: string;
productDetails: ProductDetail[];
}

export class ProductDetail {
id: string;
productId: string;
unitId: string;
unitName: string;
unitPrice: string;
}
