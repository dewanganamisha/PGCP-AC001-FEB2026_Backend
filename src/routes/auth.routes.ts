import { Router } from "express";
import { hashPassword, signToken, verifyPassword } from "../lib/auth";
import { prisma } from "../lib/prisma";
import { authenticate } from "../middleware/auth";
import { ApiError } from "../middleware/error";
import { asyncHandler } from "../utils/asyncHandler";
import {
  doctorRegistrationSchema,
  forgotPasswordSchema,
  loginSchema,
  patientRegistrationSchema,
  pharmacistRegistrationSchema,
  resetPasswordSchema,
} from "../validators/auth";