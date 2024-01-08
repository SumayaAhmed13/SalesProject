const SalesModel = require("../models/SalesModel");

const TotalRevenueService = async () => {
  try {
     let data = await SalesModel.aggregate([
        {
            $group:{
                _id:0,
                revenue:{$sum:{$multiply:["$qty", "$price"]}}
              }, 
        }
     
    ]);

    console.log(data);
    return { status: "Success", data: data };
  } 
  catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};
const QuantityByProductService = async () => {
  try {
    let data = await SalesModel.aggregate([
      
     {
      $group: {
        _id: "$productName",
        count: {
          $sum: "$qty"
        },
        
      },
     }


    ])
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};
const TopProductsService = async () => {
  try {
    let data = await SalesModel.aggregate([
      {
        $group:
          {
            _id:"$productName",
            totalSold: {$sum: 1 }
         }
        },
        {
          $sort: {
            totalSold: -1
          }
        },
        {
          $limit: 5
        }
   ])
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};
const AveragePriceService = async () => {
  try {
    let data = await SalesModel.aggregate([
      {
        $group:
          {
            _id:0,
            totalAmount: { $sum: { $multiply: [ "$price", "$qty" ] }}
           
          }
      }
   ])
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};

const RevenueByMonthService = async () => {
  try {
    let data = await SalesModel.aggregate([
      {
        $group:
          {
            _id:"$date",
            revenueByMonth: { $sum: { $multiply: [ "$price", "$qty" ] }},
            count: { $sum: 1 }
          }
      }
   ])
   return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};

const HighestQuantitySoldService = async () => {
  try {
    let data = await SalesModel.aggregate([
      {
        $group:
          {
            _id:"$date",
            product: {$first: "$productName"},
            max:{$max:"$qty"}
            
          }
      }
   ])
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};



module.exports = {
  TotalRevenueService,
  QuantityByProductService,
  TopProductsService,
  AveragePriceService,
  RevenueByMonthService,
  HighestQuantitySoldService,
};
