export const formatName = (title) => {
  if (title.length > 21) {
    title = title.substring(0, 18) + "...";
  }
  return title;
};
