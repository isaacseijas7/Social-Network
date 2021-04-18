export const removeDuplicates = (originalArray, prop) => {
  let newArray = [];
  let lookupObject = {};
  for (let key in originalArray) {
    lookupObject[originalArray[key][prop]] = originalArray[key];
  }
  for (let key in lookupObject) {
    newArray.push(lookupObject[key]);
  }
  return newArray;
};

const matchKey = (element, searchRegExp, keyObj, search) => {
  let results = [];
  if (!Array.isArray(keyObj)) {
    const $search = `${element[`${keyObj}`]}`.slice(0, search.length);
    let result = $search.match(searchRegExp);
    if (result) {
      results.push(element);
    }
  } else {
    for (const key of keyObj) {
      if (Object.prototype.hasOwnProperty.call(element, key)) {
        const $search =
          key === "id"
            ? `${element[key]}`.slice(0, search.length)
            : `${element[key]}`;
        let result = $search.match(searchRegExp);
        if (result) {
          results.push(element);
        }
      }
    }
  }

  results = removeDuplicates(results, "_id");
  return results;
};

export const searchInArrayObject = (myArray = [], search = "", keyObj = "") => {
  let results = [];
  const gt = search.split(" ");
  let expresion = "";
  gt.map((datos) => {
    expresion += `^(?=.*${datos})`;
    return expresion;
  });
  const searchRegExp = new RegExp(expresion);

  for (const key in myArray) {
    if (Object.prototype.hasOwnProperty.call(myArray, key)) {
      const element = myArray[key];
      const matchs = matchKey(element, searchRegExp, keyObj, search);
      if (matchs && matchs.length > 0) {
        results = results.concat(matchs);
      }
    }
  }

  return results;
};
