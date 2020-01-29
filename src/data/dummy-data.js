import BAKER from "./pdfs/PA-BAKER-MATTHEW-E.pdf"
import COSTA from "./pdfs/PA-COSTA-JR-JAY.pdf"
import faker from "faker"
import _ from "lodash"

// 08 Real Estate Interests
// Do you have reportable real estate interests?*(?)

// 09 Creditors
// Do you have reportable creditors?*(?)

// 10 Direct or Indirect Sources of Income
// Do you have any reportable direct or indirect sources of income?*(?)

// 11 Gifts
// Have you received any reportable gifts?*(?)

// 12 Transportation, Lodging, Hospitality
// Do you have any reportable transportation, lodging, or hospitality?*(?)

// 13 Office, Directorship, or Employment in any Business
// Did you hold any office, directorship, or employment in any business for the calendar year for which you are reporting?*(?)

// 14 Financial Interest in any Legal Entity in Business for Profit
// Do you have a reportable financial interest in any legal entity in business for profit?*(?)

// 15 Business Interests Transferred to Immediate Family Member
// Did you transfer any business interests to an immediate family member during the calendar year which you are reporting?*(?)


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
  "q08_real_estate_interests": "",
  "q09_creditors": "",
  "q10_income": "",
  "q11_gifts": "",
  "q12_transportation-lodging-hospitality": "",
  "q13_office-directorship-employment": "",
  "q14_financial_interest": "",
  "q15_business_interests": "",
  "meta_id": faker.random.uuid(),
  "meta_filing_year": _.sample(["2015","2016","2017","2018"]),
  "meta_pdf_path": _.sample([BAKER, COSTA])    
  // "meta_pdf_path": COSTA   
})
  }
  return data
}

export const DATA = fakeData(70)
