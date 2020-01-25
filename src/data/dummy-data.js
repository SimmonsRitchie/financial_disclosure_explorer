import BAKER from "./pdfs/PA-BAKER-MATTHEW-E.pdf"
import COSTA from "./pdfs/PA-COSTA-JR-JAY.pdf"
import faker from "faker"
import _ from "lodash"

const fakeData = (num) => {
  const data = []
  for (var i = 0; i < num; i++) {
    data.push({
  "q01_first_name": faker.name.firstName(),
  "q01_last_name": faker.name.lastName(),
  "q01_middle_initial": faker.name.firstName()[0],
  "q01_suffix":faker.name.suffix(),
  "q03_status": "Official",
  "q04_public_position": _.sample(["State Representative","State Senator"]),
  "meta_id": faker.random.uuid(),
  "meta_filing_year": _.sample(["2015","2016","2017","2018"]),
  "meta_pdf_path": BAKER    
})
  }
  return data
}

export const DATA = fakeData(70)
