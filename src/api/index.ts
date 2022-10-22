import { Router } from "express"
import authenticate from "@medusajs/medusa/dist/api/middlewares/authenticate"

export default () => {
  const router = Router()

  router.get("/admin/stats", authenticate(), async (req, res) => {
    const productService = req.scope.resolve("productService")
    const customerService = req.scope.resolve("customerService")
    const summaryService = req.scope.resolve("summaryService")

    const productCount = await productService.count()
    const customerCount = await customerService.count()
    const ordersCount = await summaryService.ordersCount()
    const sales = await summaryService.salesTotal()

    res.json({
      customers: customerCount,
      products: productCount,
      orders: ordersCount,
      sales: sales,
      averageSales: sales / ordersCount || 0
    })

  })

  return router;
}

