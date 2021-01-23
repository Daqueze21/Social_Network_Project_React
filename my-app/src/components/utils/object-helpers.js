export const updateObjDataInArray = (
   arrToUpdate,
   objId,
   objPropName,
   newPropsObj
) => {
   return arrToUpdate.map(u => {
      if (u[objPropName] === objId) {
         return { ...u, ...newPropsObj };
      }
      return u;
   });
};
