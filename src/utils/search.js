export const applySearchTerms = (searchText, searchData) => {
  /* This searches every value of an array of objects for keywords and returns an array of objects 
  where at least one keyword matches

  1) creates a 'megaSearchString' val by combining all values from the keys in each object in our list of objects into a single
  string.
  2) If any part of searchText contains a pair of quotes and more than one character within those quotes, then
  function will search megaSearchString for an exact match of the chars between those quotes.
  3) If not, then a 'non exact' search will be conducted: searchText (ie. our search terms) into an array by splitting on spaces between words
  4) We loop over the that array of chunk and returns all objects where a chunk partially or wholly matches megaSearchText
  Note: If a user types in the same search term 'sally sally sally' it will match with a megaSearchString of 'sally' because
  each chunk is searched independent of others.
  */
  let cleanSearchText = searchText.trim().replace(/[^a-zA-Z0-9\" ]/g, "");
  if (searchText === "") {
    return searchData;
  } else {
    return searchData.filter(item => {
      // get all item fields
      const searchFields = Object.keys(item);
      const excludeFields = ["meta_pdf_path"];
      const cleanSearchFields = searchFields.filter(
        val => !excludeFields.includes(val)
      );
      // combined data to be searched into one big string
      const searchDataArray = cleanSearchFields.map(field => item[field]);
      const megaSearchString = searchDataArray.join(" ");
      // check if search term contains quotes - do exact search based on text within quotation marks if it does
      const regexQuotes = /\"(?<exactSearch>.+)\"/i;
      const searchTermHasQuotes = cleanSearchText.match(regexQuotes);
      if (searchTermHasQuotes) {
        // If search term contains quotation marks then do a search of exactly that term
        const regexSearchText = new RegExp(
          searchTermHasQuotes.groups.exactSearch,
          "i"
        );
        return megaSearchString.match(regexSearchText);
      } else {
        // If search term doesn't contain quotation marks then do a search of each word
        cleanSearchText = cleanSearchText.replace(/\"/g, "");
        const searchTextChunks = cleanSearchText.split(" ");
        let chunkCount = 0;
        for (const chunk of searchTextChunks) {
          const regexSearchText = new RegExp(chunk, "i");
          if (megaSearchString.match(regexSearchText)) {
            chunkCount += 1;
          }
        }
        return chunkCount === searchTextChunks.length;
      }
    });
  }
};
