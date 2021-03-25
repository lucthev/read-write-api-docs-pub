(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1443:function(t,e,a){"use strict";a.r(e);var n=a(6),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"international-payments-v3-1-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#international-payments-v3-1-8"}},[t._v("#")]),t._v(" International Payments - v3.1.8 ")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#endpoints"}},[t._v("Endpoints")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#post-international-payments"}},[t._v("POST /international-payments")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#status"}},[t._v("Status")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#get-international-paymentsinternationalpaymentid"}},[t._v("GET /international-payments/{InternationalPaymentId}")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#status-1"}},[t._v("Status")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#get-international-paymentsinternationalpaymentidpayment-details"}},[t._v("GET /international-payments/{InternationalPaymentId}/payment-details")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#status-2"}},[t._v("Status")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#state-model"}},[t._v("State Model")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#payment-order"}},[t._v("Payment Order")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#multiple-authorisation"}},[t._v("Multiple Authorisation")])])])])])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#reused-classes"}},[t._v("Reused Classes")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#obinternational3"}},[t._v("OBInternational3")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#obexchangerate2"}},[t._v("OBExchangeRate2")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#international-payment---request"}},[t._v("International Payment - Request")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#uml-diagram"}},[t._v("UML Diagram")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#notes"}},[t._v("Notes")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary"}},[t._v("Data Dictionary")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#international-payment---response"}},[t._v("International Payment - Response")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#uml-diagram-1"}},[t._v("UML Diagram")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#notes-1"}},[t._v("Notes")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary-1"}},[t._v("Data Dictionary")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#international-payment-order---payment-details---response"}},[t._v("International Payment Order - Payment Details - Response")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#uml-diagram-2"}},[t._v("UML Diagram")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary-2"}},[t._v("Data Dictionary")])])])])])])]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The International Payments resource is used by a PISP to initiate an International Payment.")]),t._v(" "),n("p",[t._v("This resource description should be read in conjunction with a compatible Payment Initiation API Profile.")]),t._v(" "),n("h2",{attrs:{id:"endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Resource")]),t._v(" "),n("th",[t._v("HTTP Operation")]),t._v(" "),n("th",[t._v("Endpoint")]),t._v(" "),n("th",[t._v("Mandatory ?")]),t._v(" "),n("th",[t._v("Scope")]),t._v(" "),n("th",[t._v("Grant Type")]),t._v(" "),n("th",[t._v("Message Signing")]),t._v(" "),n("th",[t._v("Idempotency Key")]),t._v(" "),n("th",[t._v("Request Object")]),t._v(" "),n("th",[t._v("Response Object")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("international-payments")]),t._v(" "),n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("POST /international-payments")]),t._v(" "),n("td",[t._v("Conditional")]),t._v(" "),n("td",[t._v("payments")]),t._v(" "),n("td",[t._v("Authorization Code")]),t._v(" "),n("td",[t._v("Signed Request Signed Response")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("OBWriteInternational3")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5")])]),t._v(" "),n("tr",[n("td",[t._v("international-payments")]),t._v(" "),n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("GET /international-payments/{InternationalPaymentId}")]),t._v(" "),n("td",[t._v("Mandatory (if resource POST implemented)")]),t._v(" "),n("td",[t._v("payments")]),t._v(" "),n("td",[t._v("Client Credentials")]),t._v(" "),n("td",[t._v("Signed Response")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("NA")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5")])]),t._v(" "),n("tr",[n("td",[t._v("payment-details")]),t._v(" "),n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("GET /international-payments/{InternationalPaymentId}/payment-details")]),t._v(" "),n("td",[t._v("Optional")]),t._v(" "),n("td",[t._v("payments")]),t._v(" "),n("td",[t._v("Client Credentials")]),t._v(" "),n("td",[t._v("Signed Response")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("NA")]),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1")])])])]),t._v(" "),n("h3",{attrs:{id:"post-international-payments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-international-payments"}},[t._v("#")]),t._v(" POST /international-payments")]),t._v(" "),n("p",[t._v("Once the international-payment-consent has been authorised by the PSU, the PISP can proceed to submit the international-payment for processing:")]),t._v(" "),n("ul",[n("li",[t._v("This is done by making a POST request to the "),n("strong",[t._v("international-payments")]),t._v(" endpoint.")]),t._v(" "),n("li",[t._v("This request is an instruction to the ASPSP to begin the international single immediate payment journey. The international payment must be submitted immediately, however, there are some scenarios where the international payment may not be executed immediately (e.g. busy periods at the ASPSP).")]),t._v(" "),n("li",[t._v("The PISP "),n("strong",[t._v("must")]),t._v(" ensure that the Initiation and Risk sections of the international-payment match the corresponding Initiation and Risk sections of the international-payment-consent resource. If the two do not match, the ASPSP "),n("strong",[t._v("must not")]),t._v(" process the request and "),n("strong",[t._v("must")]),t._v(" respond with a 400 (Bad Request).")]),t._v(" "),n("li",[t._v("Any operations on the international-payment resource will not result in a Status change for the international-payment resource.")])]),t._v(" "),n("h4",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),n("p",[t._v('An international-payment can only be created if its corresponding international-payment-consent resource has the status of "Authorised".')]),t._v(" "),n("p",[t._v("The international-payment resource that is created successfully must have one of the following PaymentStatusCode code-set enumerations:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Status")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Pending")])]),t._v(" "),n("tr",[n("td",[t._v("Rejected")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedSettlementInProcess")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedSettlementCompleted")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedWithoutPosting")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedCreditSettlementCompleted")])])])]),t._v(" "),n("h3",{attrs:{id:"get-international-payments-internationalpaymentid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-international-payments-internationalpaymentid"}},[t._v("#")]),t._v(" GET /international-payments/{InternationalPaymentId}")]),t._v(" "),n("p",[t._v("A PISP can retrieve the international-payment to check its status.")]),t._v(" "),n("h4",{attrs:{id:"status-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status-2"}},[t._v("#")]),t._v(" Status")]),t._v(" "),n("p",[t._v("The international-payment resource must have one of the following PaymentStatusCode code-set enumerations:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Status")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Pending")])]),t._v(" "),n("tr",[n("td",[t._v("Rejected")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedSettlementInProcess")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedSettlementCompleted")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedWithoutPosting")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedCreditSettlementCompleted")])])])]),t._v(" "),n("h3",{attrs:{id:"get-international-payments-internationalpaymentid-payment-details"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-international-payments-internationalpaymentid-payment-details"}},[t._v("#")]),t._v(" GET /international-payments/{InternationalPaymentId}/payment-details")]),t._v(" "),n("p",[t._v("A PISP can retrieve the Details of the underlying payment transaction via this endpoint. This resource allows ASPSPs to return richer list of Payment Statuses, and if available payment scheme related statuses.")]),t._v(" "),n("h4",{attrs:{id:"status-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status-3"}},[t._v("#")]),t._v(" Status")]),t._v(" "),n("p",[t._v("The international-payments - payment-details must have one of the following PaymentStatusCode code-set enumerations:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Status")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Accepted")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedCancellationRequest")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedTechnicalValidation")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedCustomerProfile")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedFundsChecked")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedWithChange")])]),t._v(" "),n("tr",[n("td",[t._v("Pending")])]),t._v(" "),n("tr",[n("td",[t._v("Rejected")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedSettlementInProcess")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedSettlementCompleted")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedWithoutPosting")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedCreditSettlementCompleted")])]),t._v(" "),n("tr",[n("td",[t._v("Cancelled")])]),t._v(" "),n("tr",[n("td",[t._v("NoCancellationProcess")])]),t._v(" "),n("tr",[n("td",[t._v("PartiallyAcceptedCancellationRequest")])]),t._v(" "),n("tr",[n("td",[t._v("PartiallyAcceptedTechnicalCorrect")])]),t._v(" "),n("tr",[n("td",[t._v("PaymentCancelled")])]),t._v(" "),n("tr",[n("td",[t._v("PendingCancellationRequest")])]),t._v(" "),n("tr",[n("td",[t._v("Received")])]),t._v(" "),n("tr",[n("td",[t._v("RejectedCancellationRequest")])])])]),t._v(" "),n("h3",{attrs:{id:"state-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state-model"}},[t._v("#")]),t._v(" State Model")]),t._v(" "),n("h4",{attrs:{id:"payment-order"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#payment-order"}},[t._v("#")]),t._v(" Payment Order")]),t._v(" "),n("p",[t._v("The state model for the international-payment resource follows the behaviour and definitions for the ISO 20022 PaymentStatusCode code-set.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(218),alt:"Payment Order Status Lifecycle"}})]),t._v(" "),n("p",[t._v("The definitions for the Status:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Status")]),t._v(" "),n("th",[t._v("Payment Status Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Pending")]),t._v(" "),n("td",[t._v("Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed.")])]),t._v(" "),n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("Rejected")]),t._v(" "),n("td",[t._v("Payment initiation or individual transaction included in the payment initiation has been rejected.")])]),t._v(" "),n("tr",[n("td",[t._v("3")]),t._v(" "),n("td",[t._v("AcceptedSettlementInProcess")]),t._v(" "),n("td",[t._v("All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution.")])]),t._v(" "),n("tr",[n("td",[t._v("4")]),t._v(" "),n("td",[t._v("AcceptedSettlementCompleted")]),t._v(" "),n("td",[t._v("Settlement on the debtor's account has been completed.")])]),t._v(" "),n("tr",[n("td",[t._v("5")]),t._v(" "),n("td",[t._v("AcceptedWithoutPosting")]),t._v(" "),n("td",[t._v("Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account.")])]),t._v(" "),n("tr",[n("td",[t._v("6")]),t._v(" "),n("td",[t._v("AcceptedCreditSettlementCompleted")]),t._v(" "),n("td",[t._v("Settlement on the creditor's account has been completed.")])])])]),t._v(" "),n("h5",{attrs:{id:"multiple-authorisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multiple-authorisation"}},[t._v("#")]),t._v(" Multiple Authorisation")]),t._v(" "),n("p",[t._v("If the payment-order requires multiple authorisations, the Status of the multiple authorisations will be updated in the MultiAuthorisation object.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(156),alt:"Multiple Authorisation Statss"}})]),t._v(" "),n("p",[t._v("The definitions for the Status:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Status")]),t._v(" "),n("th",[t._v("Status Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("1")]),t._v(" "),n("td",[t._v("AwaitingFurtherAuthorisation")]),t._v(" "),n("td",[t._v("The payment-order resource is awaiting further authorisation.")])]),t._v(" "),n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("Rejected")]),t._v(" "),n("td",[t._v("The payment-order resource has been rejected by an authoriser.")])]),t._v(" "),n("tr",[n("td",[t._v("3")]),t._v(" "),n("td",[t._v("Authorised")]),t._v(" "),n("td",[t._v("The payment-order resource has been successfully authorised by all required authorisers.")])])])]),t._v(" "),n("h2",{attrs:{id:"data-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data Model")]),t._v(" "),n("p",[t._v("The data dictionary section gives the detail on the payload content for the International Payment API flows.")]),t._v(" "),n("h3",{attrs:{id:"reused-classes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reused-classes"}},[t._v("#")]),t._v(" Reused Classes")]),t._v(" "),n("h4",{attrs:{id:"obinternational3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#obinternational3"}},[t._v("#")]),t._v(" OBInternational3")]),t._v(" "),n("p",[t._v("The OBInternational3 class is defined in the "),n("RouterLink",{attrs:{to:"/v3.1.8/resources-and-data-models/pisp/international-payment-consents.html#obinternational3"}},[t._v("international-payment-consents")]),t._v(" page.")],1),t._v(" "),n("h4",{attrs:{id:"obexchangerate2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#obexchangerate2"}},[t._v("#")]),t._v(" OBExchangeRate2")]),t._v(" "),n("p",[t._v("The OBExchangeRate2 class is defined in the "),n("RouterLink",{attrs:{to:"/v3.1.8/resources-and-data-models/pisp/international-payment-consents.html#obexchangerate2"}},[t._v("international-payment-consents")]),t._v(" page.")],1),t._v(" "),n("h3",{attrs:{id:"international-payment-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#international-payment-request"}},[t._v("#")]),t._v(" International Payment - Request")]),t._v(" "),n("p",[t._v("The OBWriteInternational3 object will be used for a call to:")]),t._v(" "),n("ul",[n("li",[t._v("POST /international-payments")])]),t._v(" "),n("h4",{attrs:{id:"uml-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),n("p",[n("img",{attrs:{src:a(884),alt:"International Payment - Request"}})]),t._v(" "),n("h4",{attrs:{id:"notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),n("p",[t._v("The international-payment "),n("strong",[t._v("request")]),t._v(" object contains the:")]),t._v(" "),n("ul",[n("li",[t._v("ConsentId.")]),t._v(" "),n("li",[t._v("The full Initiation and Risk objects from the international-payment request.")]),t._v(" "),n("li",[t._v("The "),n("strong",[t._v("Initiation")]),t._v(" and "),n("strong",[t._v("Risk")]),t._v(" sections of the international-payment request "),n("strong",[t._v("must")]),t._v(" match the "),n("strong",[t._v("Initiation")]),t._v(" and "),n("strong",[t._v("Risk")]),t._v(" sections of the corresponding international-payment-consent request.")])]),t._v(" "),n("h4",{attrs:{id:"data-dictionary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBWriteInternational3")]),t._v(" "),n("td",[t._v("OBWriteInternational3")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteInternational3")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternational3/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteDataInternational3")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ConsentId")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternational3/Data/ConsentId")]),t._v(" "),n("td",[t._v("OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.")]),t._v(" "),n("td",[t._v("Max128Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Initiation")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternational3/Data/Initiation")]),t._v(" "),n("td",[t._v("The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.")]),t._v(" "),n("td",[t._v("OBInternational3")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Risk")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternational3/Risk")]),t._v(" "),n("td",[t._v("The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.")]),t._v(" "),n("td",[t._v("OBRisk1")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"international-payment-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#international-payment-response"}},[t._v("#")]),t._v(" International Payment - Response")]),t._v(" "),n("p",[t._v("The OBWriteInternationalResponse5 object will be used for a response to a call to:")]),t._v(" "),n("ul",[n("li",[t._v("POST /international-payments")]),t._v(" "),n("li",[t._v("GET /international-payments/{InternationalPaymentId}")])]),t._v(" "),n("h4",{attrs:{id:"uml-diagram-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram-2"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),n("p",[n("img",{attrs:{src:a(885),alt:"International Payment - Response"}})]),t._v(" "),n("h4",{attrs:{id:"notes-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notes-2"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),n("p",[t._v("The international-payment "),n("strong",[t._v("response")]),t._v(" object contains the:")]),t._v(" "),n("ul",[n("li",[t._v("InternationalPaymentId.")]),t._v(" "),n("li",[t._v("ConsentId.")]),t._v(" "),n("li",[t._v("CreationDateTime of the international-payment resource.")]),t._v(" "),n("li",[t._v("Status and StatusUpdateDateTime of the international-payment resource.")]),t._v(" "),n("li",[t._v("ExpectedExecutionDateTime for the international-payment resource.")]),t._v(" "),n("li",[t._v("ExpectedSettlementDateTime for the international-payment resource.")]),t._v(" "),n("li",[t._v("Refund account details, if requested by PISP as part of the international-payment-consents resource.")]),t._v(" "),n("li",[t._v("The Charges and ExchangeRateInformation in the international-payment-consent response from the ASPSP.")]),t._v(" "),n("li",[t._v("The Initiation object from the international-payment-consent.")]),t._v(" "),n("li",[t._v("The MultiAuthorisation object if the international-payment resource requires multiple authorisations.")]),t._v(" "),n("li",[t._v("An ASPSP should conditionally provide "),n("code",[t._v("Debtor/Name")]),t._v(" in the Payment Order Response, even when the Payer didn't provide the Debtor Account via PISP.")])]),t._v(" "),n("h4",{attrs:{id:"data-dictionary-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-2"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBWriteInternationalResponse5")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteDataInternationalResponse6")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("InternationalPaymentId")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/InternationalPaymentId")]),t._v(" "),n("td",[t._v("OB: Unique identification as assigned by the ASPSP to uniquely identify the international payment resource.")]),t._v(" "),n("td",[t._v("Max40Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ConsentId")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/ConsentId")]),t._v(" "),n("td",[t._v("OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.")]),t._v(" "),n("td",[t._v("Max128Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("CreationDateTime")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/CreationDateTime")]),t._v(" "),n("td",[t._v("Date and time at which the resource was created.")]),t._v(" "),n("td",[t._v("ISODateTime")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Status")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Status")]),t._v(" "),n("td",[t._v("Specifies the status of the payment information group.")]),t._v(" "),n("td",[t._v("OBTransactionIndividualStatus1Code")]),t._v(" "),n("td",[t._v("AcceptedCreditSettlementCompleted AcceptedWithoutPosting AcceptedSettlementCompleted AcceptedSettlementInProcess Pending Rejected")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("StatusUpdateDateTime")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/StatusUpdateDateTime")]),t._v(" "),n("td",[t._v("Date and time at which the resource status was updated.")]),t._v(" "),n("td",[t._v("ISODateTime")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ExpectedExecutionDateTime")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/ExpectedExecutionDateTime")]),t._v(" "),n("td",[t._v("Expected execution date and time for the payment resource.")]),t._v(" "),n("td",[t._v("ISODateTime")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ExpectedSettlementDateTime")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/ExpectedSettlementDateTime")]),t._v(" "),n("td",[t._v("Expected settlement date and time for the payment resource.")]),t._v(" "),n("td",[t._v("ISODateTime")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Refund")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Refund")]),t._v(" "),n("td",[t._v("Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.")]),t._v(" "),n("td",[t._v("OBInternationalRefundAccount1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Charges")]),t._v(" "),n("td",[t._v("0..n")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Charges")]),t._v(" "),n("td",[t._v("Set of elements used to provide details of a charge for the payment initiation.")]),t._v(" "),n("td",[t._v("OBCharge2")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ExchangeRateInformation")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/ExchangeRateInformation")]),t._v(" "),n("td",[t._v("Further detailed information on the exchange rate that has been used in the payment transaction.")]),t._v(" "),n("td",[t._v("OBExchangeRate2")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Initiation")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Initiation")]),t._v(" "),n("td",[t._v("The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.")]),t._v(" "),n("td",[t._v("OBInternational3")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("MultiAuthorisation")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/MultiAuthorisation")]),t._v(" "),n("td",[t._v("The multiple authorisation flow response from the ASPSP.")]),t._v(" "),n("td",[t._v("OBMultiAuthorisation1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Debtor")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Debtor")]),t._v(" "),n("td",[t._v("Set of elements used to identify a person or an organisation.")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("SchemeName")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Debtor/SchemeName")]),t._v(" "),n("td",[t._v("Name of the identification scheme, in a coded form as published in an external list.")]),t._v(" "),n("td",[t._v("OBExternalAccountIdentification4Code")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Identification")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Debtor/Identification")]),t._v(" "),n("td",[t._v("Identification assigned by an institution to identify an account. This identification is known by the account owner.")]),t._v(" "),n("td",[t._v("Max256Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Name")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Debtor/Name")]),t._v(" "),n("td",[t._v("The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.")]),t._v(" "),n("td",[t._v("Max350Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("SecondaryIdentification")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalResponse5/Data/Debtor/SecondaryIdentification")]),t._v(" "),n("td",[t._v("This is secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).")]),t._v(" "),n("td",[t._v("Max34Text")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"international-payment-order-payment-details-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#international-payment-order-payment-details-response"}},[t._v("#")]),t._v(" International Payment Order - Payment Details - Response")]),t._v(" "),n("p",[t._v("The OBWritePaymentDetailsResponse1 object will be used for a response to a call to:")]),t._v(" "),n("ul",[n("li",[t._v("GET /international-payments/{InternationalPaymentId}/payment-details")])]),t._v(" "),n("h4",{attrs:{id:"uml-diagram-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram-3"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),n("p",[n("img",{attrs:{src:a(157),alt:"International Payment Order - Payment Details - Response"}})]),t._v(" "),n("h4",{attrs:{id:"data-dictionary-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-3"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBWritePaymentDetailsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteDataPaymentOrderStatusResponse1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("PaymentStatus")]),t._v(" "),n("td",[t._v("0..unbounded")]),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1/Data/PaymentStatus")]),t._v(" "),n("td",[t._v("Payment status details.")]),t._v(" "),n("td",[t._v("OBWritePaymentDetails1")]),t._v(" "),n("td"),t._v(" "),n("td")])])])])}),[],!1,null,null,null);e.default=i.exports},156:function(t,e,a){t.exports=a.p+"assets/img/image2018-6-29_16-36-34.fb8b166e.png"},157:function(t,e,a){t.exports=a.p+"assets/img/OBWritePaymentDetailsResponse1.91ca6994.svg"},218:function(t,e,a){t.exports=a.p+"assets/img/PaymentStatusLifeCycle.836bdcbb.png"},884:function(t,e,a){t.exports=a.p+"assets/img/OBWriteInternational3.146bbfae.svg"},885:function(t,e,a){t.exports=a.p+"assets/img/OBWriteInternationalResponse5.a544e498.svg"}}]);