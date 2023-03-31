const router = require("express").Router();
const BasicInfo = require("../../model/BasicInfo");

router.post("/details", async (req, res) => {
   const { fName, lName, email, phoneNo, dob, country, state, address, zipCode } = req.body;
   const Info = new BasicInfo({
      fName, lName, email, phoneNo, dob, country, state, address, zipCode
   });
   const result = await Info.save();
   console.log(res);
   res.send(result);
});
router.get("/docview", async (req, res) => {
   const result = await BasicInfo.find();
   res.send(result);
});



module.exports = router;