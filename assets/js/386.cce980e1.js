(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{1021:function(t,e,i){"use strict";i.r(e);var n=i(6),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"domestic-payment-message-formats-v3-1-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#domestic-payment-message-formats-v3-1-5"}},[t._v("#")]),t._v(" Domestic Payment Message Formats - v3.1.5 ")]),t._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"#iso-20022"}},[t._v("ISO 20022")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#iso-8583"}},[t._v("ISO 8583")]),t._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"#mapping"}},[t._v("Mapping")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#notes"}},[t._v("Notes")])])])]),t._v(" "),i("li",[i("a",{attrs:{href:"#bacs-std18"}},[t._v("BACS STD18")]),t._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"#mapping-1"}},[t._v("Mapping")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#notes-1"}},[t._v("Notes")])])])]),t._v(" "),i("li",[i("a",{attrs:{href:"#mt103"}},[t._v("MT103")]),t._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"#mapping-2"}},[t._v("Mapping")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#notes-2"}},[t._v("Notes")])])])])]),t._v(" "),i("h2",{attrs:{id:"iso-20022"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iso-20022"}},[t._v("#")]),t._v(" ISO 20022")]),t._v(" "),i("p",[t._v("The Initiation section of the Payment API payloads is based on the ISO 20022 pain.001 XML standard and we have used ISO 20022 message elements or components where possible. However, has been adapted for APIs based as per our design principles.")]),t._v(" "),i("p",[t._v("Deviations from the pain.001 XML standard are:")]),t._v(" "),i("ul",[i("li",[t._v("The pain.001 header section and trailer sections have been removed as these are not required for a RESTful API")]),t._v(" "),i("li",[t._v("Only required fields have been included in the Initiation objects. This has meant:\n"),i("ul",[i("li",[t._v("The separate CreditTransferTransactionInformation section in pain.001 which is a repeating group for multi-credit payments, has been removed and flattened.")]),t._v(" "),i("li",[t._v("PaymentInformationIdentification not required - we also have a InstructionIdentification.")]),t._v(" "),i("li",[t._v("PaymentMethod is not required as this is always immediate execution for the ASPSP.")]),t._v(" "),i("li",[t._v("RequestedExecutionDate is not required as this is always as soon as possible - which may differ between FPS and Bacs payments.")]),t._v(" "),i("li",[t._v("Debtor / DebtorAccount are optional as the debtor details are not always known to the PISP submitting the payment setup or submit.")])])]),t._v(" "),i("li",[t._v("The Payment Initiation team has requested a flatter structure for the payload:\n"),i("ul",[i("li",[t._v("InstructionIdentification and EndToEndIdentification moved to the top level (instead of embedding within Payment Order Identification).")]),t._v(" "),i("li",[t._v("DebtorAccount and CreditorAccount are simplified to only include the SchemeName and Identification.")])])])]),t._v(" "),i("h2",{attrs:{id:"iso-8583"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iso-8583"}},[t._v("#")]),t._v(" ISO 8583")]),t._v(" "),i("p",[t._v("The ISO 8583 message format is used for the Faster Payments Scheme (FPS).")]),t._v(" "),i("p",[t._v("Execution:")]),t._v(" "),i("ul",[i("li",[t._v("The processing of payments via the FPS scheme is business as usual processing - i.e., no change.")]),t._v(" "),i("li",[t._v("FPS scheme requirements (are not formally part of the Open Banking API Specification, but are included for guidance):\n"),i("ul",[i("li",[t._v("The field 61.1 PAYMENT SUB-TYPE will be set by the FPS Institution with a "),i("strong",[t._v("A")]),t._v(" {**} prefix for any FPS transaction initiated by a PISP. Values within {**} will ordinarily be “00” unless the PISP initiated payment requires usage of other facilities (as indicated by the usage of an FPS sub-type code).")]),t._v(" "),i("li",[t._v("There is also a requirement from the FPS scheme to identify the PISP via the field 122 REGULATORY REPORTING")])])])]),t._v(" "),i("p",[t._v('This is the mapping from the Payment API Initiation section to the relevant FPS scheme fields with the use of the "UK.OBIE.SortCodeAccountNumber" account identification SchemeName.')]),t._v(" "),i("p",[t._v("All required fields in the ISO 8583 message can be generated from the Initiation section of the payload or from the ASPSP, for domestic-payments and domestic-scheduled-payments.")]),t._v(" "),i("p",[t._v("In the size column, highlighted in "),i("strong",[t._v("bold")]),t._v(" are the fields which are smaller in size than the corresponding ISO 20022 field.")]),t._v(" "),i("p",[t._v("In the case that a PISP sets up a payment-order consent with a larger field size (e.g., EndToEndIdentification, or InstructedAmount) than the eventual scheme field size - it will be up to the ASPSP to decide whether to reject the payment-order consent or truncate the field.")]),t._v(" "),i("h3",{attrs:{id:"mapping"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mapping"}},[t._v("#")]),t._v(" Mapping")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("XPath")]),t._v(" "),i("th",[t._v("Occurrence")]),t._v(" "),i("th",[t._v("Class")]),t._v(" "),i("th",[t._v("ISO8583 BIT")]),t._v(" "),i("th",[t._v("Field Name")]),t._v(" "),i("th",[t._v("Mandatory")]),t._v(" "),i("th",[t._v("Size")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("EndToEndIdentification")]),t._v(" "),i("td",[t._v("Initiation/EndToEndIdentification")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max35Text")]),t._v(" "),i("td",[t._v("62")]),t._v(" "),i("td",[t._v("END TO END REFERENCE")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[i("strong",[t._v("31")])])]),t._v(" "),i("tr",[i("td",[t._v("Amount")]),t._v(" "),i("td",[t._v("Initiation/InstructedAmount/Amount")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("TotalDigits: 18, FractionDigits: 5")]),t._v(" "),i("td",[t._v("6")]),t._v(" "),i("td",[t._v("AMOUNT")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("14")])])]),t._v(" "),i("tr",[i("td",[t._v("Identification")]),t._v(" "),i("td",[t._v("Initiation/DebtorAccount/Identification")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max256Text")]),t._v(" "),i("td",[t._v("42 43")]),t._v(" "),i("td",[t._v("ORIGINATING CREDIT INSTITUTION "),i("br"),i("br"),t._v("ORIGINATING CUSTOMER ACCOUNT NUMBER")]),t._v(" "),i("td",[t._v("M "),i("br"),t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("11")]),t._v(" "),i("br"),i("br"),i("strong",[t._v("34")])])]),t._v(" "),i("tr",[i("td",[t._v("Identification")]),t._v(" "),i("td",[t._v("Initiation/CreditorAccount/Identification")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max256Text")]),t._v(" "),i("td",[t._v("95 35")]),t._v(" "),i("td",[t._v("BENEFICIARY CREDIT INSTITUTION "),i("br"),i("br"),t._v("BENEFICIARY CUSTOMER ACCOUNT NUMBER")]),t._v(" "),i("td",[t._v("M M")]),t._v(" "),i("td",[i("strong",[t._v("11")]),t._v(" "),i("br"),i("br"),i("strong",[t._v("34")])])]),t._v(" "),i("tr",[i("td",[t._v("Name")]),t._v(" "),i("td",[t._v("Initiation/CreditorAccount/Name")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max70Text")]),t._v(" "),i("td",[t._v("118")]),t._v(" "),i("td",[t._v("BENEFICIARY CUSTOMER ACCOUNT NAME")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[i("strong",[t._v("40")])])]),t._v(" "),i("tr",[i("td",[t._v("SecondaryIdentification")]),t._v(" "),i("td",[t._v("Initiation/CreditorAccount/SecondaryIdentification")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max34Text")]),t._v(" "),i("td",[t._v("120")]),t._v(" "),i("td",[t._v("REFERENCE INFORMATION")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[i("strong",[t._v("18")])])]),t._v(" "),i("tr",[i("td",[t._v("Unstructured")]),t._v(" "),i("td",[t._v("Initiation/RemittanceInformation/Unstructured")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max140Text")]),t._v(" "),i("td",[t._v("121")]),t._v(" "),i("td",[t._v("REMITTANCE INFORMATION")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[t._v("140")])]),t._v(" "),i("tr",[i("td",[t._v("Reference")]),t._v(" "),i("td",[t._v("Initiation/RemittanceInformation/Reference")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max35Text")]),t._v(" "),i("td",[t._v("120")]),t._v(" "),i("td",[t._v("REFERENCE INFORMATION")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[i("strong",[t._v("18")])])])])]),t._v(" "),i("h3",{attrs:{id:"notes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),i("ul",[i("li",[t._v("If the Initiation/CreditorAccount/SecondaryIdentification field is populated - this field must be mapped to field 120 REFERENCE INFORMATION as this will be used for the Creditor Agent to identify the account (i.e., the roll numbers in the building society context).")]),t._v(" "),i("li",[t._v("However, if the Initiation/CreditorAccount/SecondaryIdentification is "),i("strong",[t._v("not")]),t._v(" populated then field 120 REFERENCE INFORMATION must be populated with the Initiation/RemittanceInformation/Reference field.")]),t._v(" "),i("li",[t._v("If both Initiation/CreditorAccount/SecondaryIdentification and Initiation/RemittanceInformation/Reference are populated by the PISP, only the SecondaryIdentification will be mapped to field 120 REFERENCE INFORMATION. Whether the Initiation/RemittanceInformation/Reference is used in any other ASPSP systems is for the ASPSP to decide.")]),t._v(" "),i("li",[t._v("Field 116 ORIGINATING CUSTOMER ACCOUNT NAME must be populated from the ASPSP's system of record")]),t._v(" "),i("li",[t._v('Where the Initiation/DebtorAccount/SchemeName field is populated with "UK.OBIE.SortCodeAccountNumber", the Initiation/DebtorAccount/Identification field will be populated with a 14 digit field comprised of a 6 digit Sort Code (mapped to field 42 ORIGINATING CREDIT INSTITUTION) and 8 digit Account Number (mapped to field 43 ORIGINATING CUSTOMER ACCOUNT NUMBER)')]),t._v(" "),i("li",[t._v('Where the Initiation/CreditorAccount/SchemeName field is populated with "UK.OBIE.SortCodeAccountNumber", the Initiation/CreditorAccount/Identification field will be populated with a 14 digit field comprised of a 6 digit Sort Code (mapped to field 95 BENEFICIARY CREDIT INSTITUTION) and 8 digit Account Number (mapped to field 35 BENEFICIARY CUSTOMER ACCOUNT NUMBER)')]),t._v(" "),i("li",[t._v("CreditorPostalAddress is not supported in FPS.")])]),t._v(" "),i("h2",{attrs:{id:"bacs-std18"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bacs-std18"}},[t._v("#")]),t._v(" BACS STD18")]),t._v(" "),i("p",[t._v("The BACS STD18 message format is used for the BACS scheme.")]),t._v(" "),i("p",[t._v("Execution:")]),t._v(" "),i("ul",[i("li",[t._v("The processing of payments via the Bacs scheme is business as usual processing i.e., no change")]),t._v(" "),i("li",[t._v("Expectation is that a Bank Grade user will be able to bulk up payments generated via the Payment API and create the appropriate file and submission structure (as per usual processing). None of these details will need to be generated via the Payment API.")]),t._v(" "),i("li",[t._v("The mapping below uses theBacs Electronic Funds Transfer, File Structures (PN5011) document and the section on 2.6.1 CREDIT AND DEBIT PAYMENT INSTRUCTIONS (BANK GRADE USERS)")])]),t._v(" "),i("p",[t._v('This is the mapping from the Payment API Initiation section to the relevant Bacs scheme fields with the use of the "UK.OBIE.SortCodeAccountNumber" account identification SchemeName.')]),t._v(" "),i("p",[t._v("All required fields in the BACS STD18 message can all be generated from the Initiation section of the payload or from the ASPSP for domestic-payments and domestic-scheduled-payments.")]),t._v(" "),i("p",[t._v("In the size column, highlighted in "),i("strong",[t._v("bold")]),t._v(" are the fields which are smaller in size than the corresponding ISO 20022 field.")]),t._v(" "),i("p",[t._v("In the case that a PISP sets up a payment-order consent with a larger field size (e.g., EndToEndIdentification, or InstructedAmount) than the eventual scheme field size, it will be up to the ASPSP to decide whether to reject the payment-order consent or truncate the field.")]),t._v(" "),i("h3",{attrs:{id:"mapping-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mapping-2"}},[t._v("#")]),t._v(" Mapping")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("XPath")]),t._v(" "),i("th",[t._v("Occurrence")]),t._v(" "),i("th",[t._v("Class")]),t._v(" "),i("th",[t._v("STD18 Field")]),t._v(" "),i("th",[t._v("Field Name")]),t._v(" "),i("th",[t._v("Mandatory ?")]),t._v(" "),i("th",[t._v("Size")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Amount")]),t._v(" "),i("td",[t._v("Initiation/InstructedAmount/Amount")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("TotalDigits: 18, FractionDigits: 5")]),t._v(" "),i("td",[t._v("8")]),t._v(" "),i("td",[t._v("amount in pence")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("11")])])]),t._v(" "),i("tr",[i("td",[t._v("Identification")]),t._v(" "),i("td",[t._v("Initiation/DebtorAccount/Identification")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max256Text")]),t._v(" "),i("td",[t._v("5 6")]),t._v(" "),i("td",[t._v("originating sorting code "),i("br"),i("br"),t._v("originating account number")]),t._v(" "),i("td",[t._v("M M")]),t._v(" "),i("td",[i("strong",[t._v("6")]),t._v(" "),i("br"),i("br"),i("strong",[t._v("8")])])]),t._v(" "),i("tr",[i("td",[t._v("Identification")]),t._v(" "),i("td",[t._v("Initiation/CreditorAccount/Identification")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max256Text")]),t._v(" "),i("td",[t._v("1 2")]),t._v(" "),i("td",[t._v("destination sorting code "),i("br"),i("br"),t._v("destination a/c number")]),t._v(" "),i("td",[t._v("M M")]),t._v(" "),i("td",[i("strong",[t._v("6")]),t._v(" "),i("br"),i("br"),i("strong",[t._v("8")])])]),t._v(" "),i("tr",[i("td",[t._v("Name")]),t._v(" "),i("td",[t._v("Initiation/CreditorAccount/Name")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max70Text")]),t._v(" "),i("td",[t._v("11")]),t._v(" "),i("td",[t._v("destination account name")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("18")])])]),t._v(" "),i("tr",[i("td",[t._v("SecondaryIdentification")]),t._v(" "),i("td",[t._v("Initiation/CreditorAccount/SecondaryIdentification")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max34Text")]),t._v(" "),i("td",[t._v("10")]),t._v(" "),i("td",[t._v("service user’s reference")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("18")])])]),t._v(" "),i("tr",[i("td",[t._v("Reference")]),t._v(" "),i("td",[t._v("Initiation/RemittanceInformation/Reference")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max35Text")]),t._v(" "),i("td",[t._v("10")]),t._v(" "),i("td",[t._v("service user’s reference")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("18")])])])])]),t._v(" "),i("h3",{attrs:{id:"notes-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#notes-2"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),i("ul",[i("li",[t._v("If the Initiation/CreditorAccount/SecondaryIdentification field is populated, this must be mapped to field 10 service user's reference as this will be used for the Creditor Agent to identify the account (i.e., the roll numbers in the building society context).")]),t._v(" "),i("li",[t._v("However, if the /CreditorAccount/SecondaryIdentification is "),i("strong",[t._v("not")]),t._v(" populated then 10 service user's reference must be populated with the Initiation/RemittanceInformation/Reference field.")]),t._v(" "),i("li",[t._v("If both Initiation/CreditorAccount/SecondaryIdentification and Initiation/RemittanceInformation/Reference are populated by the PISP, only the SecondaryIdentification will be mapped to field 10 service user's reference. Whether the Initiation/RemittanceInformation/Reference is used in any other ASPSP systems is for the ASPSP to decide.")]),t._v(" "),i("li",[t._v("Field 9 service user's name must be populated from the ASPSP's system of record.")]),t._v(" "),i("li",[t._v('Where the Initiation/DebtorAccount/SchemeName field is populated with "UK.OBIE.SortCodeAccountNumber", the Initiation/DebtorAccount/Identification field will be populated with a 14 digit field comprised of a 6 digit Sort Code (mapped to field 5 originating sorting code) and 8 digit Account Number (mapped to field 6 originating account number).')]),t._v(" "),i("li",[t._v('Where the Initiation/CreditorAccount/SchemeName field is populated with "UK.OBIE.SortCodeAccountNumber", the Initiation/CreditorAccount/Identification field will be populated with a 14 digit field comprised of a 6 digit Sort Code (mapped to field 1 destination sorting code) and 8 digit Account Number (mapped to field 2 destination a/c number)')]),t._v(" "),i("li",[t._v("CreditorPostalAddress is not supported in BACS.")])]),t._v(" "),i("h2",{attrs:{id:"mt103"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mt103"}},[t._v("#")]),t._v(" MT103")]),t._v(" "),i("p",[t._v("The MT103 message format is used for the CHAPS scheme.\nExecution:")]),t._v(" "),i("ul",[i("li",[t._v("The processing of payments via the CHAPS scheme is business as usual processing - i.e., no change")])]),t._v(" "),i("p",[t._v('This is the mapping from the Initiation section to the relevant CHAPS scheme fields with the use of the "UK.OBIE.SortCodeAccountNumber" account identification SchemeName.')]),t._v(" "),i("p",[t._v("All required fields in the CHAPS MT103 message can all be generated from the Initiation section of the payload or from the ASPSP for domestic-payments and domestic-scheduled-payments.")]),t._v(" "),i("p",[t._v("In the size column, highlighted in bold are the fields which are smaller in size than the corresponding ISO 20022 field.")]),t._v(" "),i("p",[t._v("In the case that a PISP sets up a payment-order consent with a larger field size (e.g., EndToEndIdentification, or InstructedAmount) than the eventual scheme field size, it will be up to the ASPSP to decide whether to reject the payment-order consent or truncate the field.")]),t._v(" "),i("h3",{attrs:{id:"mapping-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mapping-3"}},[t._v("#")]),t._v(" Mapping")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("XPath")]),t._v(" "),i("th",[t._v("Occurrence")]),t._v(" "),i("th",[t._v("Class")]),t._v(" "),i("th",[t._v("MT103 Field")]),t._v(" "),i("th",[t._v("Field Name")]),t._v(" "),i("th",[t._v("Mandatory")]),t._v(" "),i("th",[t._v("Size")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Amount")]),t._v(" "),i("td",[t._v("Initiation/InstructedAmount/Amount")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("TotalDigits: 18, FractionDigits: 5")]),t._v(" "),i("td",[t._v("32A")]),t._v(" "),i("td",[t._v("Value Date / Currency / Interbank Settled Amount")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("15n")])])]),t._v(" "),i("tr",[i("td",[t._v("Currency")]),t._v(" "),i("td",[t._v("Initiation/InstructedAmount/Currency")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v('ActiveOrHistoricCurrencyCode "GBP"')]),t._v(" "),i("td",[t._v("32A")]),t._v(" "),i("td",[t._v("Value Date / Currency / Interbank Settled Amount")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[t._v("3x")])]),t._v(" "),i("tr",[i("td",[t._v("Identification")]),t._v(" "),i("td",[t._v("Initiation/DebtorAccount/Identification")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max256Text")]),t._v(" "),i("td",[t._v("50K")]),t._v(" "),i("td",[t._v("Ordering Customer")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("34x")])])]),t._v(" "),i("tr",[i("td",[t._v("Identification")]),t._v(" "),i("td",[t._v("Initiation/CreditorAccount/Identification")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max256Text")]),t._v(" "),i("td",[t._v("57 "),i("br"),i("br"),t._v("59")]),t._v(" "),i("td",[t._v("Account With Institution "),i("br"),i("br"),t._v("Beneficiary Customer")]),t._v(" "),i("td",[t._v("M "),i("br"),i("br"),t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("6n")]),t._v(" "),i("br"),i("br"),i("strong",[t._v("8n")])])]),t._v(" "),i("tr",[i("td",[t._v("Name")]),t._v(" "),i("td",[t._v("Initiation/CreditorAccount/Name")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max70Text")]),t._v(" "),i("td",[t._v("59")]),t._v(" "),i("td",[t._v("Beneficiary Customer")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[i("strong",[t._v("35x")])])]),t._v(" "),i("tr",[i("td",[t._v("StreetName")]),t._v(" "),i("td",[t._v("Initiation/CreditorPostalAddress/StreetName")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max70Text")]),t._v(" "),i("td",[t._v("59")]),t._v(" "),i("td",[t._v("Beneficiary Customer")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[i("strong",[t._v("35x")])])]),t._v(" "),i("tr",[i("td",[t._v("BuildingNumber")]),t._v(" "),i("td",[t._v("Initiation/CreditorPostalAddress/BuildingNumber")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max16Text")]),t._v(" "),i("td",[t._v("59")]),t._v(" "),i("td",[t._v("Beneficiary Customer")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[t._v("35x")])]),t._v(" "),i("tr",[i("td",[t._v("PostCode")]),t._v(" "),i("td",[t._v("Initiation/CreditorPostalAddress/PostCode")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max16Text")]),t._v(" "),i("td",[t._v("59")]),t._v(" "),i("td",[t._v("Beneficiary Customer")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[t._v("35x")])]),t._v(" "),i("tr",[i("td",[t._v("EndToEndIdentification")]),t._v(" "),i("td",[t._v("Initiation/EndToEndIdentification")]),t._v(" "),i("td",[t._v("1..1")]),t._v(" "),i("td",[t._v("Max35Text")]),t._v(" "),i("td",[t._v("70")]),t._v(" "),i("td",[t._v("Beneficiary Reference")]),t._v(" "),i("td",[t._v("M")]),t._v(" "),i("td",[t._v("35x")])]),t._v(" "),i("tr",[i("td",[t._v("Reference")]),t._v(" "),i("td",[t._v("Initiation/RemittanceInformation/Reference")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max35Text")]),t._v(" "),i("td",[t._v("70")]),t._v(" "),i("td",[t._v("Beneficiary Reference")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[t._v("35x")])]),t._v(" "),i("tr",[i("td",[t._v("Unstructured")]),t._v(" "),i("td",[t._v("Initiation/RemittanceInformation/Unstructured")]),t._v(" "),i("td",[t._v("0..1")]),t._v(" "),i("td",[t._v("Max140Text")]),t._v(" "),i("td",[t._v("70")]),t._v(" "),i("td",[t._v("Beneficiary Reference")]),t._v(" "),i("td",[t._v("O")]),t._v(" "),i("td",[i("strong",[t._v("2*35x")])])])])]),t._v(" "),i("h3",{attrs:{id:"notes-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#notes-3"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),i("ul",[i("li",[t._v("The Value Date must be a valid BoE business day. It must be a valid date expressed as YYMMDD and is populated by the ASPSP.")]),t._v(" "),i("li",[t._v("Details for field 50K (Ordering Customer) relating to the Debtor's Name and Address must be populated from the ASPSP's system of record.")]),t._v(" "),i("li",[t._v('Where the Initiation/DebtorAccount/SchemeName field is populated with "UK.OBIE.SortCodeAccountNumber", the Initiation/DebtorAccount/Identification field will be populated with a 14 digit field comprised of a 6 digit Sort Code (mapped to field 50K Ordering Customer).')]),t._v(" "),i("li",[t._v('Where the Initiation/CreditorAccount/SchemeName field is populated with "UK.OBIE.SortCodeAccountNumber", the Initiation/CreditorAccount/Identification field will be populated with a 14 digit field comprised of a 6 digit Sort Code (mapped to field 57 Account With Institution) and 8 digit Account Number (mapped to field 59F Beneficiary Customer).')]),t._v(" "),i("li",[t._v("Beneficiary Customer Address (59) - there are only 3 fields of length 35 available in the MT103 message for the CreditorPostalAddress these will be mapped from:\n"),i("ul",[i("li",[t._v("Initiation/CreditorPostalAddress/StreetName.")]),t._v(" "),i("li",[t._v("Initiation/CreditorPostalAddress/BuildingNumber.")]),t._v(" "),i("li",[t._v("Initiation/CreditorPostalAddress/PostCode.")])])]),t._v(" "),i("li",[t._v("Beneficiary Reference (70) - this MT103 field has 4 fields of length 35 to be mapped with:\n"),i("ul",[i("li",[t._v("/ROC/ and EndToEndIndentification")]),t._v(" "),i("li",[t._v("/RFB/ and RemittanceInformation/Reference (only 16 chars supported)")]),t._v(" "),i("li",[t._v("RemittanceInformation/Unstructured")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);