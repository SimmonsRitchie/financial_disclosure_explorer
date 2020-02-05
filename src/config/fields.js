/* Defines what fields in our data can be searched and how they can be searched*/

export const FIELDS = [
  {
    display_name: "Filing year",
    value: "meta_filing_year",
    inputType: "select",
    search: true,
    display: false
  },
  {
    display_name: "First name",
    value: "q01_first_name",
    inputType: "text",
    search: true,
    display: false
  },
  {
    display_name: "Last name",
    value: "q01_last_name",
    inputType: "text",
    search: true,
    display: false
  },
  {
    display_name: "Middle name",
    value: "q01_middle_name",
    inputType: "text",
    search: true,
    display: false
  },
  {
    display_name: "Status",
    value: "q03_status",
    inputType: "select",
    search: true,
    display: true
  },
  {
    display_name: "Public position",
    value: "q04_public_position",
    inputType: "select",
    search: true,
    display: true
  },
  {
    display_name: "Real estate interests",
    value: "q08_real_estate_interests",
    inputType: "text",
    search: true,
    display: true
  },
  {
    display_name: "Creditors",
    value: "q09_creditors",
    inputType: "text",
    search: true,
    display: true
  },
  {
    display_name: "Income",
    value: "q10_income",
    inputType: "text",
    search: true,
    display: true
  },
  {
    display_name: "Gifts",
    value: "q11_gifts",
    inputType: "text",
    search: true,
    display: true
  },
  {
    display_name: "Transportation, lodging, hospitality",
    value: "q12_transportation_lodging_hospitality",
    inputType: "text",
    search: true,
    display: true
  },
  {
    display_name: "Office, directorship or employment",
    value: "q13_office_directorship_employment",
    inputType: "text",
    search: true,
    display: true
  },
  {
    display_name: "Financial interests",
    value: "q14_financial_interest",
    inputType: "text",
    search: true,
    display: true
  },
  {
    display_name: "Business interests",
    value: "q15_business_interests",
    inputType: "text",
    search: true,
    display: true
  },
]
export const DISPLAY_FIELDS = FIELDS.filter(field => field.display)

export const SEARCH_FIELDS = FIELDS.filter(field => field.search)
