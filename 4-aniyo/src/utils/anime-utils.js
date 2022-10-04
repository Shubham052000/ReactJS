export const formatName = (title) => {
  if (title.length > 20) {
    title = title.substring(0, 18) + "...";
  }
  return title;
};
