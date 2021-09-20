export function currentUsersGets(pageSize, currentPage, totalUses){
  let from ;
  let to ;
  if(currentPage>1){
   from = (currentPage-1) * pageSize;
   to = currentPage * pageSize;
  }else {
   from = 0;
   to = currentPage * pageSize;
  }
  return totalUses.slice(from, to);
}

