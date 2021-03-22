(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{777:function(e,t,n){"use strict";n.r(t);var i=n(6),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"aggregated-polling-api-profile-v3-1-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aggregated-polling-api-profile-v3-1-2"}},[e._v("#")]),e._v(" Aggregated Polling API Profile - v3.1.2")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#basics"}},[e._v("Basics")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#overview-1"}},[e._v("Overview")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#steps"}},[e._v("Steps")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#sequence-diagram"}},[e._v("Sequence Diagram")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#grants-types"}},[e._v("Grants Types")])])])])])])]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The Aggregated Polling API Profile describes the flows and common functionality for the Aggregated Polling API, which allows a ASPSPs to deliver multiple signed event notifications to TPPs though the use of polling. It is intended as an alternative or complement to Real Time Notification in that:")]),e._v(" "),n("ul",[n("li",[e._v("It can be used as the sole method to collect event notifications by a TPP.")]),e._v(" "),n("li",[e._v("It offers a means to catch-up following a period where the TPP's Real Time Notification endpoint has been offline.")])]),e._v(" "),n("p",[e._v("Implementation of the Aggregated Polling API is "),n("strong",[e._v("optional")]),e._v(" for ASPSPs.")]),e._v(" "),n("p",[e._v("This profile should be read in conjunction with a compatible Read/Write Data API Profile, a compatible Event Notification API Profile and compatible individual resources.")]),e._v(" "),n("h2",{attrs:{id:"basics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),n("h3",{attrs:{id:"overview-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The steps below provide a general outline of an aggregated notification flow for all resources in the R/W APIs.")]),e._v(" "),n("h4",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),n("p",[e._v("Step 1: Initial Polling")]),e._v(" "),n("p",[e._v("This is the first time a TPP calls the ASPSP to poll for events:")]),e._v(" "),n("ul",[n("li",[e._v("A TPP calls an ASPSP to poll for events.")]),e._v(" "),n("li",[e._v("The ASPSP responds with an array of awaiting events encoded as signed event notifications.")])]),e._v(" "),n("p",[e._v("Step 2a: Acknowledge Only")]),e._v(" "),n("p",[e._v("Following the initial poll the TPP has the option to only acknowledge receipt if they do not wish to receive further events at a given time:")]),e._v(" "),n("ul",[n("li",[e._v("A TPP calls an ASPSP to acknowledge the event notifications that have been successfully processed.")]),e._v(" "),n("li",[e._v("If required, the TPP also sends indicators of event notifications which they could not process due to an error.")]),e._v(" "),n("li",[e._v("The ASPSP responds positively but sends no further events.")])]),e._v(" "),n("p",[e._v("Step 2b: Poll and Acknowledge")]),e._v(" "),n("p",[e._v("Following the initial poll the TPP can then repeatedly poll the ASPSP, acknowledging successfully processed event notifications and requesting more:")]),e._v(" "),n("ul",[n("li",[e._v("A TPP calls an ASPSP to acknowledge the event notifications that have been successfully processed with appropriate parameters to receive more.")]),e._v(" "),n("li",[e._v("If required, the TPP also sends event notifications which they could not process due to an error.")]),e._v(" "),n("li",[e._v("The ASPSP responds positively and responds with an array of awaiting event notifications encoded as signed event notifications.")])]),e._v(" "),n("h4",{attrs:{id:"sequence-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sequence-diagram"}},[e._v("#")]),e._v(" Sequence Diagram")]),e._v(" "),n("p",[n("img",{attrs:{src:"images/AggregatedPolling.png",alt:"Aggregated Polling"}})]),e._v(" "),n("details",[n("summary",[e._v("Diagram source")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("participant TPP\nparticipant ASPSP Authorisation Server\nparticipant ASPSP Event Polling Service\n\nnote over TPP, ASPSP Event Polling Service\nStep 1: Initial Polling\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\n\nTPP -> ASPSP Event Polling Service: Poll for events\nASPSP Event Polling Service -> TPP: HTTP 200 (Zero or more events)\n\nnote over TPP, ASPSP Event Polling Service\nStep 2a: Acknowledge Only\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\n\nTPP -> ASPSP Event Polling Service: Acknowledge events\nASPSP Event Polling Service -> TPP: HTTP 200 (Zero events)\n\nnote over TPP, ASPSP Event Polling Service\nStep 2b: Poll and Acknowledge\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\n\nTPP <-> ASPSP Event Polling Service: Establish TLS 1.2 MA\nTPP -> ASPSP Event Polling Service: Acknowledge events\nASPSP Event Polling Service -> TPP: HTTP 200 (Zero or more events)\n\noption footer=bar\n")])])])]),e._v(" "),n("h3",{attrs:{id:"acknowledgement-by-the-tpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgement-by-the-tpp"}},[e._v("#")]),e._v(" Acknowledgement by the TPP")]),e._v(" "),n("p",[e._v("draft-ietf-secevent-http-poll-01 specifies that recipients of event notifications must acknowledge them. This is manifested in one of two ways:")]),e._v(" "),n("ul",[n("li",[e._v("Through positive acknowledgement in that the event notification has been received and successfully processed.")]),e._v(" "),n("li",[e._v("Through negative acknowledgement where the event notification has been received but the TPP encountered an error in processing.")])]),e._v(" "),n("p",[e._v("ASPSPs can evict positively acknowledged event notifications from their stores. It is implicit that TPPs are responsible for retaining a record of event notifications appropriate to their needs once positively acknowledged.")]),e._v(" "),n("h3",{attrs:{id:"event-recycling-frequency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-recycling-frequency"}},[e._v("#")]),e._v(" Event Recycling Frequency")]),e._v(" "),n("p",[e._v("ASPSPs are responsible for documenting the frequency at which JWT Identifiers will be recycled and reused in their developer portal.")]),e._v(" "),n("h3",{attrs:{id:"polling-frequency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#polling-frequency"}},[e._v("#")]),e._v(" Polling Frequency")]),e._v(" "),n("p",[e._v("ASPSPs are responsible for documenting the interval at which TPPs should call the polling endpoint and any further restrictions in their developer portal.")]),e._v(" "),n("h3",{attrs:{id:"polling-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#polling-parameters"}},[e._v("#")]),e._v(" Polling Parameters")]),e._v(" "),n("p",[e._v("TPPs can send two parameters to indicate the polling behaviours:")]),e._v(" "),n("ul",[n("li",[e._v("The maximum number of events to be transmitted by the ASPSP.")]),e._v(" "),n("li",[e._v("Whether the ASPSP should return a response immediately, or allow the TPP to maintain a connection to support long polling.")])]),e._v(" "),n("p",[e._v("Given the implications of long polling (described "),n("a",{attrs:{href:"https://tools.ietf.org/html/rfc6202#page-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(") supporting long polling is "),n("strong",[e._v("optional")]),e._v(".")]),e._v(" "),n("p",[e._v("ASPSPs are responsible for documenting in their developer portal any upper bound for the maximum number of events parameter and their support for long polling.")]),e._v(" "),n("h3",{attrs:{id:"security"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),n("h4",{attrs:{id:"authentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),n("p",[e._v("ASPSPs must secure their aggregated polling endpoint using MA-TLS.")]),e._v(" "),n("p",[e._v("draft-ietf-secevent-http-poll-01 allows for the use signed event notifications for authentication. The conditions under which this is permissible are not met by the Read/Write API standards, so this approach should not be implemented.")]),e._v(" "),n("h4",{attrs:{id:"scopes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[e._v("#")]),e._v(" Scopes")]),e._v(" "),n("p",[e._v("The access tokens required for accessing the Aggregated Polling API must have at least the following scope:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("eventpolling: Ability to poll for, acknowledge and receive Security Event Tokens\n")])])]),n("h4",{attrs:{id:"grants-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grants-types"}},[e._v("#")]),e._v(" Grants Types")]),e._v(" "),n("p",[e._v("Consumers "),n("strong",[e._v("must")]),e._v(" use a client credentials grant to obtain a token to make POST requests to the "),n("strong",[e._v("events")]),e._v(' endpoint. In the specification, this grant type is referred to as "Client Credentials".')])])}),[],!1,null,null,null);t.default=a.exports}}]);