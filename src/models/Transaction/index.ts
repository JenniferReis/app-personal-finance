export enum TransactionType {
  In = 'Crédito',
  Out= 'Débito',
}

export enum TransactionCategory {
  Work = "Salário",
  Investments = "Investimentos",
  Education = "Educação",
  Health = "Saúde",
  Food = 'Alimentação',
  Transport = "Transporte",
  Variable = "Despesas Variáveis",
  Fixed = "Despesas Fixas",
  Others = "Outros",
}

export interface Transaction {
  id?: string;
  title: string;
  type: TransactionType;
  category: TransactionCategory;
  value: number;
  date?: Date;
}
