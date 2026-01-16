import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ActivityItem = ({ activity }: { activity: any }) => (
  <div className="flex items-center border border-solid border-border/40 gap-3 px-1 py-1 min-w-fit hover:bg-muted/50 rounded-full transition-colors cursor-pointer group">
    {activity.avatar ? (
      <div className="relative">
        <Avatar className="h-8 w-8 ring-2 ring-white">
          <AvatarImage src={activity.avatar} />
          <AvatarFallback>{activity.name[0]}</AvatarFallback>
        </Avatar>
      </div>
    ) : (
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white ring-2 ring-white ${
          activity.color || "bg-blue-500"
        }`}
      >
        {activity.name[0]}
      </div>
    )}

    <div className="flex flex-row pr-2 items-center">
      <div className="flex items-start flex-col">
        <span className="text-xs font-bold text-foreground whitespace-nowrap">
          {activity.name}
        </span>
        {activity.description && (
          <span className="text-[10px] text-muted-foreground w-full max-w-[180px] truncate leading-tight">
            {activity.description}
          </span>
        )}
      </div>

      <span
        className={`h-1.5 ml-3 w-1.5 rounded-full ${
          activity.dotColor || "bg-green-500"
        }`}
      />
    </div>
  </div>
);

export default ActivityItem;
