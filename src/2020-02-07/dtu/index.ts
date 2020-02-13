function process(member: any, status: any, medium: any) {
  let tags = [];
  if (member.cohort.inNetwork) {
    tags.push("Potentially In Network");
  }

  if (typeof status === "string") {
    const tag = status
      .toLowerCase()
      .split("_")
      .map((s): string => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase())
      .join(" ");

    tags.push(tag);
  }

  if (medium === "In Person") {
    tags.push(medium);
  }

  return tags;
}
