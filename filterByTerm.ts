interface Link {
  url: string;
}

function filterByTerm(input: Array<Link>, searchTerm: string) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");

  const regex = new RegExp(searchTerm, "i");

  return input.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

filterByTerm(
  [{ url: "String3" }, { url: "String2" }, { url: "String3" }],
  "java"
);
