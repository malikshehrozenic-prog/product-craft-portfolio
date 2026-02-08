import { motion } from "framer-motion";
import { Loader2, Sparkles, RefreshCw, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/data/caseStudies";
import { useInfographic } from "@/hooks/useInfographic";

interface InfographicHeroProps {
  caseStudy: CaseStudy;
}

const InfographicHero = ({ caseStudy }: InfographicHeroProps) => {
  const {
    isLoading,
    error,
    imageUrl,
    hasInfographic,
    generateInfographic,
    clearInfographic,
  } = useInfographic(caseStudy);

  return (
    <div className="mb-12">
      {/* Infographic Display */}
      {hasInfographic && imageUrl ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl">
            <img
              src={imageUrl}
              alt={`${caseStudy.title} - Visual Summary`}
              className="w-full h-auto object-cover"
            />
            
            {/* Overlay with regenerate option */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={generateInfographic}
                disabled={isLoading}
                className="gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                Regenerate
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearInfographic}
                className="gap-2 text-white hover:text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
                Remove
              </Button>
            </div>
          </div>
          
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
            <Sparkles className="w-3 h-3" />
            <span>AI-generated visual summary</span>
          </div>
        </motion.div>
      ) : (
        /* Generate Prompt */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border-2 border-dashed border-border/50 bg-muted/20 p-12 flex flex-col items-center justify-center text-center"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">
                Generating Visual Summary...
              </p>
              <p className="text-sm text-muted-foreground max-w-md">
                Creating a high-level infographic with key metrics, before/after transformation, and timeline. This takes about 15-30 seconds.
              </p>
            </>
          ) : error ? (
            <>
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                Generation Failed
              </p>
              <p className="text-sm text-destructive mb-4">{error}</p>
              <Button onClick={generateInfographic} variant="outline" className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <ImageIcon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                Visual Summary
              </p>
              <p className="text-sm text-muted-foreground max-w-md mb-6">
                Generate an AI-powered infographic showing the key metrics, problem-to-solution journey, and results at a glance.
              </p>
              <Button
                onClick={generateInfographic}
                className="gap-2"
                style={{ backgroundColor: caseStudy.color }}
              >
                <Sparkles className="w-4 h-4" />
                Generate Infographic
              </Button>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default InfographicHero;
