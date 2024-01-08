const express =require("express");
const router=express.Router();
const SalesCtrl=require("../controller/SalesController");

//Sales Api
router.get('/sales/total-revenue',SalesCtrl.TotalRevenue);
router.get('/sales/quantity-by-product',SalesCtrl.QuantityByProduct);
router.get('/sales/top-products',SalesCtrl.TopProducts);
router.get('/sales/average-price',SalesCtrl.AveragePriceForProduct);
router.get('/sales/revenue-by-month',SalesCtrl.RevenueByMonth);
router.get('/sales/highest-quantity-sold',SalesCtrl.HighestQuantitySold);

module.exports=router;