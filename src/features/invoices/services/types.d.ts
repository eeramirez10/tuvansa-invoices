export interface InvoicesResponse {
    items:      Invoice[];
    total:      number;
    page:       number;
    pageSize:   number;
    totalPages: number;
}

export interface Invoice {
    client:        string;
    invoiceNumber: string;
    reference:     string;
    invoiceDate:   string;
    dueDate:       string;
    orderDate:     string;
    grossAmount:   string;
    vatAmount:     string;
    totalAmount:   string;
    balance:       string;
    exchangeRate:  string;
    statusCfd:     number;
    currency:      string;
}