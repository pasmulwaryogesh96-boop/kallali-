import { signToken } from "../lib/jwt";
import { Router } from "express";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db, users } from "@workspace/db";
import { requireRole } from "../middlewares/role.middleware";
import {
  authenticate,
  AuthenticatedRequest,
} from "../middlewares/auth.middleware";
const router = Router();
console.log("✅ auth.ts loaded");

router.post("/auth/signup", async (req, res) => {
  try {
    const { fullName, email, mobile, password } = req.body;

    if (!fullName || !email || !mobile || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check if email already exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists.",
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Save user
    const [newUser] = await db
      .insert(users)
      .values({
        fullName,
        email,
        mobile,
        passwordHash,
      })
      .returning();

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
      user: {
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

   
    const token = signToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    return res.json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
});
 console.log("✅ Registering /auth/me route");
router.get(
  "/auth/me",
  authenticate,
  async (req: AuthenticatedRequest, res) => {
    return res.json({
      success: true,
      user: req.user,
    });
  }
);
router.get(
  "/auth/admin",
  authenticate,
  requireRole("admin"),
  async (req: AuthenticatedRequest, res) => {
    return res.json({
      success: true,
      message: "Welcome Admin!",
    });
  }
);
export default router;