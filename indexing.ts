// Interface (Like a Model)
interface Link {
  description?: string;
  id?: number;
  url: string;
  [index: string]: any; // Access any key of that object through an index of type string, which in turn returns another string
}

// Extending Interfaces
interface TranslatedLink extends Link {
  language: string;
}

function filterByTerm(
  input: Array<Link>,
  searchTerm: string,
  lookupKey: string = "url"
) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");

  const regex = new RegExp(searchTerm, "i");

  return input.filter(function(arrayElement) {
    return arrayElement[lookupKey].match(regex);
  });
}
