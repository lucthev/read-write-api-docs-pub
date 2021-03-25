(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1445:function(t,e,a){"use strict";a.r(e);var n=a(6),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"international-scheduled-payments-v3-1-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#international-scheduled-payments-v3-1-8"}},[t._v("#")]),t._v(" International Scheduled Payments - v3.1.8 ")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#endpoints"}},[t._v("Endpoints")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#post-international-scheduled-payments"}},[t._v("POST /international-scheduled-payments")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#status"}},[t._v("Status")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#get-international-scheduled-paymentsinternationalscheduledpaymentid"}},[t._v("GET /international-scheduled-payments/{InternationalScheduledPaymentId}")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#status-1"}},[t._v("Status")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#get-international-scheduled-paymentsinternationalscheduledpaymentidpayment-details"}},[t._v("GET /international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#status-2"}},[t._v("Status")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#state-model"}},[t._v("State Model")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#payment-order"}},[t._v("Payment Order")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#multiple-authorisation"}},[t._v("Multiple Authorisation")])])])])])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#reused-classes"}},[t._v("Reused Classes")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#obinternationalscheduled3"}},[t._v("OBInternationalScheduled3")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#obexchangerate2"}},[t._v("OBExchangeRate2")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#international-scheduled-payment---request"}},[t._v("International Scheduled Payment - Request")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#uml-diagram"}},[t._v("UML Diagram")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#notes"}},[t._v("Notes")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary"}},[t._v("Data Dictionary")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#international-scheduled-payment---response"}},[t._v("International Scheduled Payment - Response")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#uml-diagram-1"}},[t._v("UML Diagram")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#notes-1"}},[t._v("Notes")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary-1"}},[t._v("Data Dictionary")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#international-schedule-payment-order---payment-details---response"}},[t._v("International Schedule Payment Order - Payment Details - Response")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#uml-diagram-2"}},[t._v("UML Diagram")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary-2"}},[t._v("Data Dictionary")])])])])])])]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The International Scheduled Payments resource is used by a PISP to initiate an International Scheduled Payment.")]),t._v(" "),n("p",[t._v("This resource description should be read in conjunction with a compatible Payment Initiation API Profile.")]),t._v(" "),n("h2",{attrs:{id:"endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Resource")]),t._v(" "),n("th",[t._v("HTTP Operation")]),t._v(" "),n("th",[t._v("Endpoint")]),t._v(" "),n("th",[t._v("Mandatory ?")]),t._v(" "),n("th",[t._v("Scope")]),t._v(" "),n("th",[t._v("Grant Type")]),t._v(" "),n("th",[t._v("Message Signing")]),t._v(" "),n("th",[t._v("Idempotency Key")]),t._v(" "),n("th",[t._v("Request Object")]),t._v(" "),n("th",[t._v("Response Object")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("international-scheduled-payments")]),t._v(" "),n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("POST /international-scheduled-payments")]),t._v(" "),n("td",[t._v("Conditional")]),t._v(" "),n("td",[t._v("payments")]),t._v(" "),n("td",[t._v("Authorization Code")]),t._v(" "),n("td",[t._v("Signed Request Signed Response")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduled3")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6")])]),t._v(" "),n("tr",[n("td",[t._v("international-scheduled-payments")]),t._v(" "),n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("GET /international-scheduled-payments/{InternationalScheduledPaymentId}")]),t._v(" "),n("td",[t._v("Mandatory (if resource POST implemented)")]),t._v(" "),n("td",[t._v("payments")]),t._v(" "),n("td",[t._v("Client Credentials")]),t._v(" "),n("td",[t._v("Signed Response")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("NA")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6")])]),t._v(" "),n("tr",[n("td",[t._v("payment-details")]),t._v(" "),n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("GET /international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details")]),t._v(" "),n("td",[t._v("Optional")]),t._v(" "),n("td",[t._v("payments")]),t._v(" "),n("td",[t._v("Client Credentials")]),t._v(" "),n("td",[t._v("Signed Response")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("NA")]),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1")])])])]),t._v(" "),n("h3",{attrs:{id:"post-international-scheduled-payments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-international-scheduled-payments"}},[t._v("#")]),t._v(" POST /international-scheduled-payments")]),t._v(" "),n("p",[t._v("Once the international-scheduled-payment-consent has been authorised by the PSU, the PISP can proceed to submit the international-scheduled-payment for processing:")]),t._v(" "),n("ul",[n("li",[t._v("This is done by making a POST request to the "),n("strong",[t._v("international-scheduled-payments")]),t._v(" endpoint.")]),t._v(" "),n("li",[t._v("This request is an instruction to the ASPSP to begin the international scheduled payment journey. The PISP must submit the international scheduled payment immediately, however, there are some scenarios where the ASPSP may not warehouse the international scheduled payment immediately (e.g. busy periods at the ASPSP).")]),t._v(" "),n("li",[t._v("The PISP "),n("strong",[t._v("must")]),t._v(" ensure that the Initiation and Risk sections of the international-scheduled-payment match the corresponding Initiation and Risk sections of the international-scheduled-payment-consent resource. If the two do not match, the ASPSP "),n("strong",[t._v("must not")]),t._v(" process the request and "),n("strong",[t._v("must")]),t._v(" respond with a 400 (Bad Request).")]),t._v(" "),n("li",[t._v("Any operations on the international-scheduled-payment resource will not result in a Status change for the international-scheduled-payment resource.")])]),t._v(" "),n("h4",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),n("p",[t._v('An international-scheduled-payment can only be created if its corresponding international-scheduled-payment-consent resource has the status of "Authorised".')]),t._v(" "),n("p",[t._v("The international-scheduled-payment resource that is created successfully must have one of the following Status codes:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Status")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("InitiationPending")])]),t._v(" "),n("tr",[n("td",[t._v("InitiationFailed")])]),t._v(" "),n("tr",[n("td",[t._v("InitiationCompleted")])])])]),t._v(" "),n("h3",{attrs:{id:"get-international-scheduled-payments-internationalscheduledpaymentid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-international-scheduled-payments-internationalscheduledpaymentid"}},[t._v("#")]),t._v(" GET /international-scheduled-payments/{InternationalScheduledPaymentId}")]),t._v(" "),n("p",[t._v("A PISP can retrieve the international-scheduled-payment to check its status.")]),t._v(" "),n("h4",{attrs:{id:"status-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status-2"}},[t._v("#")]),t._v(" Status")]),t._v(" "),n("p",[t._v("The international-scheduled-payment resource must have one of the following Status codes:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Status")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("InitiationPending")])]),t._v(" "),n("tr",[n("td",[t._v("InitiationFailed")])]),t._v(" "),n("tr",[n("td",[t._v("InitiationCompleted")])]),t._v(" "),n("tr",[n("td",[t._v("Cancelled")])])])]),t._v(" "),n("h3",{attrs:{id:"get-international-scheduled-payments-internationalscheduledpaymentid-payment-details"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-international-scheduled-payments-internationalscheduledpaymentid-payment-details"}},[t._v("#")]),t._v(" GET /international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details")]),t._v(" "),n("p",[t._v("A PISP can retrieve the Details of the underlying payment transaction via this endpoint. This resource allows ASPSPs to return richer list of Payment Statuses, and if available payment scheme related statuses.")]),t._v(" "),n("h4",{attrs:{id:"status-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status-3"}},[t._v("#")]),t._v(" Status")]),t._v(" "),n("p",[t._v("The international-scheduled-payments - payment-details must have one of the following PaymentStatusCode code-set enumerations:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Status")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Accepted")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedCancellationRequest")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedTechnicalValidation")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedCustomerProfile")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedFundsChecked")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedWithChange")])]),t._v(" "),n("tr",[n("td",[t._v("Pending")])]),t._v(" "),n("tr",[n("td",[t._v("Rejected")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedSettlementInProcess")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedSettlementCompleted")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedWithoutPosting")])]),t._v(" "),n("tr",[n("td",[t._v("AcceptedCreditSettlementCompleted")])]),t._v(" "),n("tr",[n("td",[t._v("Cancelled")])]),t._v(" "),n("tr",[n("td",[t._v("NoCancellationProcess")])]),t._v(" "),n("tr",[n("td",[t._v("PartiallyAcceptedCancellationRequest")])]),t._v(" "),n("tr",[n("td",[t._v("PartiallyAcceptedTechnicalCorrect")])]),t._v(" "),n("tr",[n("td",[t._v("PaymentCancelled")])]),t._v(" "),n("tr",[n("td",[t._v("PendingCancellationRequest")])]),t._v(" "),n("tr",[n("td",[t._v("Received")])]),t._v(" "),n("tr",[n("td",[t._v("RejectedCancellationRequest")])])])]),t._v(" "),n("h3",{attrs:{id:"state-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state-model"}},[t._v("#")]),t._v(" State Model")]),t._v(" "),n("h4",{attrs:{id:"payment-order"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#payment-order"}},[t._v("#")]),t._v(" Payment Order")]),t._v(" "),n("p",[t._v("The state model for the international-scheduled-payment resource describes the initiation status only. I.e., not the subsequent execution of the international-scheduled-payment.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(889),alt:" ScheduledPaymentOrderStatus "}})]),t._v(" "),n("p",[t._v("The definitions for the Status:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Status")]),t._v(" "),n("th",[t._v("Payment Status Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("1")]),t._v(" "),n("td",[t._v("InitiationPending")]),t._v(" "),n("td",[t._v("The initiation of the payment order is pending.")])]),t._v(" "),n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("InitiationFailed")]),t._v(" "),n("td",[t._v("The initiation of the payment order has failed.")])]),t._v(" "),n("tr",[n("td",[t._v("3")]),t._v(" "),n("td",[t._v("InitiationCompleted")]),t._v(" "),n("td",[t._v("The initiation of the payment order is complete.")])]),t._v(" "),n("tr",[n("td",[t._v("4")]),t._v(" "),n("td",[t._v("Cancelled")]),t._v(" "),n("td",[t._v("Payment initiation has been successfully cancelled after having received a request for cancellation.")])])])]),t._v(" "),n("h5",{attrs:{id:"multiple-authorisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multiple-authorisation"}},[t._v("#")]),t._v(" Multiple Authorisation")]),t._v(" "),n("p",[t._v("If the payment-order requires multiple authorisations, the Status of the multiple authorisations will be updated in the MultiAuthorisation object.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(156),alt:" image2018-6-29_16-36-34 "}})]),t._v(" "),n("p",[t._v("The definitions for the Status:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Status")]),t._v(" "),n("th",[t._v("Status Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("1")]),t._v(" "),n("td",[t._v("AwaitingFurtherAuthorisation")]),t._v(" "),n("td",[t._v("The payment-order resource is awaiting further authorisation.")])]),t._v(" "),n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("Rejected")]),t._v(" "),n("td",[t._v("The payment-order resource has been rejected by an authoriser.")])]),t._v(" "),n("tr",[n("td",[t._v("3")]),t._v(" "),n("td",[t._v("Authorised")]),t._v(" "),n("td",[t._v("The payment-order resource has been successfully authorised by all required authorisers.")])])])]),t._v(" "),n("h2",{attrs:{id:"data-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data Model")]),t._v(" "),n("p",[t._v("The data dictionary section gives the detail on the payload content for the International Scheduled Payment API flows.")]),t._v(" "),n("h3",{attrs:{id:"reused-classes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reused-classes"}},[t._v("#")]),t._v(" Reused Classes")]),t._v(" "),n("h4",{attrs:{id:"obinternationalscheduled3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#obinternationalscheduled3"}},[t._v("#")]),t._v(" OBInternationalScheduled3")]),t._v(" "),n("p",[t._v("The OBInternationalScheduled3 class is defined in the "),n("RouterLink",{attrs:{to:"/v3.1.8/resources-and-data-models/pisp/international-scheduled-payment-consents.html#obinternationalscheduled3"}},[t._v("international-scheduled-payment-consents")]),t._v(" page.")],1),t._v(" "),n("h4",{attrs:{id:"obexchangerate2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#obexchangerate2"}},[t._v("#")]),t._v(" OBExchangeRate2")]),t._v(" "),n("p",[t._v("The OBExchangeRate2 class is defined in the "),n("RouterLink",{attrs:{to:"/v3.1.8/resources-and-data-models/pisp/international-scheduled-payment-consents.html#obexchangerate2"}},[t._v("international-scheduled-payment-consents")]),t._v(" page.")],1),t._v(" "),n("h3",{attrs:{id:"international-scheduled-payment-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#international-scheduled-payment-request"}},[t._v("#")]),t._v(" International Scheduled Payment - Request")]),t._v(" "),n("p",[t._v("The OBWriteInternationalScheduled3 object will be used for a call to:")]),t._v(" "),n("ul",[n("li",[t._v("POST /international-scheduled-payments")])]),t._v(" "),n("h4",{attrs:{id:"uml-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),n("p",[n("img",{attrs:{src:a(890),alt:" OBWriteInternationalScheduled3 "}})]),t._v(" "),n("h4",{attrs:{id:"notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),n("p",[t._v("The international-scheduled-payment "),n("strong",[t._v("request")]),t._v(" object contains the:")]),t._v(" "),n("ul",[n("li",[t._v("ConsentId.")]),t._v(" "),n("li",[t._v("The full Initiation and Risk objects from the international-scheduled-payment-consent request.")]),t._v(" "),n("li",[t._v("The "),n("strong",[t._v("Initiation")]),t._v(" and "),n("strong",[t._v("Risk")]),t._v(" sections of the international-scheduled-payment request "),n("strong",[t._v("must")]),t._v(" match the "),n("strong",[t._v("Initiation")]),t._v(" and "),n("strong",[t._v("Risk")]),t._v(" sections of the corresponding international-scheduled-payment-consent request.")])]),t._v(" "),n("h4",{attrs:{id:"data-dictionary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBWriteInternationalScheduled3")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduled3")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteInternationalScheduled3")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduled3/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteDataInternationalScheduled3")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ConsentId")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduled3/Data/ConsentId")]),t._v(" "),n("td",[t._v("OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.")]),t._v(" "),n("td",[t._v("Max128Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Initiation")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduled3/Data/Initiation")]),t._v(" "),n("td",[t._v("The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.")]),t._v(" "),n("td",[t._v("OBInternationalScheduled3")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Risk")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduled3/Risk")]),t._v(" "),n("td",[t._v("The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.")]),t._v(" "),n("td",[t._v("OBRisk1")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"international-scheduled-payment-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#international-scheduled-payment-response"}},[t._v("#")]),t._v(" International Scheduled Payment - Response")]),t._v(" "),n("p",[t._v("The OBWriteInternationalScheduledResponse6 object will be used for a response to a call to:")]),t._v(" "),n("ul",[n("li",[t._v("POST /international-scheduled-payments")]),t._v(" "),n("li",[t._v("GET /international-scheduled-payments/{InternationalScheduledPaymentId}")])]),t._v(" "),n("h4",{attrs:{id:"uml-diagram-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram-2"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),n("p",[n("img",{attrs:{src:a(891),alt:" OBWriteInternationalScheduledResponse6 "}})]),t._v(" "),n("h4",{attrs:{id:"notes-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notes-2"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),n("p",[t._v("The international-scheduled-payment "),n("strong",[t._v("response")]),t._v(" object contains the:")]),t._v(" "),n("ul",[n("li",[t._v("InternationalScheduledPaymentId.")]),t._v(" "),n("li",[t._v("ConsentId.")]),t._v(" "),n("li",[t._v("CreationDateTime the international-scheduled-payment resource was created.")]),t._v(" "),n("li",[t._v("Status and StatusUpdateDateTime of the international-scheduled-payment resource.")]),t._v(" "),n("li",[t._v("ExpectedExecutionDateTime for the international-scheduled-payment resource.")]),t._v(" "),n("li",[t._v("ExpectedSettlementDateTime for the international-scheduled-payment resource.")]),t._v(" "),n("li",[t._v("Refund account details, if requested by PISP as part of the international-scheduled-payment-consents resource.")]),t._v(" "),n("li",[t._v("The Charges and ExchangeRateInformation in the international-scheduled-payment-consent response from the ASPSP.")]),t._v(" "),n("li",[t._v("The Initiation object from the international-payment-consent.")]),t._v(" "),n("li",[t._v("The MultiAuthorisation object if the international-scheduled-payment resource requires multiple authorisations.")]),t._v(" "),n("li",[t._v("An ASPSP should conditionally provide "),n("code",[t._v("Debtor/Name")]),t._v(" in the Payment Order Response, even when the Payer didn't provide the Debtor Account via PISP.")])]),t._v(" "),n("h4",{attrs:{id:"data-dictionary-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-2"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBWriteInternationalScheduledResponse6")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteDataInternationalScheduledResponse6")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("InternationalScheduledPaymentId")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/InternationalScheduledPaymentId")]),t._v(" "),n("td",[t._v("OB: Unique identification as assigned by the ASPSP to uniquely identify the international scheduled payment resource.")]),t._v(" "),n("td",[t._v("Max40Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ConsentId")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/ConsentId")]),t._v(" "),n("td",[t._v("OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.")]),t._v(" "),n("td",[t._v("Max128Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("CreationDateTime")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/CreationDateTime")]),t._v(" "),n("td",[t._v("Date and time at which the resource was created.")]),t._v(" "),n("td",[t._v("ISODateTime")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Status")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Status")]),t._v(" "),n("td",[t._v("Specifies the status of the payment order resource.")]),t._v(" "),n("td",[t._v("OBExternalStatus1Code")]),t._v(" "),n("td",[t._v("InitiationCompleted InitiationFailed InitiationPending Cancelled")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("StatusUpdateDateTime")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/StatusUpdateDateTime")]),t._v(" "),n("td",[t._v("Date and time at which the resource status was updated.")]),t._v(" "),n("td",[t._v("ISODateTime")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ExpectedExecutionDateTime")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/ExpectedExecutionDateTime")]),t._v(" "),n("td",[t._v("Expected execution date and time for the payment resource.")]),t._v(" "),n("td",[t._v("ISODateTime")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ExpectedSettlementDateTime")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/ExpectedSettlementDateTime")]),t._v(" "),n("td",[t._v("Expected settlement date and time for the payment resource.")]),t._v(" "),n("td",[t._v("ISODateTime")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Refund")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Refund")]),t._v(" "),n("td",[t._v("Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.")]),t._v(" "),n("td",[t._v("OBInternationalRefundAccount1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Charges")]),t._v(" "),n("td",[t._v("0..n")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Charges")]),t._v(" "),n("td",[t._v("Set of elements used to provide details of a charge for the payment initiation.")]),t._v(" "),n("td",[t._v("OBCharge2")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("ExchangeRateInformation")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/ExchangeRateInformation")]),t._v(" "),n("td",[t._v("Further detailed information on the exchange rate that has been used in the payment transaction.")]),t._v(" "),n("td",[t._v("OBExchangeRate2")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Initiation")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Initiation")]),t._v(" "),n("td",[t._v("The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.")]),t._v(" "),n("td",[t._v("OBInternationalScheduled3")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("MultiAuthorisation")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/MultiAuthorisation")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBMultiAuthorisation1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Debtor")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Debtor")]),t._v(" "),n("td",[t._v("Set of elements used to identify a person or an organisation.")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("SchemeName")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Debtor/SchemeName")]),t._v(" "),n("td",[t._v("Name of the identification scheme, in a coded form as published in an external list.")]),t._v(" "),n("td",[t._v("OBExternalAccountIdentification4Code")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Identification")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Debtor/Identification")]),t._v(" "),n("td",[t._v("Identification assigned by an institution to identify an account. This identification is known by the account owner.")]),t._v(" "),n("td",[t._v("Max256Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Name")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Debtor/Name")]),t._v(" "),n("td",[t._v("The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.")]),t._v(" "),n("td",[t._v("Max350Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("SecondaryIdentification")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBWriteInternationalScheduledResponse6/Data/Debtor/SecondaryIdentification")]),t._v(" "),n("td",[t._v("This is secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).")]),t._v(" "),n("td",[t._v("Max34Text")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"international-schedule-payment-order-payment-details-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#international-schedule-payment-order-payment-details-response"}},[t._v("#")]),t._v(" International Schedule Payment Order - Payment Details - Response")]),t._v(" "),n("p",[t._v("The OBWritePaymentDetailsResponse1 object will be used for a response to a call to:")]),t._v(" "),n("ul",[n("li",[t._v("GET /international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details")])]),t._v(" "),n("h4",{attrs:{id:"uml-diagram-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram-3"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),n("p",[n("img",{attrs:{src:a(157),alt:"OBWritePaymentDetailsResponse1"}})]),t._v(" "),n("h4",{attrs:{id:"data-dictionary-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-3"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBWritePaymentDetailsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBWriteDataPaymentOrderStatusResponse1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("PaymentStatus")]),t._v(" "),n("td",[t._v("0..unbounded")]),t._v(" "),n("td",[t._v("OBWritePaymentDetailsResponse1/Data/PaymentStatus")]),t._v(" "),n("td",[t._v("Payment status details.")]),t._v(" "),n("td",[t._v("OBWritePaymentDetails1")]),t._v(" "),n("td"),t._v(" "),n("td")])])])])}),[],!1,null,null,null);e.default=i.exports},156:function(t,e,a){t.exports=a.p+"assets/img/image2018-6-29_16-36-34.fb8b166e.png"},157:function(t,e,a){t.exports=a.p+"assets/img/OBWritePaymentDetailsResponse1.91ca6994.svg"},889:function(t,e,a){t.exports=a.p+"assets/img/ScheduledPaymentOrderStatus.f5b2c2cc.png"},890:function(t,e,a){t.exports=a.p+"assets/img/OBWriteInternationalScheduled3.2cb1a07b.svg"},891:function(t,e,a){t.exports=a.p+"assets/img/OBWriteInternationalScheduledResponse6.09d8842b.svg"}}]);