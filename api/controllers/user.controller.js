import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can only update your own account!"));
  }

  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: { // $set is a MongoDB operator that updates the fields
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true } // returns the updated informations
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest)
  } catch (error) {
    next(error);
  }
};
