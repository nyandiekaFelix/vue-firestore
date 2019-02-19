export const firebaseQuery = async ref => {
  const query = await ref.get();
  const data = [];
  query.forEach(item => {
    data.push({
      itemId: item.id,
      ...item.data(),
    });
  });
  return data;
};
