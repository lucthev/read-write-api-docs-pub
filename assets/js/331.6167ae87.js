(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{906:function(t,n,e){"use strict";e.r(n);var a=e(6),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"funds-confirmation-consent-v3-1-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#funds-confirmation-consent-v3-1-3"}},[t._v("#")]),t._v(" Funds Confirmation Consent - v3.1.3")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#endpoints"}},[t._v("Endpoints")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#post-funds-confirmation-consents"}},[t._v("POST /funds-confirmation-consents")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#funds-confirmation-consent-status"}},[t._v("Funds Confirmation Consent Status")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#status-flow"}},[t._v("Status Flow")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get-funds-confirmation-consentsconsentid"}},[t._v("GET /funds-confirmation-consents/{ConsentId}")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#funds-confirmation-consent-status-1"}},[t._v("Funds Confirmation Consent Status")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#delete-funds-confirmation-consentsconsentid"}},[t._v("DELETE /funds-confirmation-consents/{ConsentId}")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#funds-confirmation-consent---request"}},[t._v("Funds Confirmation Consent - Request")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#uml-diagram"}},[t._v("UML Diagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-dictionary"}},[t._v("Data Dictionary")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#funds-confirmation-consent---response"}},[t._v("Funds Confirmation Consent - Response")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#uml-diagram-1"}},[t._v("UML Diagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-dictionary-1"}},[t._v("Data Dictionary")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-payload---enumerations"}},[t._v("Data Payload - Enumerations")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#usage-examples"}},[t._v("Usage Examples")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#post---funds-confirmation-consent"}},[t._v("POST - Funds Confirmation Consent")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#example-with-all-permitted-fields"}},[t._v("Example with all permitted fields")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#request"}},[t._v("Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#response"}},[t._v("Response")])])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get---funds-confirmation-consent"}},[t._v("GET - Funds Confirmation Consent")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#example-with-all-permitted-fields-1"}},[t._v("Example with all permitted fields")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#request-1"}},[t._v("Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#response-1"}},[t._v("Response")])])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#delete---funds-confirmation-consent"}},[t._v("DELETE - Funds Confirmation Consent")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#example-with-all-permitted-fields-2"}},[t._v("Example with all permitted fields")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#request-2"}},[t._v("Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#response-2"}},[t._v("Response")])])])])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("The Funds Confirmation Consent resource is used by an CBPII to register an intent to confirm funds.")]),t._v(" "),e("p",[t._v("This resource description should be read in conjunction with a compatible Confirmation of Funds API Profile.")]),t._v(" "),e("h2",{attrs:{id:"endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Resource")]),t._v(" "),e("th",[t._v("HTTP Operation")]),t._v(" "),e("th",[t._v("Endpoint")]),t._v(" "),e("th",[t._v("Mandatory ?")]),t._v(" "),e("th",[t._v("Scope")]),t._v(" "),e("th",[t._v("Grant Type")]),t._v(" "),e("th",[t._v("Message Signing")]),t._v(" "),e("th",[t._v("Idempotency Key")]),t._v(" "),e("th",[t._v("Request Object")]),t._v(" "),e("th",[t._v("Response Object")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("funds-confirmation-consent")]),t._v(" "),e("td",[t._v("POST")]),t._v(" "),e("td",[t._v("POST /funds-confirmation-consents")]),t._v(" "),e("td",[t._v("Mandatory")]),t._v(" "),e("td",[t._v("fundsconfirmations")]),t._v(" "),e("td",[t._v("Client Credentials")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1")])]),t._v(" "),e("tr",[e("td",[t._v("funds-confirmation-consent")]),t._v(" "),e("td",[t._v("GET")]),t._v(" "),e("td",[t._v("GET /funds-confirmation-consents/{ConsentId}")]),t._v(" "),e("td",[t._v("Mandatory")]),t._v(" "),e("td",[t._v("fundsconfirmations")]),t._v(" "),e("td",[t._v("Client Credentials")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("NA")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1")])]),t._v(" "),e("tr",[e("td",[t._v("funds-confirmation-consent")]),t._v(" "),e("td",[t._v("DELETE")]),t._v(" "),e("td",[t._v("DELETE /funds-confirmation-consents/{ConsentId}")]),t._v(" "),e("td",[t._v("Mandatory")]),t._v(" "),e("td",[t._v("fundsconfirmations")]),t._v(" "),e("td",[t._v("Client Credentials")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("NA")]),t._v(" "),e("td",[t._v("NA")])])])]),t._v(" "),e("h3",{attrs:{id:"post-funds-confirmation-consents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-funds-confirmation-consents"}},[t._v("#")]),t._v(" POST /funds-confirmation-consents")]),t._v(" "),e("p",[t._v("The API allows the CBPII to ask an ASPSP to create a new "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource.")]),t._v(" "),e("ul",[e("li",[t._v("This endpoint allows the CBPII to propose a consent to be agreed between the ASPSP and PSU, to authorise the CBPII access to confirm funds are available.")]),t._v(" "),e("li",[t._v("The ASPSP creates the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource and responds with a unique ConsentId to refer to the resource.")]),t._v(" "),e("li",[t._v("Prior to calling the operation, the CBPII must have an access token issued by the ASPSP using a client credentials grant.")])]),t._v(" "),e("h4",{attrs:{id:"funds-confirmation-consent-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#funds-confirmation-consent-status"}},[t._v("#")]),t._v(" Funds Confirmation Consent Status")]),t._v(" "),e("p",[t._v("The PSU "),e("strong",[t._v("must")]),t._v(" authenticate with the ASPSP and agree the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" with the ASPSP, for the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" to be successfully setup.")]),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource that is created successfully must have one of the following Status code-list enumerations:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Status Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("AwaitingAuthorisation")]),t._v(" "),e("td",[t._v("The Funds Confirmation Consent is awaiting agreement.")])])])]),t._v(" "),e("p",[t._v("After consent has been agreed the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource may have these following statuses.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Status Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Rejected")]),t._v(" "),e("td",[t._v("The Funds Confirmation Consent has been rejected.")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Authorised")]),t._v(" "),e("td",[t._v("The Funds Confirmation Consent has been successfully agreed.")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Revoked")]),t._v(" "),e("td",[t._v("The Funds Confirmation Consent has been revoked via the ASPSP interface.")])])])]),t._v(" "),e("h4",{attrs:{id:"status-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status-flow"}},[t._v("#")]),t._v(" Status Flow")]),t._v(" "),e("p",[t._v("This is the state diagram for the Status.")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/CoFStateFlow.png",alt:"CoFStateFlow"}})]),t._v(" "),e("h3",{attrs:{id:"get-funds-confirmation-consents-consentid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-funds-confirmation-consents-consentid"}},[t._v("#")]),t._v(" GET /funds-confirmation-consents/{ConsentId}")]),t._v(" "),e("p",[t._v("A CBPII may optionally retrieve a "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource that they have created to check its status.")]),t._v(" "),e("p",[t._v("Prior to calling the operation, the CBPII must have an access token issued by the ASPSP using a client credentials grant.")]),t._v(" "),e("h4",{attrs:{id:"funds-confirmation-consent-status-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#funds-confirmation-consent-status-2"}},[t._v("#")]),t._v(" Funds Confirmation Consent Status")]),t._v(" "),e("p",[t._v("Once the PSU agrees the consent outlined in the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource, the Status of the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(' resource will be updated with "Authorised".')]),t._v(" "),e("p",[t._v("The available Status code-list enumerations for the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource are:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Status Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Rejected")]),t._v(" "),e("td",[t._v("The Funds Confirmation Consent has been rejected.")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("AwaitingAuthorisation")]),t._v(" "),e("td",[t._v("The Funds Confirmation Consent is awaiting agreement.")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Authorised")]),t._v(" "),e("td",[t._v("The Funds Confirmation Consent has been successfully agreed.")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("Revoked")]),t._v(" "),e("td",[t._v("The Funds Confirmation Consent has been revoked via the ASPSP interface.")])])])]),t._v(" "),e("h3",{attrs:{id:"delete-funds-confirmation-consents-consentid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-funds-confirmation-consents-consentid"}},[t._v("#")]),t._v(" DELETE /funds-confirmation-consents/{ConsentId}")]),t._v(" "),e("p",[t._v("If the PSU revokes consent to confirm funds with the CBPII, the CBPII "),e("strong",[t._v("must")]),t._v(" delete the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource.")]),t._v(" "),e("ul",[e("li",[t._v("This is done by making a call to DELETE the "),e("strong",[t._v("funds-confirmation-consent")]),t._v(" resource as soon as is practically possible.")]),t._v(" "),e("li",[t._v("Prior to calling the operation, the CBPII must have an access token issued by the ASPSP using a client credentials grant.")])]),t._v(" "),e("h2",{attrs:{id:"data-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data Model")]),t._v(" "),e("p",[t._v("This data dictionary section gives the detail on the payload content.")]),t._v(" "),e("h3",{attrs:{id:"funds-confirmation-consent-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#funds-confirmation-consent-request"}},[t._v("#")]),t._v(" Funds Confirmation Consent - Request")]),t._v(" "),e("p",[t._v("The OBFundsConfirmationConsent1 object will be used for the following:")]),t._v(" "),e("ul",[e("li",[t._v("Request to POST /funds-confirmation-consents")])]),t._v(" "),e("h4",{attrs:{id:"uml-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/OBFundsConfirmationConsent1.gif",alt:"OBFundsConfirmationConsent1"}})]),t._v(" "),e("h4",{attrs:{id:"data-dictionary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Occurrence")]),t._v(" "),e("th",[t._v("XPath")]),t._v(" "),e("th",[t._v("EnhancedDefinition")]),t._v(" "),e("th",[t._v("Class")]),t._v(" "),e("th",[t._v("Codes")]),t._v(" "),e("th",[t._v("Pattern")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("OBFundsConfirmationConsent1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Data")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1/Data")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentData1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("ExpirationDateTime")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1/Data/ExpirationDateTime")]),t._v(" "),e("td",[t._v("Specified date and time the funds confirmation authorisation will expire. If this is not populated, the authorisation will be open ended.")]),t._v(" "),e("td",[t._v("ISODateTime")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("DebtorAccount")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1/Data/DebtorAccount")]),t._v(" "),e("td",[t._v("Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.")]),t._v(" "),e("td",[t._v("OBCashAccountDebtor4")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("SchemeName")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1/Data/DebtorAccount/SchemeName")]),t._v(" "),e("td",[t._v("Name of the identification scheme, in a coded form as published in an external list.")]),t._v(" "),e("td",[t._v("OBExternalAccountIdentification4Code")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Identification")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1/Data/DebtorAccount/Identification")]),t._v(" "),e("td",[t._v("Identification assigned by an institution to identify an account. This identification is known by the account owner.")]),t._v(" "),e("td",[t._v("Max256Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Name")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1/Data/DebtorAccount/Name")]),t._v(" "),e("td",[t._v("The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.")]),t._v(" "),e("td",[t._v("Max70Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("SecondaryIdentification")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsent1/Data/DebtorAccount/SecondaryIdentification")]),t._v(" "),e("td",[t._v("This is secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).")]),t._v(" "),e("td",[t._v("Max34Text")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"funds-confirmation-consent-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#funds-confirmation-consent-response"}},[t._v("#")]),t._v(" Funds Confirmation Consent - Response")]),t._v(" "),e("p",[t._v("The OBFundsConfirmationConsentResponse1 object will be used for the following:")]),t._v(" "),e("ul",[e("li",[t._v("Response to POST /funds-confirmation-consents")]),t._v(" "),e("li",[t._v("Call to GET /funds-confirmation-consents/{ConsentId}")])]),t._v(" "),e("h4",{attrs:{id:"uml-diagram-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram-2"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/OBFundsConfirmationConsentResponse1.gif",alt:"OBFundsConfirmationConsentResponse1"}})]),t._v(" "),e("p",[t._v("Notes:")]),t._v(" "),e("p",[t._v("The OBFundsConfirmationConsentResponse1 object contains the same information as the OBFundsConfirmation1, but with additional fields:")]),t._v(" "),e("ul",[e("li",[t._v("ConsentId - to uniquely identify the funds-confirmation-consent resource.")]),t._v(" "),e("li",[t._v("Status.")]),t._v(" "),e("li",[t._v("StatusUpdateDateTime.")]),t._v(" "),e("li",[t._v("CreationDateTime.")])]),t._v(" "),e("h4",{attrs:{id:"data-dictionary-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-2"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Occurrence")]),t._v(" "),e("th",[t._v("XPath")]),t._v(" "),e("th",[t._v("EnhancedDefinition")]),t._v(" "),e("th",[t._v("Class")]),t._v(" "),e("th",[t._v("Codes")]),t._v(" "),e("th",[t._v("Pattern")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("OBFundsConfirmationConsentResponse1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Data")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentDataResponse1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("ConsentId")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/ConsentId")]),t._v(" "),e("td",[t._v("Unique identification as assigned to identify the funds confirmation consent resource.")]),t._v(" "),e("td",[t._v("Max128Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("CreationDateTime")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/CreationDateTime")]),t._v(" "),e("td",[t._v("Date and time at which the resource was created.")]),t._v(" "),e("td",[t._v("ISODateTime")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/Status")]),t._v(" "),e("td",[t._v("Specifies the status of consent resource in code form.")]),t._v(" "),e("td",[t._v("OBExternalRequestStatus1Code")]),t._v(" "),e("td",[t._v("Authorised AwaitingAuthorisation Rejected Revoked")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("StatusUpdateDateTime")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/StatusUpdateDateTime")]),t._v(" "),e("td",[t._v("Date and time at which the resource status was updated.")]),t._v(" "),e("td",[t._v("ISODateTime")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("ExpirationDateTime")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/ExpirationDateTime")]),t._v(" "),e("td",[t._v("Specified date and time the funds confirmation authorisation will expire. If this is not populated, the authorisation will be open ended.")]),t._v(" "),e("td",[t._v("ISODateTime")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("DebtorAccount")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/DebtorAccount")]),t._v(" "),e("td",[t._v("Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.")]),t._v(" "),e("td",[t._v("OBCashAccountDebtor4")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("SchemeName")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/DebtorAccount/SchemeName")]),t._v(" "),e("td",[t._v("Name of the identification scheme, in a coded form as published in an external list.")]),t._v(" "),e("td",[t._v("OBExternalAccountIdentification4Code")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Identification")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/DebtorAccount/Identification")]),t._v(" "),e("td",[t._v("Identification assigned by an institution to identify an account. This identification is known by the account owner.")]),t._v(" "),e("td",[t._v("Max256Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Name")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/DebtorAccount/Name")]),t._v(" "),e("td",[t._v("The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.")]),t._v(" "),e("td",[t._v("Max70Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("SecondaryIdentification")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBFundsConfirmationConsentResponse1/Data/DebtorAccount/SecondaryIdentification")]),t._v(" "),e("td",[t._v("This is secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).")]),t._v(" "),e("td",[t._v("Max34Text")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"data-payload-enumerations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-payload-enumerations"}},[t._v("#")]),t._v(" Data Payload - Enumerations")]),t._v(" "),e("p",[t._v("This section gives the definitions for enumerations used in the Confirmation of Funds APIs.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Code Class")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Definition")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("OBExternalRequestStatus1Code")]),t._v(" "),e("td",[t._v("Authorised")]),t._v(" "),e("td",[t._v("The funds confirmation consent has been successfully agreed.")])]),t._v(" "),e("tr",[e("td",[t._v("OBExternalRequestStatus1Code")]),t._v(" "),e("td",[t._v("AwaitingAuthorisation")]),t._v(" "),e("td",[t._v("The funds confirmation consent is awaiting agreement.")])]),t._v(" "),e("tr",[e("td",[t._v("OBExternalRequestStatus1Code")]),t._v(" "),e("td",[t._v("Rejected")]),t._v(" "),e("td",[t._v("The funds confirmation consent has been rejected.")])]),t._v(" "),e("tr",[e("td",[t._v("OBExternalRequestStatus1Code")]),t._v(" "),e("td",[t._v("Revoked")]),t._v(" "),e("td",[t._v("The funds confirmation consent has been revoked via the ASPSP interface.")])])])]),t._v(" "),e("h2",{attrs:{id:"usage-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-examples"}},[t._v("#")]),t._v(" Usage Examples")]),t._v(" "),e("h3",{attrs:{id:"post-funds-confirmation-consent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-funds-confirmation-consent"}},[t._v("#")]),t._v(" POST - Funds Confirmation Consent")]),t._v(" "),e("h4",{attrs:{id:"example-with-all-permitted-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-with-all-permitted-fields"}},[t._v("#")]),t._v(" Example with all permitted fields")]),t._v(" "),e("h5",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[t._v("Post Funds Confirmation Consent")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("POST /funds-confirmation-consents HTTP/1.1\nContent-Type: application/json\nAuthorization: Bearer 1t1satruthun1v3rs4lly\nAccept: application/json; charset=utf-8\nx-fapi-auth-date: Mon, 13 Nov 2017 19:49:37 GMT    \nx-fapi-customer-ip-address: 92.11.92.11\nx-fapi-interaction-id: hook5i13-ntIg-4th3-rP41-3ro535touch3\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DebtorAccount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"SchemeName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UK.OBIE.IBAN"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Identification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GB76LOYD30949301273801"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"SecondaryIdentification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Roll 56988"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ExpirationDateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-05-02T00:00:00+00:00"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h5",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("p",[t._v("Post Funds Confirmation Consent Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HTTP/1.1 201 Created\nContent-Type: application/json\nx-fapi-interaction-id: hook5i13-ntIg-4th3-rP41-3ro535touch3\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ConsentId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"88379"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CreationDateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-05-02T00:00:00+00:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AwaitingAuthorisation"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"StatusUpdateDateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-05-02T00:00:00+00:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ExpirationDateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-05-02T00:00:00+00:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DebtorAccount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"SchemeName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UK.OBIE.IBAN"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Identification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GB76LOYD30949301273801"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"SecondaryIdentification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Roll 56988"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Links"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Self"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.alphabank.com/open-banking/v3.1/cbpii/funds-confirmation-consents/88379"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Meta"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-funds-confirmation-consent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-funds-confirmation-consent"}},[t._v("#")]),t._v(" GET - Funds Confirmation Consent")]),t._v(" "),e("h4",{attrs:{id:"example-with-all-permitted-fields-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-with-all-permitted-fields-2"}},[t._v("#")]),t._v(" Example with all permitted fields")]),t._v(" "),e("h5",{attrs:{id:"request-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[t._v("GET Funds Confirmation Consent Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /funds-confirmation-consents/88379 HTTP/1.1\nAuthorization: Bearer Jhingapulaav\nx-fapi-interaction-id: 93bac548-d2de-4546-b106-880a5018460d\nAccept: application/json\n")])])]),e("h5",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("p",[t._v("GET Funds Confirmation Consent Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HTTP/1.1 200 OK\nx-fapi-interaction-id: 93bac548-d2de-4546-b106-880a5018460d\nContent-Type: application/json\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ConsentId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"88379"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CreationDateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-05-02T00:00:00+00:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AwaitingAuthorisation"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"StatusUpdateDateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-05-02T00:00:00+00:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ExpirationDateTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-05-02T00:00:00+00:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DebtorAccount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"SchemeName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UK.OBIE.IBAN"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Identification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GB76LOYD30949301273801"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"SecondaryIdentification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Roll 56988"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Links"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Self"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.alphabank.com/open-banking/v3.1/cbpii/funds-confirmation-consents/88379"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Meta"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"delete-funds-confirmation-consent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-funds-confirmation-consent"}},[t._v("#")]),t._v(" DELETE - Funds Confirmation Consent")]),t._v(" "),e("h4",{attrs:{id:"example-with-all-permitted-fields-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-with-all-permitted-fields-3"}},[t._v("#")]),t._v(" Example with all permitted fields")]),t._v(" "),e("h5",{attrs:{id:"request-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[t._v("DELETE Funds Confirmation Consent Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("DELETE /funds-confirmation-consents/88379 HTTP/1.1\nAuthorization: Bearer Sarsonkasaag\nx-fapi-auth-date: Sun, 10 Sep 2017 19:43:31 GMT\nx-fapi-customer-ip-address: 104.25.212.99\nx-fapi-interaction-id: 93bac548-d2de-4546-b106-880a5018460d\n")])])]),e("h5",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("p",[t._v("DELETE Funds Confirmation Consent Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HTTP/1.1 204 No Content\nx-fapi-interaction-id: 93bac548-d2de-4546-b106-880a5018460d\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);