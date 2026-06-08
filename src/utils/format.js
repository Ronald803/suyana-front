export const formatCellTextForSchedule = (text = "") => {
  const [first = "", last = ""] = text.trim().split(/\s+/);

  if (first.length < 5) {
    return last ? `${first} ${last[0]}.` : first;
  }

  return first.length > 6 ? `${first.slice(0, 6)}.` : first;
};
