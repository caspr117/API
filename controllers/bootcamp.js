//get all bootcamps
//get /api/v1/bootcamps
//access public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" })
}

//get single bootcamp
//route get /api/v1/bootcamps/:id
//access public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamp: ${req.params.id}` });
}

// create new bootcamp
// post /api/v1/bootcamps
//access private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
}

// Update new bootcamp
// put /api/v1/bootcamps
//access private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

// delete  bootcamp
// delete  /api/v1/bootcamps
// access  private
exports.deleteBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
}
