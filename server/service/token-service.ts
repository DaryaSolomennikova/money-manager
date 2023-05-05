import jwt from "jsonwebtoken";
const tokenModel = require("../models/token-model");

class TokenService {
  generateTokens(payload: any) {
    const accessToken: any = jwt.sign(
      payload,
      process.env.JWT_ACCESS_SECRET || "",
      {
        expiresIn: "1h",
      }
    );
    const refreshToken: any = jwt.sign(
      payload,
      process.env.JWT_REFRESH_SECRET || "",
      {
        expiresIn: "30d",
      }
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token: any) {
    try {
      const userData: any = jwt.verify(
        token,
        process.env.JWT_ACCESS_SECRET || ""
      );
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token: any) {
    try {
      const userData: any = jwt.verify(
        token,
        process.env.JWT_REFRESH_SECRET || ""
      );
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId: any, refreshToken: any) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken: any) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken: any) {
    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

export const tokenService = new TokenService();
