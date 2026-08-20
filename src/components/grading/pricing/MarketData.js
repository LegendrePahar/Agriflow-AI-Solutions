/**
 * AgriFlow AI
 * Farm-Gate Market Data Layer
 *
 * ---------------------------------------------------------
 * PURPOSE
 * ---------------------------------------------------------
 *
 * Provides market intelligence used to determine the price
 * AgriFlow AI can offer farmers at the FARM GATE.
 *
 * These are currently demo/mock values.
 *
 * Later this layer can receive live information from the
 * AgriFlow backend.
 *
 * Possible future sources:
 *
 * - Farm-gate market prices
 * - Regional supply
 * - Regional demand
 * - Seasonal demand
 * - Market trends
 * - Produce availability
 * - Geographic market information
 *
 * IMPORTANT:
 *
 * This file provides MARKET DATA only.
 *
 * It does NOT calculate the final farm-gate offer.
 *
 * Pricing calculations belong in:
 *
 *     PricingEngine.js
 *
 */


// =========================================================
// FARM-GATE MARKET DATA
// =========================================================

const marketData = {

  tomatoes: {

    produce: "Yam",

    unit: "kg",

    currency: "₦",


    // -----------------------------------------------------
    // FARM-GATE REFERENCE PRICE
    // -----------------------------------------------------

    basePrice: 378,


    // -----------------------------------------------------
    // CURRENT FARM-GATE MARKET TREND
    // -----------------------------------------------------

    marketTrend: 8,


    // -----------------------------------------------------
    // SEASONAL DEMAND
    // -----------------------------------------------------

    seasonalDemand: 5,


    // -----------------------------------------------------
    // FARM-GATE MARKET
    // -----------------------------------------------------

    market: "Farm Gate",

    location: "Benue",

    region: "North Central",

    trendDirection: "up",

    confidence: 0.86,

  },


  maize: {

    produce: "Maize",

    unit: "kg",

    currency: "₦",

    basePrice: 8500,

    marketTrend: 4,

    seasonalDemand: 3,

    market: "Farm Gate",

    location: "Kaduna",

    region: "North West",

    trendDirection: "up",

    confidence: 0.82,

  },


  onions: {

    produce: "Onions",

    unit: "kg",

    currency: "₦",

    basePrice: 9000,

    marketTrend: -2,

    seasonalDemand: 4,

    market: "Farm Gate",

    location: "Kano",

    region: "North West",

    trendDirection: "down",

    confidence: 0.79,

  },


  rice: {

    produce: "Rice",

    unit: "kg",

    currency: "₦",

    basePrice: 378,

    marketTrend: 6,

    seasonalDemand: 5,

    market: "Farm Gate",

    location: "Benue",

    region: "North Central",

    trendDirection: "up",

    confidence: 0.84,

  },

};


// =========================================================
// GET FARM-GATE MARKET DATA
// =========================================================

export const getMarketData = (
  produce = "tomatoes"
) => {

  const normalizedProduce =
    String(produce)
      .toLowerCase()
      .trim();

  return (
    marketData[normalizedProduce] ||
    marketData.tomatoes
  );

};


// =========================================================
// GET ALL MARKET DATA
// =========================================================

export const getAllMarketData = () => {

  return marketData;

};


// =========================================================
// MARKET TREND LABEL
// =========================================================

export const getTrendLabel = (
  trend = 0
) => {

  if (trend > 0) {

    return `+${trend}%`;

  }

  if (trend < 0) {

    return `${trend}%`;

  }

  return "Stable";

};


// =========================================================
// MARKET TREND DIRECTION
// =========================================================

export const getTrendDirection = (
  trend = 0
) => {

  if (trend > 0) {

    return "up";

  }

  if (trend < 0) {

    return "down";

  }

  return "stable";

};


// =========================================================
// MARKET CONFIDENCE
// =========================================================

export const getMarketConfidence = (
  confidence = 0
) => {

  return Math.round(
    confidence * 100
  );

};


export default marketData;