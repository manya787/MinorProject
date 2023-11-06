const crypto = require("crypto");
const User = require("../model/userschema");
const sendEmail = require("../utils/sendemail");

exports.resetPassword = async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return;
  }

  if (req.body.password != req.body.confirmPassword) {
    return;
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  res.status(200).json({
    success: true,
  });
};

exports.forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return;
  }

  //Get ResetPasswordToken
  const resetToken = user.getResetPasswordToken();

  //reset password hogya ab usko save kro
  await user.save({ validateBeforeSave: false });

  //mail ke through link bhejna
    //  const resetPasswordUrl = `http://localhost/api/v1/password/reset/${resetToken}`//kya pta host aur http kya hai
  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your Password reset Token is :- \n ${resetPasswordUrl} \n\n If you have not requested this email , Please ignore this`;

  try {
    await sendEmail({
      email: user.email,
      subject: `CoLabconnect password Recovery`,
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
  }
};


