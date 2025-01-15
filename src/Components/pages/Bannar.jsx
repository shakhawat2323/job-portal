import { easeInOut, easeOut } from "motion";
import { color, motion } from "motion/react";
import teamone from "../../../public/img/team1.jpg";
import teamtwo from "../../../public/img/team2.jpg";

const Bannar = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 mb-24 ml-32">
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={teamone}
            className="w-64 rounded-t-[40px]  border-l-8 border-b-8 border-black rounded-br-[40px] shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, delay: 5, repeat: Infinity }}
            src={teamtwo}
            className="w-64 rounded-t-[40px]  border-l-8 border-b-8 border-black rounded-br-[40px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Letest{" "}
            <motion.span
              animate={{ color: ["#831d9c", "#1da3e3", "#1da3e3", "#7e0c9a"] }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
            >
              jobs
            </motion.span>{" "}
            for you{" "}
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
