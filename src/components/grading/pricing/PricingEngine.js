/**
 * AgriFlow AI
 * Farm-Gate Pricing Engine
 *
 * ---------------------------------------------------------
 * PURPOSE
 * ---------------------------------------------------------
 *
 * Calculates the recommended FARM-GATE PURCHASE PRICE that
 * AgriFlow AI can offer a farmer for their produce.
 *
 * This engine does NOT calculate:
 *
 * - Landed cost
 * - Transportation cost to city
 * - Institutional selling price
 * - Customer selling margin
 *
 * Those belong to later stages of the AgriFlow supply-chain
 * pricing architecture.
 *
 * ---------------------------------------------------------
 * CURRENT INPUTS
 * ---------------------------------------------------------
 *
 * 1. Farm-gate reference price
 * 2. AI quality grade
 * 3. Farm-gate market trend
 * 4. Seasonal demand
 *
 * Real market data will eventually come from the backend.
 */


// =========================================================
// AI QUALITY MULTIPLIERS
// =========================================================

const gradeMultipliers = {
  A: 1.25,
  B: 1.05,
  C: 0.85,
  D: 0.65,
};


// =========================================================
// FARM-GATE OFFER CALCULATION
// =========================================================

const calculateRecommendedPrice = ({
  basePrice = 387,
  grade = "A",
  marketTrend = 0,
  seasonalDemand = 0,
}) => {

  // -------------------------------------------------------
  // QUALITY ADJUSTMENT
  // -------------------------------------------------------

  const gradeMultiplier =
    gradeMultipliers[grade] ||
    gradeMultipliers.B;

  const qualityAdjustedPrice =
    basePrice * gradeMultiplier;


  // -------------------------------------------------------
  // FARM-GATE MARKET TREND
  // -------------------------------------------------------

  const marketAdjustment =
    qualityAdjustedPrice *
    (marketTrend / 100);


  // -------------------------------------------------------
  // SEASONAL DEMAND
  // -------------------------------------------------------

  const seasonalAdjustment =
    qualityAdjustedPrice *
    (seasonalDemand / 100);


  // -------------------------------------------------------
  // FINAL FARM-GATE OFFER
  // -------------------------------------------------------

  const recommendedPrice =
    qualityAdjustedPrice +
    marketAdjustment +
    seasonalAdjustment;


  return Math.round(recommendedPrice);
};


export default calculateRecommendedPrice;