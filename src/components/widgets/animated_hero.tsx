import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function AnimHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Computer Engineer", "Fullstack Developer"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="flex text-xl gap-2 md:text-4xl w-full ">
      <span className="flex text-spektr-cyan-50 w-auto justify-center whitespace-nowrap">
        I am a
      </span>
      <span className="relative flex w-full justify-start overflow-visible text-center md:pb-4 whitespace-nowrap">
        &nbsp;
        {titles.map((title, index) => (
          <motion.span
            key={index}
            className="absolute font-semibold"
            initial={{ opacity: 0, y: "-100" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              titleNumber === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: titleNumber > index ? -150 : 150,
                    opacity: 0,
                  }
            }
          >
            {title}
          </motion.span>
        ))}
      </span>
    </div>
  );
}

export { AnimHero };
