export class Invoice {
id: string;
createdDate: string;
dueDate: string;
paidDate: string;
subTotal: string;
grandTotal: string;
tax: string;
orderBy: string;
orderByName: string;
orderByAddress: string;
purchaseRefNumber: string;
invoiceNumber: string;
paidAmount: string;
dueAmount: string;
paymentDetails: string;
invoiceLines: InvoiceLine[];
}

export class InvoiceLine {
id: string;
subTotal: string;
grandTotal: string;
tax: string;
purchaseRefNumber: string;
invoiceNumber: string;
productId: string;
productName: string;
quantity: string;
unitId: string;
unitName: string;
unitPrice: string;
systemPrice: string;
hscode: string;
}
