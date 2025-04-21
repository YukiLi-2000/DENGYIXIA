import { useState } from "react";
import { motion } from "framer-motion";

const catImage = process.env.PUBLIC_URL + "/cat.png";

const catLines = [
  "我感觉你今天有点难过…",
  "你是不是…又在一个人扛着呢？",
  "我在呢，我一直在等你回来。",
  "可以抱我一下吗？你不需要一个人撑着。",
  "如果你现在有冲动…先别急，我们一起做点事吧。",
  "别怕情绪来，它们也只是想被看到。",
  "不想说话也没关系，就让我陪着你。",
  "等等，咱们先呼吸一下，再决定下一步，好吗？",
  "我好想帮帮你……我们可以一起试试",
  "打开我，就是你在自救的证据，太棒了！"
];

export default function HomePage() {
  const [currentLine, setCurrentLine] = useState(catLines[0]);

  const handleCatClick = () => {
    const randomIndex = Math.floor(Math.random() * catLines.length);
    setCurrentLine(catLines[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <img
          src={catImage}
          alt="等一下猫咪"
          className="w-40 h-40 mx-auto cursor-pointer"
          onClick={handleCatClick}
        />
        <div className="mt-4 text-lg text-[#4e4e4e] bg-white px-4 py-2 rounded-2xl shadow max-w-xs mx-auto">
          {currentLine}
        </div>
      </motion.div>
      <button className="mt-6 bg-[#f7bfa0] hover:bg-[#f6a67e] text-white px-6 py-2 rounded-full shadow-lg transition duration-300">
        我现在有冲动
      </button>
    </div>
  );
}
