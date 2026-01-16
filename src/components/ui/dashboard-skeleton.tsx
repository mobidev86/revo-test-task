function DashboardSkeleton() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-pulse">
      <div className="h-32 bg-muted/20 rounded-xl" />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
        <div className="xl:col-span-4 h-64 bg-muted/20 rounded-xl" />
        <div className="xl:col-span-8 h-64 bg-muted/20 rounded-xl" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="h-32 bg-muted/20 rounded-xl" />
        <div className="h-32 bg-muted/20 rounded-xl" />
        <div className="h-32 bg-muted/20 rounded-xl" />
      </div>

      <div className="h-48 bg-muted/20 rounded-xl" />
    </div>
  );
}

export default DashboardSkeleton;
