// Interface (Like a Model)
interface Link {
  description?: string;
  id?: number;
  url: string;
  [index: string]: any;
}

// Extending Interfaces
interface TranslatedLink extends Link {
  language: string;
}

function filterByTerm(
  input: Array<Link>,
  searchTerm: string,
  lookupKey: string
) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");
  if (!lookupKey) throw Error("lookupkey cannot be empty");

  const regex = new RegExp(searchTerm, "i");

  return input.filter(arrayElement => {
    return arrayElement[lookupKey].match(regex);
  });
}

// Typing Variables
const obj1: Link = { url: "String1" };
const obj2: Link = { url: "String2" };
const obj3: Link = { url: "String3" };

const arrOfLinks: Array<Link> = [obj1, obj2, obj3];

const term: string = "java";

console.log(filterByTerm(arrOfLinks, term, "url"));

const link1: TranslatedLink = {
  description:
    "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
  id: 1,
  url: "www.valentinog.com/typescript/",
  language: "en"
};
