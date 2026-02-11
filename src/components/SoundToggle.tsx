import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

const SoundToggle = ({ onToggle }: { onToggle: () => boolean }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <motion.button
      onClick={() => {
        const next = onToggle();
        setEnabled(next);
      }}
      className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-hover"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle sounds"
    >
      {enabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
    </motion.button>
  );
};

export default SoundToggle;
