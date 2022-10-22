import { Order, TransactionBaseService, LineItem } from '@medusajs/medusa';
import { EntityManager } from 'typeorm';

class SummaryService extends TransactionBaseService {
  protected manager_: EntityManager;
  protected transactionManager_: EntityManager;

  constructor(container) {
    super(container)
    this.manager_ = container.manager
  }

  async ordersCount(): Promise<number> {
    const orderRepo = this.manager_.getRepository(Order)
    const count = await orderRepo.count()

    return count
  }

  async salesTotal(): Promise<number> {
    const lineItemRepository = this.manager_.getRepository(LineItem);
    const result = await lineItemRepository
      .createQueryBuilder('order')
      .select('SUM(order.unit_price * fulfilled_quantity)')
      .where('fulfilled_quantity = quantity')
      .getRawOne();

    return result.sum
  }

}

export default SummaryService
