
function StatCard({value,name} : {value:string,name:string}) {
  return (
    <div className="space-y-1  text-center">
      <h1 className="text-foreground font-bold">{value}</h1>
      <h5 className="text-muted-foreground   font-bold">
        {name}
      </h5>
    </div>
  );
}

export default StatCard
