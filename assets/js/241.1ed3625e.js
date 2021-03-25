(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1385:function(e,t,i){"use strict";i.r(t);var n=i(6),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"event-notification-api-profile-v3-1-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-notification-api-profile-v3-1-8"}},[e._v("#")]),e._v(" Event Notification API Profile - v3.1.8 ")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#overview"}},[e._v("Overview")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#design-principles"}},[e._v("Design Principles")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#security-event-token-alignment"}},[e._v("Security Event Token Alignment")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#event-notification-message-signing"}},[e._v("Event Notification Message Signing")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#set-aggregation-alignment"}},[e._v("SET Aggregation Alignment")])])])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#basics"}},[e._v("Basics")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#overview-1"}},[e._v("Overview")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#steps"}},[e._v("Steps")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#sequence-diagram"}},[e._v("Sequence Diagram")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#event-types-and-extensibility"}},[e._v("Event Types and Extensibility")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#event-notification-backwards-compatibility"}},[e._v("Event-Notification Backwards Compatibility")])])])])]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The Event Notification API Profile describes the flows and common functionality to allow a TPP to receive event notifications.")]),e._v(" "),n("p",[e._v("The Event Notification Subscription API Profile and the Callback URL API Profile provide alternative mechanisms for TPPs to register for event notifications.")]),e._v(" "),n("ul",[n("li",[e._v("The Event Notification Subscription API allows TPPs to register to receive all or specific event types via the Real Time Event Notification API and/or the Aggregated Polling API.")]),e._v(" "),n("li",[e._v("The Callback URL API allows TPPs to register to receive a "),n("code",[e._v("urn:uk:org:openbanking:events:resource-update")]),e._v(" event notification via the Real Time Event Notification API.")])]),e._v(" "),n("p",[e._v("Usage of the Event Notification Subscription API is recommended over the Callback URL API for notification registrations.\nNote, should an ASPSP choose to provide both APIs for event notification registrations, any registration made using the Event Notification Subscription API supersedes a registration made using the Callback URL API.")]),e._v(" "),n("p",[e._v("This profile should be read in conjunction with the other API profiles which detail the circumstances under which an event notification may be delivered.")]),e._v(" "),n("p",[e._v("Implementation of real-time push Notifications is "),n("strong",[e._v("optional")]),e._v(" for both ASPSPs and TPPs.")]),e._v(" "),n("h3",{attrs:{id:"design-principles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#design-principles"}},[e._v("#")]),e._v(" Design Principles")]),e._v(" "),n("h4",{attrs:{id:"security-event-token-alignment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#security-event-token-alignment"}},[e._v("#")]),e._v(" Security Event Token Alignment")]),e._v(" "),n("p",[e._v("Event notifications are aligned with the Security Event Token standard, a proposed IETF standard for exchanging information about security events. See "),n("a",{attrs:{href:"https://tools.ietf.org/html/rfc8417",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://tools.ietf.org/html/rfc8417"),n("OutboundLink")],1),e._v(". An event notification is structured as a JWT, indicating an event has occurred through a set of claims.")]),e._v(" "),n("p",[e._v("A resource-update event ("),n("code",[e._v("urn:uk:org:openbanking:events:resource-update")]),e._v(") is used to communicate that a specific resource has been updated. It contains identifiers for the resource and links to retrieve it.")]),e._v(" "),n("h4",{attrs:{id:"event-notification-message-signing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-notification-message-signing"}},[e._v("#")]),e._v(" Event Notification Message Signing")]),e._v(" "),n("p",[e._v("Event Notifications are signed for non-repudiation using the approach defined in the R/W API specification, with the following difference:")]),e._v(" "),n("ul",[n("li",[e._v("The JWT's signature (JWS) is sent in the HTTP body of the request, as opposed to a detached JWS sent in the HTTP header.")])]),e._v(" "),n("h4",{attrs:{id:"set-aggregation-alignment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-aggregation-alignment"}},[e._v("#")]),e._v(" SET Aggregation Alignment")]),e._v(" "),n("p",[e._v('Aggregated polling of Security Event Tokens is aligned with the draft "Poll-Based Security Event Token (SET) Delivery Using HTTP" standard (draft-ietf-secevent-http-poll-01) as defined here: '),n("a",{attrs:{href:"https://datatracker.ietf.org/doc/draft-ietf-secevent-http-poll/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://datatracker.ietf.org/doc/draft-ietf-secevent-http-poll/"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("draft-ietf-secevent-http-poll-01 imposes the following constraints on the underlying SETs:")]),e._v(" "),n("ul",[n("li",[e._v("They are JSON Web Signatures.")]),e._v(" "),n("li",[e._v("They must implement the "),n("code",[e._v("jti")]),e._v(" claim (JWT Identifier).")])]),e._v(" "),n("p",[e._v("JSON API is not implemented for consistency with draft-ietf-secevent-http-poll-01.")]),e._v(" "),n("h2",{attrs:{id:"basics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),n("h3",{attrs:{id:"overview-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The steps and sequence diagram below provide a general outline of a notification flow for all resources in the R/W APIs.")]),e._v(" "),n("p",[e._v("In this outline TPP registration for event notifications is performed using the Event Notification Subscription API.")]),e._v(" "),n("h4",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),n("p",[e._v("Step 1: Setup Event Notification Subscription")]),e._v(" "),n("ul",[n("li",[e._v("This flow begins with a TPP creating an "),n("strong",[e._v("event-subscription")]),e._v(" resource with an ASPSP. This may optionally contain a callback url, and a series of event types.")])]),e._v(" "),n("p",[e._v("Step 2: Deliver Event Notification")]),e._v(" "),n("ul",[n("li",[e._v("An event corresponding to one of an ASPSP's event types occurs on a resource.")])]),e._v(" "),n("p",[e._v("Step 2a: ASPSP Sends Real Time Event Notification")]),e._v(" "),n("ul",[n("li",[e._v("A TPP must have provided a callback URL with the event-subscription resource in order to receive the real time event notification.")]),e._v(" "),n("li",[e._v("The ASPSP sends a signed event notification to the callback URL, detailing the nature of the event and identifying the affected resource.")]),e._v(" "),n("li",[e._v("The TPP may optionally initiate a client credential grant to retrieve the resource using the details contained in the event notification.")])]),e._v(" "),n("p",[e._v("Step 2b: TPP Requests Event Notifications")]),e._v(" "),n("ul",[n("li",[e._v("A TPP may request event notifications using aggregated polling.")])]),e._v(" "),n("p",[e._v("Step 3: Retrieve/Update/Delete Event Notification Subscription")]),e._v(" "),n("ul",[n("li",[e._v("A TPP may Retrieve/Update/Delete the event notification subscription.")])]),e._v(" "),n("h4",{attrs:{id:"sequence-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sequence-diagram"}},[e._v("#")]),e._v(" Sequence Diagram")]),e._v(" "),n("p",[n("img",{attrs:{src:i(783),alt:""}})]),e._v(" "),n("details",[n("summary",[e._v("Diagram source")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("participant TPP\nparticipant ASPSP Authorisation Server\nparticipant ASPSP Resource Server\nparticipant ASPSP Notification Service\nparticipant ASPSP Event Polling Service\n\nnote over TPP, ASPSP Event Polling Service\nStep 1: Setup Event Notification Subscription\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\nTPP <-> ASPSP Resource Server: Establish TLS 1.2 MA\nTPP -> ASPSP Resource Server: POST /event-subscriptions\nASPSP Resource Server -> TPP: HTTP 201 (Created),  EventSubscriptionId\n\nnote over TPP, ASPSP Event Polling Service\n Step 2: Deliver Event Notification\nend note\n\n\nalt 2a. ASPSP Sends Real Time Event Notification\n\nnote left of ASPSP Notification Service\n- Create EventNotification\n- Sign EventNotification\nend note\n\nloop Retry Until Successful (as per retry policy)\nASPSP Notification Service -> TPP: POST /event-notifications, EventNotification, signature\nalt success\nTPP -> ASPSP Notification Service: HTTP 202 Accepted\nelse failure\nTPP -> ASPSP Notification Service: HTTP 500/400\nend alt\nend loop\n\nnote right of TPP\nTPP verifies signature\nend note\n\nopt If TPP requires full resource\n\nnote right of TPP\nURL for resource contained in the\nEventNotification rlk (resource links) claim\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\n\nTPP <-> ASPSP Resource Server: Establish TLS 1.2 MA\nTPP -> ASPSP Resource Server: GET Resource\nASPSP Resource Server -> TPP: HTTP 200 (OK),  Resource\n\nend opt\n\nelse 2b. TPP Requests Event Notifications\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\n\nTPP <-> ASPSP Event Polling Service: Establish TLS 1.2 MA\nTPP -> ASPSP Event Polling Service: Acknowledge events\nASPSP Event Polling Service -> TPP: HTTP 200 (Zero or more events)\n\nend\n\nnote over TPP, ASPSP Event Polling Service\nStep 3: Retrieve/Update/Delete Event Notification Configuration\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\nTPP <-> ASPSP Resource Server: Establish TLS 1.2 MA\nalt Retrive\nTPP -> ASPSP Resource Server: GET /event-subscriptions\nASPSP Resource Server -> TPP: HTTP 200 (OK)\nelse Update\nTPP -> ASPSP Resource Server: PUT /event-subscriptions/{EventSubscriptionId}\nASPSP Resource Server -> TPP: HTTP 200 (OK)\nelse Delete\nTPP -> ASPSP Resource Server: DELETE /event-subscriptions/{EventSubscriptionId}\nASPSP Resource Server -> TPP: HTTP 204 (OK)\nend alt\noption footer=bar\n")])])])]),e._v(" "),n("h3",{attrs:{id:"event-types-and-extensibility"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-types-and-extensibility"}},[e._v("#")]),e._v(" Event Types and Extensibility")]),e._v(" "),n("p",[e._v("The specification defines a number of namespaced event types corresponding to individual event notifications.")]),e._v(" "),n("p",[e._v("ASPSPs "),n("strong",[e._v("may")]),e._v(" define their own custom Events (together with a corresponding namespaced event type) consistent with the principles and conventions outlined in the specification.")]),e._v(" "),n("p",[e._v("ASPSPs "),n("strong",[e._v("must")]),e._v(" document all supported events types on their developer documentation.")]),e._v(" "),n("h3",{attrs:{id:"event-notification-backwards-compatibility"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-notification-backwards-compatibility"}},[e._v("#")]),e._v(" Event-Notification Backwards Compatibility")]),e._v(" "),n("p",[e._v("TPPs may have implemented the event-notification resource defined in v3.1 or v3.1.1 of the Event Notification API Specification. A TPP implementation limited to this resource would only be able to receive event-notifications for the "),n("code",[e._v("urn:uk:org:openbanking:events:resource-update")]),e._v(" event. In order to receive backwards compatible v3.1.2 event-notifications, TPPs "),n("strong",[e._v("must")]),e._v(" restrict the events they receive to the "),n("code",[e._v("urn:uk:org:openbanking:events:resource-update")]),e._v(" event using one of the following methods:")]),e._v(" "),n("ul",[n("li",[e._v("Registering via the callback-url resource, implicitly limiting event types to "),n("code",[e._v("urn:uk:org:openbanking:events:resource-update")]),e._v(".")]),e._v(" "),n("li",[e._v("Registering via the event-subscription resource with the Version set to 3.1.1, implicitly limiting events to "),n("code",[e._v("urn:uk:org:openbanking:events:resource-update")]),e._v(".")]),e._v(" "),n("li",[e._v("Registering via the event-subscription resource. The Version element should be set to 3.1.2 and the EventTypes array limited to the value UK.OBIE.Resource-Update, explicitly limiting events to "),n("code",[e._v("urn:uk:org:openbanking:events:resource-update")]),e._v(".")])])])}),[],!1,null,null,null);t.default=r.exports},783:function(e,t,i){e.exports=i.p+"assets/img/EventNotificationsFull.9e7702a9.png"}}]);