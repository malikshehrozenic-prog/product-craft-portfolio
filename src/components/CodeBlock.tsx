interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const CodeBlock = ({ code, language = 'javascript', filename }: CodeBlockProps) => (
  <div className="rounded-xl border border-border bg-[#0d0d0d] overflow-hidden font-mono text-sm">
    <div className="flex items-center justify-between px-4 py-2 bg-secondary/30 border-b border-border">
      <span className="text-muted-foreground text-xs">
        {filename || `logic.${language}`}
      </span>
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/40" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
        <div className="w-3 h-3 rounded-full bg-green-500/40" />
      </div>
    </div>
    <pre className="p-4 overflow-x-auto text-muted-foreground leading-relaxed">
      <code>{code}</code>
    </pre>
  </div>
);

export default CodeBlock;