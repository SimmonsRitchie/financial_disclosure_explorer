import BAKER from "./pdfs/PA-BAKER-MATTHEW-E.pdf"
import COSTA from "./pdfs/PA-COSTA-JR-JAY.pdf"
import faker from "faker"
import _ from "lodash"

const fakeData = (num) => {
  const data = []
  for (var i = 0; i < num + 1; i++) {
    data.push({
  "q01_first_name": faker.name.firstName(),
  "q01_last_name": faker.name.lastName(),
  "q01_middle_initial": faker.name.firstName()[0],
  "q01_suffix":faker.name.suffix,
  "meta_filing_year": _.sample(["2015","2016","2017","2018"]),
  "meta_pdf_path": BAKER    
})
  }
  return data
}

export const DATA = fakeData(20)

// export const DATA = [
//   {
//   "q01_first_name":"Matthew",
//   "q01_last_name":"Baker",
//   "q01_middle_initial":"E",
//   "q01_suffix":"",
//   "meta_pdf_path": BAKER
// },
// {
//   "q01_first_name":"Jay",
//   "q01_last_name":"Costa",
//   "q01_middle_initial":"",
//   "q01_suffix":"Jr",
//   "meta_pdf_path": COSTA
// },
// ]