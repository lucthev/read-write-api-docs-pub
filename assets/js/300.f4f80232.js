(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{878:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"balances-v3-1-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#balances-v3-1-2"}},[t._v("#")]),t._v(" Balances - v3.1.2")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#endpoints"}},[t._v("Endpoints")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#get-accountsaccountidbalances"}},[t._v("GET /accounts/{AccountId}/balances")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get-balances"}},[t._v("GET /balances")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#resource-definition"}},[t._v("Resource Definition")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#uml-diagram"}},[t._v("UML Diagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#notes"}},[t._v("Notes")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#permission-codes"}},[t._v("Permission Codes")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-dictionary"}},[t._v("Data Dictionary")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#usage-examples"}},[t._v("Usage Examples")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#specific-account"}},[t._v("Specific Account")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#get-account-balances-request"}},[t._v("Get Account Balances Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get-account-balances-response"}},[t._v("Get Account Balances Response")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#bulk"}},[t._v("Bulk")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#get-balances-request"}},[t._v("Get Balances Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get-balances-response"}},[t._v("Get Balances Response")])])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("The balances resource is used by an AISP to retrieve in bulk or single account balance information for a specific AccountId for that the PSU has authorised to access.")]),t._v(" "),e("p",[t._v("This resource description should be read in conjunction with a compatible Account Information Services API Profile.")]),t._v(" "),e("h2",{attrs:{id:"endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Resource")]),t._v(" "),e("th",[t._v("HTTP Operation")]),t._v(" "),e("th",[t._v("Endpoint")]),t._v(" "),e("th",[t._v("Mandatory?")]),t._v(" "),e("th",[t._v("Scope")]),t._v(" "),e("th",[t._v("Grant Type")]),t._v(" "),e("th",[t._v("Idempotency Key")]),t._v(" "),e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Request Object")]),t._v(" "),e("th",[t._v("Response Object")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("balances")]),t._v(" "),e("td",[t._v("GET")]),t._v(" "),e("td",[t._v("GET /accounts/{AccountId}/balances")]),t._v(" "),e("td",[t._v("Mandatory")]),t._v(" "),e("td",[t._v("accounts")]),t._v(" "),e("td",[t._v("Authorization Code")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBReadBalance1")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("balances")]),t._v(" "),e("td",[t._v("GET")]),t._v(" "),e("td",[t._v("GET /balances")]),t._v(" "),e("td",[t._v("Optional")]),t._v(" "),e("td",[t._v("accounts")]),t._v(" "),e("td",[t._v("Authorization Code")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("Pagination")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBReadBalance1")])])])]),t._v(" "),e("h3",{attrs:{id:"get-accounts-accountid-balances"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-accounts-accountid-balances"}},[t._v("#")]),t._v(" GET /accounts/{AccountId}/balances")]),t._v(" "),e("p",[t._v("An AISP may retrieve the account balance information resource for a specific AccountId (which is retrieved in the call to GET /accounts).")]),t._v(" "),e("h3",{attrs:{id:"get-balances"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-balances"}},[t._v("#")]),t._v(" GET /balances")]),t._v(" "),e("p",[t._v("If an ASPSP has implemented the bulk retrieval endpoints, an AISP may optionally retrieve the account information resources in bulk.\nThis will retrieve the resources for all authorised accounts linked to the account-request.")]),t._v(" "),e("h2",{attrs:{id:"data-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data Model")]),t._v(" "),e("p",[t._v("The OBReadBalance1 object will be used for the call to:")]),t._v(" "),e("ul",[e("li",[t._v("GET /accounts/{AccountId}/balances")]),t._v(" "),e("li",[t._v("GET /balances")])]),t._v(" "),e("h3",{attrs:{id:"resource-definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resource-definition"}},[t._v("#")]),t._v(" Resource Definition")]),t._v(" "),e("p",[t._v("This resource represents the net increases and decreases in an account (AccountId) at a specific point in time.")]),t._v(" "),e("p",[t._v("An account (AccountId) may have multiple balance types (these follow the standard ISO 20022 balance type enumerations). If an ASPSP includes a credit line in an available balance, then the balance representation will have a section for the credit line amount and type.")]),t._v(" "),e("h3",{attrs:{id:"uml-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/Balances/OBReadBalance1.gif",alt:" OBReadBalance1.gif "}})]),t._v(" "),e("h3",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),e("ul",[e("li",[t._v("Multiple balances may be returned (each with a different value for Type) for an account. This is for ASPSPs that show multiple balances in their online channels.")]),t._v(" "),e("li",[t._v("The CreditLine section may be repeated as multiple credit lines may be included in an available balance.")]),t._v(" "),e("li",[t._v("A DateTime element has been used instead of a complex choice element of Date and DateTime. Where time elements do not exist in ASPSP systems, the time portion of the DateTime element will be defaulted to 00:00:00+00:00.")])]),t._v(" "),e("h3",{attrs:{id:"permission-codes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permission-codes"}},[t._v("#")]),t._v(" Permission Codes")]),t._v(" "),e("p",[t._v("The resource requires the ReadBalances permission. The resource response payload does not differ depending on the permissions granted.")]),t._v(" "),e("h3",{attrs:{id:"data-dictionary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Occurrence")]),t._v(" "),e("th",[t._v("XPath")]),t._v(" "),e("th",[t._v("EnhancedDefinition")]),t._v(" "),e("th",[t._v("Class")]),t._v(" "),e("th",[t._v("Codes")]),t._v(" "),e("th",[t._v("Pattern")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("OBReadBalance1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBReadBalance1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBReadBalance1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Data")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBReadDataBalance1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Balance")]),t._v(" "),e("td",[t._v("1..n")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance")]),t._v(" "),e("td",[t._v("Set of elements used to define the balance details.")]),t._v(" "),e("td",[t._v("OBCashBalance1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("AccountId")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/AccountId")]),t._v(" "),e("td",[t._v("A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.")]),t._v(" "),e("td",[t._v("Max40Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("CreditDebitIndicator")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/CreditDebitIndicator")]),t._v(" "),e("td",[t._v("Indicates whether the balance is a credit or a debit balance. Usage: A zero balance is considered to be a credit balance.")]),t._v(" "),e("td",[t._v("OBCreditDebitCode")]),t._v(" "),e("td",[t._v("Credit Debit")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/Type")]),t._v(" "),e("td",[t._v("Balance type, in a coded form.")]),t._v(" "),e("td",[t._v("OBBalanceType1Code")]),t._v(" "),e("td",[t._v("ClosingAvailable ClosingBooked ClosingCleared Expected ForwardAvailable Information InterimAvailable InterimBooked InterimCleared OpeningAvailable OpeningBooked OpeningCleared PreviouslyClosedBooked")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("DateTime")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/DateTime")]),t._v(" "),e("td",[t._v("Indicates the date (and time) of the balance.")]),t._v(" "),e("td",[t._v("ISODateTime")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Amount")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/Amount")]),t._v(" "),e("td",[t._v("Amount of money of the cash balance.")]),t._v(" "),e("td",[t._v("OBActiveOrHistoricCurrencyAndAmount")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Amount")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/Amount/Amount")]),t._v(" "),e("td",[t._v("A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.")]),t._v(" "),e("td",[t._v("OBActiveCurrencyAndAmount_SimpleType")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("^\\d{1,13}.\\d{1,5}$")])]),t._v(" "),e("tr",[e("td",[t._v("Currency")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/Amount/Currency")]),t._v(" "),e("td",[t._v('A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".')]),t._v(" "),e("td",[t._v("ActiveOrHistoricCurrencyCode")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("^[A-Z]{3,3}$")])]),t._v(" "),e("tr",[e("td",[t._v("CreditLine")]),t._v(" "),e("td",[t._v("0..n")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/CreditLine")]),t._v(" "),e("td",[t._v("Set of elements used to provide details on the credit line.")]),t._v(" "),e("td",[t._v("OBCreditLine1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Included")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/CreditLine/Included")]),t._v(" "),e("td",[t._v("Indicates whether or not the credit line is included in the balance of the account. Usage: If not present, credit line is not included in the balance amount of the account.")]),t._v(" "),e("td",[t._v("xs:boolean")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/CreditLine/Type")]),t._v(" "),e("td",[t._v("Limit type, in a coded form.")]),t._v(" "),e("td",[t._v("OBExternalLimitType1Code")]),t._v(" "),e("td",[t._v("Available Credit Emergency Pre-Agreed Temporary")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Amount")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/CreditLine/Amount")]),t._v(" "),e("td",[t._v("Amount of money of the credit line.")]),t._v(" "),e("td",[t._v("OBActiveOrHistoricCurrencyAndAmount")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Amount")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/CreditLine/Amount/Amount")]),t._v(" "),e("td",[t._v("A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.")]),t._v(" "),e("td",[t._v("OBActiveCurrencyAndAmount_SimpleType")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("^\\d{1,13}.\\d{1,5}$")])]),t._v(" "),e("tr",[e("td",[t._v("Currency")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBReadBalance1/Data/Balance/CreditLine/Amount/Currency")]),t._v(" "),e("td",[t._v('A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".')]),t._v(" "),e("td",[t._v("ActiveOrHistoricCurrencyCode")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("^[A-Z]{3,3}$")])])])]),t._v(" "),e("h2",{attrs:{id:"usage-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-examples"}},[t._v("#")]),t._v(" Usage Examples")]),t._v(" "),e("h3",{attrs:{id:"specific-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specific-account"}},[t._v("#")]),t._v(" Specific Account")]),t._v(" "),e("h4",{attrs:{id:"get-account-balances-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-account-balances-request"}},[t._v("#")]),t._v(" Get Account Balances Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /accounts/22289/balances HTTP/1.1\nAuthorization: Bearer Az90SAOJklae\nx-fapi-auth-date: Sun, 10 Sep 2017 19:43:31 GMT\nx-fapi-customer-ip-address: 104.25.212.99\nx-fapi-interaction-id: 93bac548-d2de-4546-b106-880a5018460d\nAccept: application/json\n")])])]),e("h4",{attrs:{id:"get-account-balances-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-account-balances-response"}},[t._v("#")]),t._v(" Get Account Balances Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HTTP/1.1 200 OK\nx-fapi-interaction-id: 93bac548-d2de-4546-b106-880a5018460d\nContent-Type: application/json\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Balance"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AccountId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22289"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1230.00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Currency"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GBP"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CreditDebitIndicator"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Credit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"InterimAvailable"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-04-05T10:43:07+00:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CreditLine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Included"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000.00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Currency"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GBP"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pre-Agreed"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Links"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Self"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.alphabank.com/open-banking/v3.1/aisp/accounts/22289/balances/"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Meta"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"TotalPages"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"bulk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bulk"}},[t._v("#")]),t._v(" Bulk")]),t._v(" "),e("h4",{attrs:{id:"get-balances-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-balances-request"}},[t._v("#")]),t._v(" Get Balances Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /balances HTTP/1.1\nAuthorization: Bearer Az90SAOJklae\nx-fapi-auth-date:  Sun, 10 Sep 2017 19:43:31 GMT\nx-fapi-customer-ip-address: 104.25.212.99\nx-fapi-interaction-id: 93bac548-d2de-4546-b106-880a5018460d\nAccept: application/json\n")])])]),e("h4",{attrs:{id:"get-balances-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-balances-response"}},[t._v("#")]),t._v(" Get Balances Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HTTP/1.1 200 OK\nx-fapi-interaction-id: 93bac548-d2de-4546-b106-880a5018460d\nContent-Type: application/json\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Balance"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AccountId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22289"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1230.00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Currency"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GBP"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CreditDebitIndicator"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Credit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"InterimAvailable"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-04-05T10:43:07+00:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CreditLine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Included"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000.00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Currency"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GBP"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pre-Agreed"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AccountId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"31820"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57.36"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Currency"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GBP"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CreditDebitIndicator"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Debit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"InterimBooked"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-05-02T14:22:09+00:00"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Links"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Self"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.alphabank.com/open-banking/v3.1/aisp/balances/"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Meta"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"TotalPages"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);