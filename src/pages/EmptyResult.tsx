function EmptyResult({result}:{result:string}) {
  return (
    <div className="w-full min-h-100 flex flex-col gap-4 items-center justify-center">
      <h2 className="text-foreground text-center">No result for "{result}"</h2>
      <h5 className="text-muted-foreground text-center">
        No result for dvbdddbdvdvd We are sorry but there are no products
        related to your search. Try other search
      </h5>
    </div>
  );
}

export default EmptyResult;
