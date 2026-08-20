import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ScanSearch,
  BrainCircuit,
  BarChart3,
  BadgeCheck,
  Banknote,
} from "lucide-react";


const analysisStages = [
  {
    id: 1,
    title: "Scanning Produce",
    description: "Detecting uploaded image...",
    icon: ScanSearch,
  },

  {
    id: 2,
    title: "Extracting Features",
    description: "Analyzing size, shape and quality indicators...",
    icon: BrainCircuit,
  },

  {
    id: 3,
    title: "Evaluating Quality",
    description: "Comparing produce against AI standards...",
    icon: BarChart3,
  },

  {
    id: 4,
    title: "Assigning Grade",
    description: "Generating standardized quality score...",
    icon: BadgeCheck,
  },

  {
    id: 5,
    title: "Calculating Price",
    description: "Determining fair farm-gate value...",
    icon: Banknote,
  },
];


const AnalysisLoader = ({
  active = true,
  onComplete,
}) => {

  const [currentStage, setCurrentStage] = useState(0);


  useEffect(() => {

    if (!active) return;


    const interval = setInterval(() => {

      setCurrentStage((prev)=>{

        if(prev < analysisStages.length - 1){

          return prev + 1;

        }

        clearInterval(interval);

        if(onComplete){
          setTimeout(onComplete,800);
        }

        return prev;

      });


    },1800);


    return ()=>clearInterval(interval);


  },[active,onComplete]);



  return (

    <motion.div

      initial={{
        opacity:0,
        scale:0.95
      }}

      animate={{
        opacity:1,
        scale:1
      }}

      className="
        bg-white
        rounded-3xl
        border
        border-gray-200
        shadow-xl
        p-8
      "

    >


      {/* Header */}

      <div className="text-center mb-8">


        <div
          className="
            mx-auto
            w-16
            h-16
            rounded-full
            bg-primary/10
            flex
            items-center
            justify-center
          "
        >

          <ScanSearch
            size={32}
            className="text-primary animate-pulse"
          />

        </div>


        <h3
          className="
            mt-5
            text-xl
            font-bold
            text-slate-900
          "
        >

          AI Analysis In Progress

        </h3>


        <p
          className="
            mt-2
            text-gray-500
          "
        >

          Our model is standardizing your produce quality

        </p>


      </div>



      {/* Pipeline */}

      <div className="space-y-5">


        {
          analysisStages.map((stage,index)=>{


            const Icon = stage.icon;


            const completed =
              index < currentStage;


            const activeStage =
              index === currentStage;



            return (

              <motion.div

                key={stage.id}

                initial={{
                  opacity:0,
                  x:-20
                }}

                animate={{
                  opacity:1,
                  x:0
                }}

                transition={{
                  delay:index*0.1
                }}


                className={`
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-2xl
                  transition-all


                  ${
                    activeStage
                    ?
                    "bg-green-50 border border-green-200"
                    :
                    completed
                    ?
                    "bg-gray-50"
                    :
                    "bg-white border border-gray-100"
                  }

                `}

              >


                {/* Icon */}

                <div
                  className={`
                    w-11
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center


                    ${
                      completed || activeStage
                      ?
                      "bg-primary text-white"
                      :
                      "bg-gray-100 text-gray-400"
                    }

                  `}
                >

                  <Icon size={22}/>

                </div>



                {/* Text */}

                <div>

                  <h4
                    className="
                      font-semibold
                      text-slate-900
                    "
                  >
                    {stage.title}
                  </h4>


                  <p
                    className="
                      text-sm
                      text-gray-500
                    "
                  >
                    {stage.description}
                  </p>


                </div>


              </motion.div>

            );


          })
        }


      </div>



      {/* Progress */}

      <div
        className="
          mt-8
          h-2
          bg-gray-100
          rounded-full
          overflow-hidden
        "
      >

        <motion.div

          animate={{
            width:
            `${((currentStage+1)/analysisStages.length)*100}%`
          }}

          transition={{
            duration:0.6
          }}

          className="
            h-full
            bg-primary
          "

        />

      </div>


    </motion.div>

  );

};


export default AnalysisLoader;