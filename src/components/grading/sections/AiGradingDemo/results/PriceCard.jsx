import React from "react";
import { motion } from "framer-motion";
import {
  Banknote,
  TrendingUp,
  BadgeCheck,
  MapPin,
} from "lucide-react";


const PriceCard = ({
  price = 387,

  currency = "₦",

  grade = "A",

  produce = "Yam",

  market = "Farm Gate",

  location = "Benue",

  marketTrend = 0,

  marketTrendLabel = "Stable",

  seasonalDemand = 0,

}) => {


  const formattedPrice =
    new Intl.NumberFormat("en-NG")
      .format(price);


  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 25,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      whileHover={{
        y: -6,
      }}

      transition={{
        duration: 0.5,
      }}

      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-primary
        to-green-700
        text-white
        shadow-2xl
      "
    >


      {/* ====================================================
          DECORATIVE GLOW
      ===================================================== */}

      <div
        className="
          absolute
          -top-16
          -right-16
          w-40
          h-40
          rounded-full
          bg-white/10
          blur-3xl
        "
      />


      <div className="relative p-8">


        {/* ==================================================
            HEADER
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-6
          "
        >

          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-wider
                text-white/80
              "
            >
              Recommended Farm-Gate Offer
            </p>


            <h2
              className="
                mt-2
                text-5xl
                text-secondary
                font-black
              "
            >

              {currency}
              {formattedPrice}

            </h2>


            <p
              className="
                mt-2
                text-sm
                text-white/75
              "
            >
              Estimated offer per {market === "Farm Gate" ? "kg" : "unit"}
            </p>

          </div>


          <div
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-white/15
            "
          >

            <Banknote size={32} />

          </div>

        </div>



        {/* ==================================================
            PRODUCE + GRADE
        =================================================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-3
          "
        >

          {/* Produce */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white/15
              px-4
              py-2
            "
          >

            <span className="font-semibold">
              {produce}
            </span>

          </div>


          {/* Grade */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white/15
              px-4
              py-2
            "
          >

            <BadgeCheck size={18} />

            <span className="font-semibold">
              Grade {grade}
            </span>

          </div>

        </div>



        {/* ==================================================
            MARKET LOCATION
        =================================================== */}

        <div
          className="
            mt-4
            flex
            flex-wrap
            gap-3
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white/15
              px-4
              py-2
            "
          >

            <MapPin size={17} />

            <span className="font-semibold">
              {market}
            </span>

          </div>


          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white/15
              px-4
              py-2
            "
          >

            <span className="font-semibold">
              {location}
            </span>

          </div>

        </div>



        {/* ==================================================
            MARKET TREND
        =================================================== */}

        <div
          className="
            mt-8
            rounded-2xl
            bg-white/10
            p-5
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-white/60
                "
              >
                Farm-Gate Market Trend
              </p>

              <p
                className="
                  mt-1
                  text-lg
                  font-bold
                "
              >
                {marketTrendLabel}
              </p>

            </div>


            <TrendingUp
              size={24}
              className="text-white"
            />

          </div>


          <div
            className="
              mt-3
              flex
              items-center
              justify-between
              text-sm
              text-white/70
            "
          >

            <span>
              Seasonal demand
            </span>

            <span className="font-semibold">
              {seasonalDemand > 0
                ? `+${seasonalDemand}%`
                : `${seasonalDemand}%`
              }
            </span>

          </div>

        </div>



        {/* ==================================================
            EXPLANATION
        =================================================== */}

        <p
          className="
            mt-6
            leading-7
            text-white/85
          "
        >
          This is the estimated price AgriFlow AI can
          offer the farmer for this produce based on
          its AI-assessed quality and current
          farm-gate market conditions.
        </p>



        {/* ==================================================
            IMPORTANT DISCLAIMER
        =================================================== */}

        <div
          className="
            mt-6
            rounded-2xl
            bg-white/10
            p-4
            text-sm
            leading-6
            text-white/80
          "
        >

          This is a farm-gate purchase offer estimate.
          It is not AgriFlow AI's institutional selling
          price. Final offers may vary depending on
          location, supply, demand and prevailing
          market conditions.

        </div>


      </div>

    </motion.div>

  );

};


export default PriceCard;