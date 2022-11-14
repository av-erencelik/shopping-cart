import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const navigateProductsPage = () => {
    navigate("/products");
  };
  return (
    <main className="home">
      <motion.h1
        className="home-title"
        initial={{ y: -500 }}
        animate={{ y: [-1500, 25, 0] }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        Sevdem Will Brighten Your Day
      </motion.h1>
      <motion.button
        className="order-button"
        initial={{ y: 1500 }}
        animate={{ y: [2500, 0] }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        onClick={navigateProductsPage}
      >
        Order Now
      </motion.button>
    </main>
  );
}
