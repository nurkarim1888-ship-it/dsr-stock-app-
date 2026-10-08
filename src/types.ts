export interface Product {
  id: string;
  name: string;
  unit: string;
  unitPrice: number;
  stock: number;
  damageStock: number;
}

export interface Salesman {
  id: string;
  name: string;
  route: string;
  currentDue: number;
}

export interface DispatchItem {
  productId: string;
  productName: string;
  unit: string;
  unitPrice: number;
  issuedQty: number;
  returnedQty: number;
  damageReturnedQty: number;
  soldQty: number;
  totalAmount: number;
}

export interface DispatchSession {
  id: string;
  challanNo: string;
  salesmanId: string;
  salesmanName: string;
  salesmanRoute?: string;
  date: string;
  items: DispatchItem[];
  totalAmount: number;
  cashCollected: number;
  dueAmount: number;
  notes?: string;
  status: 'morning_issued' | 'settled';
}
