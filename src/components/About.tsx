import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "3", label: "Projects Completed" },
    { number: "4+", label: "Technologies Mastered" },
    { number: "100%", label: "Learning Mindset" },
    { number: "∞", label: "Problem Solving" },
  ];

  return (
    <section
  id="about"
  className="section-padding relative"
  style={{
    backgroundColor: "#ffffff",
    backgroundImage: "radial-gradient(rgba(27,128,96,0.25) 1.5px, transparent 1.5px)",
    backgroundSize: "24px 24px",
  }}
  ref={ref}
>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
           <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-xs mx-auto">
  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-primary shadow-2xl group bg-white">
    <img
      src="https://res.cloudinary.com/tf0djpnz/image/upload/c_fill,g_face,ar_4:5,w_800,q_auto,f_auto/v1793693985/Professional_Portrait_in_Navy_Blazer_q3i6dx.png"
      alt="Aditya Patil"
      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  </div>
</div>
          </motion.div>

          {/* Content Side */}
          <div>

            {/* About Me */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              About Me
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6"
            >
              Building Modern
              <span className="text-gradient"> Web </span>
              Applications
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              I'm a Computer Science student and Full Stack Developer
              passionate about creating modern, scalable, and user-friendly
              web applications.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              My focus is on writing clean code, building responsive user
              interfaces, and developing efficient backend systems. I
              continuously learn and explore new technologies to improve my
              skills and deliver better digital experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
  key={stat.label}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{
    duration: 0.5,
    delay: 0.5 + index * 0.1,
  }}
  className="text-center p-4 rounded-xl bg-primary shadow-lg"
>

  {/* Number Area */}
  <div className="h-10 md:h-12 flex items-center justify-center">
    <span
      className={`font-heading text-white ${
        stat.number === "∞"
          ? "text-4xl md:text-6xl font-normal leading-none"
          : "text-2xl md:text-3xl font-bold leading-none"
      }`}
    >
      {stat.number}
    </span>
  </div>

  {/* Label */}
  <p className="text-xs text-white/80 mt-1 text-center">
    {stat.label}
  </p>

</motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;