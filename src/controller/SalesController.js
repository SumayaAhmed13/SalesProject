
const {TotalRevenueService,QuantityByProductService,TopProductsService,AveragePriceService,RevenueByMonthService,
       HighestQuantitySoldService}=require("../services/SalesServices")

const TotalRevenue=async(req,res)=>{
    let result=await TotalRevenueService();
    return res.status(200).json(result);
}

const QuantityByProduct=async(req,res)=>{
    let result=await  QuantityByProductService();
    return res.status(200).json(result);
}
const TopProducts=async(req,res)=>{
    let result=await  TopProductsService();
    return res.status(200).json(result);
}
const AveragePriceForProduct=async(req,res)=>{
    let result=await  AveragePriceService();
    return res.status(200).json(result);
}
const RevenueByMonth=async(req,res)=>{
    let result=await RevenueByMonthService();
    return res.status(200).json(result);
}
const HighestQuantitySold=async(req,res)=>{
    let result=await HighestQuantitySoldService();
    return res.status(200).json(result);
}

module.exports={
    TotalRevenue,
    QuantityByProduct,
    TopProducts,
    AveragePriceForProduct,
    RevenueByMonth,
    HighestQuantitySold
}