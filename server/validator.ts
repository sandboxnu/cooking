import Joi from "joi";

export const PicturesApiRequestSchema = Joi.object({
  author: Joi.string().max(255).required(),
  pictureUrl: Joi.string().max(255).required(),
  description: Joi.string().max(255).allow(null)
});