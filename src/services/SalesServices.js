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
    let data = await SalesModel.find();
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};
const AveragePriceService = async () => {
  try {
    let data = await SalesModel.find();
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};

const RevenueByMonthService = async () => {
  try {
    let data = await SalesModel.find();
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
            _id: { month: { $monthOfYear: "$date"}, year: { $year: "$date" } },
            totalAmount: { $sum: { $multiply: [ "$price", "$qty" ] } },
            count: { $sum: 1 }
          }
      }
   ])
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};

// const ListByCategoryService=async(req)=>{
//     try{
//         let CategoryID=new ObjectId(req.params.CategoryID);
//         let MatchStage={$match:{categoryID:CategoryID}};
//         let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
//         let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
//         let UnwindBrandStage={$unwind:"$brand"};
//         let UnwindCategoryStage={$unwind:"$category"};
//         let ProjectionStage={$project:{'brand._id':0,'category._id':0,'brandID':0,'categoryID':0}};

//         let data=await ProductModel.aggregate([
//             MatchStage,JoinWithBrandStage,
//             JoinWithCategoryStage,UnwindBrandStage,
//             UnwindCategoryStage,ProjectionStage
//          ])
//         return {status:"Success",data:data}

//     }
//     catch(e){
//         return {status:"Fail",data:e}.toString()
//     }
// }

module.exports = {
  TotalRevenueService,
  QuantityByProductService,
  TopProductsService,
  AveragePriceService,
  RevenueByMonthService,
  HighestQuantitySoldService,
};
