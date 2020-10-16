import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Backend",
    text: `Jag vill utvecklas inom backendprogrammering och söker mig till företag som kan hjälpa mig uppnå det.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Frontend",
    text: `Jag söker mig till frontendföretag då jag vill utvecklas inom ett område jag inte är så vass på.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Auth",
    text: `Söker mig till företag som kan hjälpa mig utvecklas inom säkerhetsfrågan.`,
  },
]
