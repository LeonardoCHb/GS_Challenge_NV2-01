import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  income: number;
  outcome: number;
  total: 'income' | 'outcome'
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({ title,value, type}: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({
      title, value, type
    })

    this.transactions.push(transaction)

    return transaction
  }
}

export default TransactionsRepository;
