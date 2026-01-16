import { Rocket } from "lucide-react";

interface ComingSoonProps {
  tabLabel: string;
  subTabLabel: string;
}

export default function ComingSoon({ tabLabel, subTabLabel }: ComingSoonProps) {
  const capitalizedSubTab =
    subTabLabel.charAt(0).toUpperCase() + subTabLabel.slice(1);
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center bg-white/50 rounded-2xl border border-dashed border-border/60 backdrop-blur-sm ">
      <div className="bg-lime/20 p-4 rounded-full mb-4">
        <Rocket className="w-8 h-8 text-lime-600" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {tabLabel == "Partners" ? "Partner's " + capitalizedSubTab : tabLabel}{" "}
        is Coming Soon!
      </h3>
      <p className="text-muted-foreground text-center max-w-md px-4">
        We're working hard to bring you the latest {tabLabel.toLowerCase()}{" "}
        insights. Stay tuned for updates on this feature.
      </p>
    </div>
  );
}
