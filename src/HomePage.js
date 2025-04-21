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
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col justify-between px-4 py-12">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <img
          src={catImage}
          alt="等一下猫咪"
          className="w-32 sm:w-36 md:w-40 lg:w-44 h-auto cursor-pointer"
          onClick={handleCatClick}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white px-6 py-5 rounded-2xl shadow text-xl sm:text-2xl text-[#4e4e4e] max-w-sm text-center"
        >
          {currentLine}
        </motion.div>
      </div>

      {/* 底部导航栏 */}
      <div className="mt-12 flex justify-around items-center bg-white rounded-t-2xl shadow-inner py-4 text-[#6b4c4c] text-lg">
        <div className="flex flex-col items-center">
          <span className="text-4xl">📋</span>
          <span className="text-lg sm:text-xl mt-1">任务</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">📝</span>
          <span className="text-lg sm:text-xl mt-1">记录</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">😊</span>
          <span className="text-lg sm:text-xl mt-1">陪伴</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">⚠️</span>
          <span className="text-lg sm:text-xl mt-1">紧急</span>
        </div>
      </div>
    </div>
  );
}
