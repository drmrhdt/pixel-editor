export function findIndexById(itemId, targetArray) {
    const itemIndex = targetArray.findIndex(item => item.id === itemId);
    return itemIndex;
  }