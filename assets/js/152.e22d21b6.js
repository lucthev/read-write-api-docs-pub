(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1006:function(e,t,n){"use strict";n.r(t);var o=n(6),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"confirmation-of-funds-api-profile-v3-1-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#confirmation-of-funds-api-profile-v3-1-3"}},[e._v("#")]),e._v(" Confirmation of Funds API Profile - v3.1.3")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#overview"}},[e._v("Overview")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#document-structure"}},[e._v("Document Structure")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#resources"}},[e._v("Resources")])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#basics"}},[e._v("Basics")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#overview-1"}},[e._v("Overview")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#steps"}},[e._v("Steps")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#sequence-diagram"}},[e._v("Sequence Diagram")])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#idempotency"}},[e._v("Idempotency")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#release-management"}},[e._v("Release Management")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#funds-confirmation-consent"}},[e._v("Funds Confirmation Consent")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#post"}},[e._v("POST")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#get"}},[e._v("GET")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#delete"}},[e._v("DELETE")])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#funds-confirmation-resource"}},[e._v("Funds Confirmation Resource")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#post-1"}},[e._v("POST")])])])])])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#security--access-control"}},[e._v("Security & Access Control")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#scopes"}},[e._v("Scopes")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#grants-types"}},[e._v("Grants Types")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#consent-authorisation"}},[e._v("Consent Authorisation")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#consent-elements"}},[e._v("Consent Elements")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#funds-confirmation-consent-status"}},[e._v("Funds Confirmation Consent Status")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#consent-re-authentication"}},[e._v("Consent Re-authentication")])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#consent-revocation"}},[e._v("Consent Revocation")])])])])]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The Confirmation of Funds API Profile describes the flows and common functionality for the Confirmation of Funds API, which allows a Card Based Payment Instrument Issuer ('CBPII') to:")]),e._v(" "),o("ul",[o("li",[e._v('Register an intent to confirm funds by creating a "funds confirmation consent" resource with an ASPSP, for agreement between the PSU and ASPSP. This consent is a long lived consent, and contains the length of time (expiration date) the customer (PSU) would like to provide to the CBPII; and')]),e._v(" "),o("li",[e._v("Subsequently make a request to confirm funds are available.\n"),o("ul",[o("li",[e._v("Funds can only be confirmed against the currency of the account.")])])])]),e._v(" "),o("p",[e._v("This profile should be read in conjunction with a compatible Read/Write Data API Profile which provides a description of the elements that are common across all the Read/Write Data APIs, and compatible individual resources.")]),e._v(" "),o("h3",{attrs:{id:"document-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#document-structure"}},[e._v("#")]),e._v(" Document Structure")]),e._v(" "),o("p",[e._v("This document consists of the following parts:")]),e._v(" "),o("p",[o("strong",[e._v("Overview:")]),e._v(" Provides an overview of the profile.")]),e._v(" "),o("p",[o("strong",[e._v("Basics:")]),e._v(" Identifies the flows and release management.")]),e._v(" "),o("p",[o("strong",[e._v("Security & Access Control:")]),e._v(" Specifies the means for CBPIIs and PSUs to authenticate themselves and provide consent.")]),e._v(" "),o("h3",{attrs:{id:"resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),o("p",[e._v("Each of the Payment Initiation API resources are documented in the  "),o("a",{attrs:{href:"../resources%20and%20data%20models/cbpii"}},[o("em",[e._v("Resources and Data Models")]),e._v("  /  "),o("em",[e._v("CBPII")])]),e._v(" area of the specification. Each resource is documented with:")]),e._v(" "),o("ul",[o("li",[e._v("Endpoints\n"),o("ul",[o("li",[e._v("The API endpoints available for the resource.")])])]),e._v(" "),o("li",[e._v("Data Model\n"),o("ul",[o("li",[e._v("Resource definition.")]),e._v(" "),o("li",[e._v("UML diagram.")]),e._v(" "),o("li",[e._v("Permissions as they relate to accessing the resource.")]),e._v(" "),o("li",[e._v("Data dictionary - which defines fields, re-usable classes, mandatory (1..1) or conditional (0..1) as defined in the Design Principles section, and enumerations.")])])]),e._v(" "),o("li",[e._v("Usage Examples")])]),e._v(" "),o("h2",{attrs:{id:"basics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),o("h3",{attrs:{id:"overview-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The diagram below provides a general outline of a confirmation of funds request and flow using the Confirmation of Funds APIs. It assumes a CBPII has issued a card to a PSU, and the PSU would like to use a PSD2 in-scope account as a funding mechanism for that card.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(281),alt:"Confirmation of Funds Flow"}})]),e._v(" "),o("h4",{attrs:{id:"steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),o("p",[e._v("The Consent model for the Confirmation of Funds API differs to the Payments API and the Account and Transactions API, as the consent is held between the PSU and the ASPSP, rather than between the PSU and the TPP. Whilst the flow follows the same process, the context for each step has a different meaning and is detailed below.")]),e._v(" "),o("p",[e._v("Step 1: Agree Funds Confirmation")]),e._v(" "),o("ul",[o("li",[e._v("This flow begins with a PSU committing to give explicit consent, to their ASPSP to respond to confirmation of funds requests from the CBPII.")])]),e._v(" "),o("p",[e._v("Step 2: Setup Funds Confirmation Consent")]),e._v(" "),o("ul",[o("li",[e._v("The CBPII connects to the ASPSP that services the PSU's account(s) and creates a "),o("strong",[e._v("funds-confirmation-consent")]),e._v(" resource. This informs the ASPSP that one of its PSUs would like to grant access to confirm the availability of funds to a CBPII. The ASPSP responds with an identifier for the resource (the ConsentId - which is the intent identifier).")]),e._v(" "),o("li",[e._v("This step is carried out by making a "),o("strong",[e._v("POST")]),e._v(" request to the /funds-confirmation-consents endpoint, under a client credentials grant.")]),e._v(" "),o("li",[e._v("The setup payload will include these fields:\n"),o("ul",[o("li",[e._v("Debtor Account - mandatory debtor account details to capture the account from which the availability of funds will be confirmed.")]),e._v(" "),o("li",[e._v("Expiration Date Time - an optional expiration for when the CBPII will no longer have access to confirm funds on a PSU's account.")])])])]),e._v(" "),o("p",[e._v("Step 3: Agree Funds Confirmation Consent")]),e._v(" "),o("ul",[o("li",[e._v("The CBPII requests the PSU to agree the consent. The ASPSP may carry this out by using a "),o("em",[e._v("redirection flow")]),e._v(" or a "),o("em",[e._v("decoupled flow")]),e._v(".\n"),o("ul",[o("li",[e._v("In a redirection flow, the CBPII redirects the PSU to the ASPSP.\n"),o("ul",[o("li",[e._v("The redirect includes the ConsentId generated in the previous step.")]),e._v(" "),o("li",[e._v("This allows the ASPSP to correlate the "),o("strong",[e._v("funds-confirmation-consent")]),e._v(" that was setup.")]),e._v(" "),o("li",[e._v("The ASPSP authenticates the PSU.")]),e._v(" "),o("li",[e._v("The PSU gives explicit consent to the ASPSP to respond to confirmation of funds requests from the CBPII.")]),e._v(" "),o("li",[e._v("The ASPSP updates the state of the "),o("strong",[e._v("funds-confirmation-consent")]),e._v(" resource internally to indicate that the resource has been authorised.")]),e._v(" "),o("li",[e._v("Once the consent has been authorised, the PSU is redirected back to the CBPII.")])])]),e._v(" "),o("li",[e._v("In a decoupled flow, the ASPSP requests the PSU to authorise consent on an "),o("em",[e._v("authentication device")]),e._v(" that is separate from the "),o("em",[e._v("consumption device")]),e._v(" on which the PSU is interacting with the CBPII.\n"),o("ul",[o("li",[e._v("The decoupled flow is initiated by the CBPII calling a back-channel authorisation request.")]),e._v(" "),o("li",[e._v("The request contains a 'hint' that identifies the PSU paired with the consent to be authorised.")]),e._v(" "),o("li",[e._v("The ASPSP authenticates the PSU.")]),e._v(" "),o("li",[e._v("The PSU gives explicit consent to the ASPSP to respond to confirmation of funds requests from the CBPII.")]),e._v(" "),o("li",[e._v("The ASPSP updates the state of the "),o("strong",[e._v("funds-confirmation-consent")]),e._v(" resource internally to indicate that the resource has been authorised.")]),e._v(" "),o("li",[e._v("Once the consent has been authorised, the ASPSP can make a callback to the PISP to provide an access token.")])])])])])]),e._v(" "),o("p",[e._v("Step 4: Initiate Card Payment")]),e._v(" "),o("ul",[o("li",[e._v("A card payment is initiated by the PSU (directly or indirectly). This process is outside the scope of the Confirmation of Funds API.")])]),e._v(" "),o("p",[e._v("Step 5: Confirm Funds")]),e._v(" "),o("ul",[o("li",[e._v("The CBPII connects to the ASPSP that services the PSU's account(s) and creates a "),o("strong",[e._v("funds-confirmation")]),e._v(" resource. This informs the ASPSP that the CBPII would like to confirm funds are available in the specific payment account.")]),e._v(" "),o("li",[e._v("The ASPSP responds with a yes/no (boolean) for the resource.")]),e._v(" "),o("li",[e._v("This step is carried out by making a "),o("strong",[e._v("POST")]),e._v(" request to the /funds-confirmations endpoint, under an authorization code grant")]),e._v(" "),o("li",[e._v("The setup payload will include these fields - which describe the data that the PSU has consented with the CBPII:\n"),o("ul",[o("li",[e._v("Amount - the amount to be confirmed available.")]),e._v(" "),o("li",[e._v("ConsentId - an Id that relates the request to a "),o("strong",[e._v("funds-confirmation-consent")]),e._v(", and specific account with the ASPSP. This Id must match the intent identifier.")])])])]),e._v(" "),o("p",[e._v("Step 6: Get Funds Confirmation Consent Status")]),e._v(" "),o("ul",[o("li",[e._v("The CBPII may check the status of the "),o("strong",[e._v("funds-confirmation-consent")]),e._v(" resource (with the ConsentId).")]),e._v(" "),o("li",[e._v("This step is carried out by making a "),o("strong",[e._v("GET")]),e._v(" request to the /funds-confirmation-consents endpoint, under a client credentials grant.")])]),e._v(" "),o("h4",{attrs:{id:"sequence-diagram"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sequence-diagram"}},[e._v("#")]),e._v(" Sequence Diagram")]),e._v(" "),o("p",[o("img",{attrs:{src:n(282),alt:""}})]),e._v(" "),o("details",[o("summary",[e._v("Diagram source")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("participant PSU\nparticipant CBPII\nparticipant ASPSP Authorisation Server\nparticipant ASPSP Resource Server\n\nautonumber\n\nnote over PSU, ASPSP Resource Server\nStep 1: Onboard with CBPII (Outside scope of CoF API)\nend note\n\nPSU -> CBPII: Onboard with CBPII and consent to Confirmation of Funds\n\nnote over PSU, ASPSP Resource Server\nStep 2: Setup Funds Confirmation Consent\nend note\n\nnote right of CBPII\n    Retrieve an access-token under the Client Credentials Flow.\nend note\n\nCBPII -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server --\x3e CBPII: access-token\n\nnote right of CBPII\n    Create a funds-confirmation-consent with Status=AwaitingAuthorisation.\n    Include access-token retrieved in [3].\nend note\n\nCBPII -> ASPSP Resource Server: POST /funds-confirmation-consents\nstate over ASPSP Resource Server: Consent Status: AwaitingAuthorisation\nASPSP Resource Server --\x3e CBPII: HTTP 201 (Created),  ConsentId\n\nnote right of CBPII\n    Respond to PSU with redirection to initiate\n    authorisation of the funds-confirmation-consent.\nend note\n\n\nnote over PSU, ASPSP Resource Server\nStep 3: Agree Funds Confirmation Consent\nend note\n\nalt Redirection (Using Authorization Code Grant)\n        CBPII --\x3e PSU: HTTP 302 (Found), Redirect (ConsentId)\n        PSU -> ASPSP Authorisation Server: Follow redirect (ConsentId)\n        PSU <-> ASPSP Authorisation Server: authenticate (and SCA if required)\n\n        ASPSP Authorisation Server -> ASPSP Resource Server: Update funds-confirmation-consent Status to Authorised\n        state over ASPSP Resource Server: Consent Status: Authorised\n        ASPSP Resource Server --\x3e ASPSP Authorisation Server: OK\n\n\n        note right of ASPSP Authorisation Server\n            Create and distribute an authorization-code\n            under the Authorization Flow.\n        end note\n\n        ASPSP Authorisation Server --\x3e PSU: HTTP 302 (Found), Redirect (authorization-code)\n        PSU -> CBPII: Follow redirect (authorization-code)\n\n\n        note right of CBPII\n            Retrieve an access-token under the Authorization Flow.\n            This token can then be used for the\n            funds-confirmation POST requests in step [16].\n        end note\n\n        CBPII -> ASPSP Authorisation Server: Exchange authorization-code for access token\n\n        ASPSP Authorisation Server --\x3e CBPII: access-token\n    else Decoupled (Using CIBA)\n        CBPII -> ASPSP Authorisation Server: POST /bc-authorize (login_hint_token)\n        ASPSP Authorisation Server -> CBPII: OK\n\n        PSU -> ASPSP Authorisation Server: Authorise (Consent Id)\n        PSU <-> ASPSP Authorisation Server: authenticate\n        PSU <-> ASPSP Authorisation Server: SCA if required\n        PSU <-> ASPSP Authorisation Server: select accounts\n        state over ASPSP Resource Server: Consent Status: Authorised\n\n        alt Using callback\n                ASPSP Authorisation Server -> CBPII: Callback (authorization-code)\n                CBPII <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\n                CBPII -> ASPSP Authorisation Server: Exchange authorization-code for access token\n                ASPSP Authorisation Server -> CBPII: access-token\n        else Using polling\n                CBPII <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\n                CBPII -> ASPSP Authorisation Server: Poll at /token using auth-req-id\n                ASPSP Authorisation Server -> CBPII: access-token\n        end alt\nend alt\nnote over PSU, ASPSP Resource Server\nStep 4: Initiate card payment (Outside scope of CoF API)\nend note\n\nPSU -> CBPII: Initiate card payment\n\n\nnote over PSU, ASPSP Resource Server\n Step 5: Confirm Funds\nend note\n\n\nnote right of CBPII\n    Create a funds-confirmation resource.\n    Include access-token retrieved in [14].\nend note\n\nCBPII -> ASPSP Resource Server: POST /funds-confirmations\n\nASPSP Resource Server -> ASPSP Resource Server: Validate funds-confirmation against funds-confirmation-consent\nASPSP Resource Server -> ASPSP Resource Server: Establish if funds are available.\n\nASPSP Resource Server --\x3e CBPII: HTTP 201 (Created),  FundsConfirmationId, FundsAvailable (true/false)\n\nnote over PSU, ASPSP Resource Server\nStep 6: Get Funds Confirmation Consent Status\nend note\n\nCBPII -> ASPSP Resource Server: GET /funds-confirmation-consents/{FundsConfirmationRequestId}\nASPSP Resource Server --\x3e CBPII: HTTP 200 (OK) funds-confirmation-consent resource\n\noption footer=bar\n")])])])]),e._v(" "),o("h3",{attrs:{id:"idempotency"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#idempotency"}},[e._v("#")]),e._v(" Idempotency")]),e._v(" "),o("p",[e._v("The API endpoints for creating funds-confirmation-consent and funds-confirmation resources "),o("strong",[e._v("are not")]),e._v(" idempotent.")]),e._v(" "),o("p",[e._v("If a time-out error occurs, we would expect a CBPII to create a new resource, rather than try with the same resource. This is particularly relevant for the funds-confirmation resource, where the availability of funds may have changed between requests.")]),e._v(" "),o("h3",{attrs:{id:"release-management"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#release-management"}},[e._v("#")]),e._v(" Release Management")]),e._v(" "),o("p",[e._v("This section overviews the release management and versioning strategy for the Account And Transaction API.")]),e._v(" "),o("h4",{attrs:{id:"funds-confirmation-consent"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#funds-confirmation-consent"}},[e._v("#")]),e._v(" Funds Confirmation Consent")]),e._v(" "),o("h5",{attrs:{id:"post"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[e._v("#")]),e._v(" POST")]),e._v(" "),o("ul",[o("li",[e._v("A CBPII "),o("strong",[e._v("must not")]),e._v(" create a consent on a newer version, and use it on a previous version.\n"),o("ul",[o("li",[e._v("E.g., ConsentId for a funds-confirmation-consent resource created in v4, must not be used to access v3 endpoints.")])])])]),e._v(" "),o("h5",{attrs:{id:"get"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" GET")]),e._v(" "),o("ul",[o("li",[e._v("A CBPII "),o("strong",[e._v("must not")]),e._v(" access a funds-confirmation-consent on an older version, via the ConsentId created in a newer version.\n"),o("ul",[o("li",[e._v("E.g., a funds-confirmation-consent created in v3 accessed via v2.")])])]),e._v(" "),o("li",[e._v("An ASPSP "),o("strong",[e._v("must")]),e._v(" allow a funds-confirmation-consent to be accessed in a newer version.")]),e._v(" "),o("li",[e._v("An ASPSP "),o("strong",[e._v("must")]),e._v(" ensure details in the funds-confirmation-consent are unchanged when accessed via a newer version.\n"),o("ul",[o("li",[e._v("E.g., a ConsentId created in v3 will have the same details when accessed via v3 and v4.")])])]),e._v(" "),o("li",[e._v("An ASPSP "),o("strong",[e._v("may")]),e._v(" allow expired funds-confirmation-consents to be accessed in a newer version.")])]),e._v(" "),o("h5",{attrs:{id:"delete"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),o("ul",[o("li",[e._v("A CBPII "),o("strong",[e._v("must not")]),e._v(" delete a funds-confirmation-consent on an older version via a ConsentId created in a newer version.\n"),o("ul",[o("li",[e._v("E.g., A funds-confirmation-consent is created in v4, and request DELETE on v3.")])])]),e._v(" "),o("li",[e._v("An ASPSP "),o("strong",[e._v("must")]),e._v(" support deleting a funds-confirmation-consent from a previous version via a newer version.\n"),o("ul",[o("li",[e._v("E.g., A funds-confirmation-consent is created in v3, and request DELETE on v4.")])])])]),e._v(" "),o("h4",{attrs:{id:"funds-confirmation-resource"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#funds-confirmation-resource"}},[e._v("#")]),e._v(" Funds Confirmation Resource")]),e._v(" "),o("h5",{attrs:{id:"post-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#post-2"}},[e._v("#")]),e._v(" POST")]),e._v(" "),o("ul",[o("li",[e._v("A CBPII "),o("strong",[e._v("may")]),e._v(" use a ConsentId created in a previous version to create a funds-confirmation resource in a newer version.\n"),o("ul",[o("li",[e._v("E.g., a ConsentId created in v3 can be used as a ConsentId in v4, to POST /funds-confirmations.")])])]),e._v(" "),o("li",[e._v("A CBPII "),o("strong",[e._v("must not")]),e._v(" use a ConsentId created in a newer version to create Funds Confirmation resource in a previous version.\n"),o("ul",[o("li",[e._v("E.g., a ConsentId created in v4, must not be used as a ConsentId in v3, to POST /funds-confirmations.")])])]),e._v(" "),o("li",[e._v("A CBPII "),o("strong",[e._v("may")]),e._v(" use a token that is bound to a funds-confirmation-consent in a previous version, to access an endpoint of a newer version.")]),e._v(" "),o("li",[e._v("An ASPSP "),o("strong",[e._v("must")]),e._v(" allow a ConsentId from previous version to create a funds-confirmation resource in a newer version, provided it has not expired.")]),e._v(" "),o("li",[e._v("An ASPSP "),o("strong",[e._v("must not")]),e._v(" allow a ConsentId from a newer version to create a funds-confirmation resource in a previous version.")])]),e._v(" "),o("h2",{attrs:{id:"security-access-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security-access-control"}},[e._v("#")]),e._v(" Security & Access Control")]),e._v(" "),o("h3",{attrs:{id:"scopes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[e._v("#")]),e._v(" Scopes")]),e._v(" "),o("p",[e._v("The access tokens required for accessing the Confirmation of Funds APIs must have at least the following scope:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("fundsconfirmations: Funds confirmation entitlement\n")])])]),o("h3",{attrs:{id:"grants-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grants-types"}},[e._v("#")]),e._v(" Grants Types")]),e._v(" "),o("p",[e._v("CBPIIs "),o("strong",[e._v("must")]),e._v(" use a client credentials grant to obtain a token to make POST requests to the "),o("strong",[e._v("funds-confirmation-consent")]),e._v(' endpoint. In the specification, this grant type is referred to as "Client Credentials".')]),e._v(" "),o("p",[e._v("CBPIIs "),o("strong",[e._v("must")]),e._v(" use an authorization code grant using a redirect or decoupled flow to obtain a token to make POST requests to the "),o("strong",[e._v("funds-confirmation")]),e._v(' endpoint. When accessing, the intent-id in the token must match the ConsentId in the message payload. In the specification, this grant type is referred to as "Authorization Code".')]),e._v(" "),o("p",[e._v("CBPIIs "),o("strong",[e._v("must")]),e._v(" use a client credentials grant to obtain a token to make GET requests.")]),e._v(" "),o("h3",{attrs:{id:"consent-authorisation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consent-authorisation"}},[e._v("#")]),e._v(" Consent Authorisation")]),e._v(" "),o("p",[e._v("The CBPII "),o("strong",[e._v("must")]),e._v(" create a "),o("strong",[e._v("funds-confirmation-consent")]),e._v(" resource through a "),o("strong",[e._v("POST")]),e._v(" operation. This resource outlines the "),o("em",[e._v("consent")]),e._v(" that the CBPII claims the PSU has committed to agreeing with the ASPSP, to retrieve confirmation of funds information. At this stage, the consent is not yet agreed between the PSU and the ASPSP.")]),e._v(" "),o("p",[e._v("The ASPSP responds with a ConsentId. This is the intent-id that is used when initiating the authorization code grant (as described in the Trust Framework).")]),e._v(" "),o("p",[e._v("As part of the authorization code grant:")]),e._v(" "),o("ul",[o("li",[e._v("The ASPSP authenticates the PSU.")]),e._v(" "),o("li",[e._v("The ASPSP plays back the consent (registered by the CBPII) back to the PSU - to agree the consent. The PSU may agree or decline the consent in its entirety (but not selectively).")])]),e._v(" "),o("p",[e._v("Once these steps are complete, the consent is considered to have been agreed between the ASPSP and the PSU.")]),e._v(" "),o("h4",{attrs:{id:"consent-elements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consent-elements"}},[e._v("#")]),e._v(" Consent Elements")]),e._v(" "),o("p",[e._v("The funds-confirmation-consent resource consists of the following fields, which together form the elements of the consent provided by the PSU to the CBPII:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("DebtorAccount:")]),e._v(" The account to which the consent has been applied.\n"),o("ul",[o("li",[e._v("The field is mandatory, as the consent for CBPII access to a PSU's data must be for a specific account known to the PSU and the CBPII.")])])]),e._v(" "),o("li",[o("strong",[e._v("ExpirationDateTime:")]),e._v(" The date-time up to which the consent is valid.\n"),o("ul",[o("li",[e._v("The field is optional, as the consent for CBPII access to a PSU's data may be indefinite.")])])])]),e._v(" "),o("h4",{attrs:{id:"funds-confirmation-consent-status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#funds-confirmation-consent-status"}},[e._v("#")]),e._v(" Funds Confirmation Consent Status")]),e._v(" "),o("p",[e._v("The funds-confirmation-consent resource may have one of the following status codes after authorisation has taken place:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th"),e._v(" "),o("th",[e._v("Status")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("Authorised")]),e._v(" "),o("td",[e._v("The Funds Confirmation Consent has been successfully authorised.")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("Rejected")]),e._v(" "),o("td",[e._v("The Funds Confirmation Consent has been rejected.")])]),e._v(" "),o("tr",[o("td",[e._v("3")]),e._v(" "),o("td",[e._v("Revoked")]),e._v(" "),o("td",[e._v("The Funds Confirmation Consent has been revoked via the ASPSP interface.")])])])]),e._v(" "),o("h4",{attrs:{id:"consent-re-authentication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consent-re-authentication"}},[e._v("#")]),e._v(" Consent Re-authentication")]),e._v(" "),o("p",[e._v("The funds-confirmation-consent resource is a long lived consent. A funds-confirmation-consent can be re-authenticated if:")]),e._v(" "),o("ul",[o("li",[e._v("the funds-confirmation-consent resource has a status of "),o("code",[e._v("Authorised")]),e._v(" and")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("ExpirationDateTime")]),e._v(", if specified, has not elapsed")])]),e._v(" "),o("h3",{attrs:{id:"consent-revocation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consent-revocation"}},[e._v("#")]),e._v(" Consent Revocation")]),e._v(" "),o("p",[e._v("A PSU may revoke consent for confirming funds at any point in time.")]),e._v(" "),o("p",[e._v("The PSU may request the ASPSP to revoke consent that it has authorised. The mechanisms for this are in the competitive space and are up to each ASPSP to implement in the ASPSP's banking interface.")]),e._v(" "),o("p",[e._v("The PSU may request the CBPII to revoke consent that it has authorised. If consent is revoked with the CBPII:")]),e._v(" "),o("ul",[o("li",[e._v("The CBPII "),o("strong",[e._v("must")]),e._v(" call the "),o("strong",[e._v("DELETE")]),e._v(" operation on the funds-confirmation-consent resource as soon as it practically possible to indicate to the ASPSP that the PSU has revoked consent.")]),e._v(" "),o("li",[e._v("The CBPII "),o("strong",[e._v("must")]),e._v(" cease to access the APIs at that point.")])])])}),[],!1,null,null,null);t.default=s.exports},281:function(e,t,n){e.exports=n.p+"assets/img/CoFAPIv4.e533749e.jpg"},282:function(e,t,n){e.exports=n.p+"assets/img/CoFwithCIBA.69ef922a.png"}}]);