(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{911:function(t,s,e){"use strict";e.r(s);var n=e(6),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"event-subscription-v3-1-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-v3-1-2"}},[t._v("#")]),t._v(" Event Subscription - v3.1.2")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#endpoints"}},[t._v("Endpoints")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#endpoints-1"}},[t._v("Endpoints")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#post-event-subscriptions"}},[t._v("POST /event-subscriptions")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get-event-subscriptions"}},[t._v("GET /event-subscriptions")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#put-event-subscriptionseventsubscriptionid"}},[t._v("PUT /event-subscriptions/{EventSubscriptionId}")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#delete-event-subscriptionseventsubscriptionid"}},[t._v("DELETE /event-subscriptions/{EventSubscriptionId}")])])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#event-subscription---request"}},[t._v("Event Subscription - Request")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#uml-diagram"}},[t._v("UML Diagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#notes"}},[t._v("Notes")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-dictionary"}},[t._v("Data Dictionary")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#event-subscription---response"}},[t._v("Event Subscription - Response")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#uml"}},[t._v("UML")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-dictionary-1"}},[t._v("Data Dictionary")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#event-subscriptions---response"}},[t._v("Event Subscriptions - Response")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#uml-1"}},[t._v("UML")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#data-dictionary-2"}},[t._v("Data Dictionary")])])])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#usage-examples"}},[t._v("Usage Examples")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#create-event-subscription"}},[t._v("Create Event Subscription")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#post-event-subscription-request"}},[t._v("POST Event Subscription Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#post-event-subscription-response"}},[t._v("POST Event Subscription Response")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get-event-subscriptions"}},[t._v("Get Event Subscriptions")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#get-event-subscription-request"}},[t._v("GET Event Subscription Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get-event-subscription-response"}},[t._v("GET Event Subscription Response")])])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("The Event Subscription resource is used by a TPP to subscribe to events with an ASPSP.")]),t._v(" "),e("p",[t._v("This resource description should be read in conjunction with a compatible Event Notification Subscription Profile.")]),t._v(" "),e("h2",{attrs:{id:"endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),e("p",[t._v("A TPP will set up and maintain its event subscription details (URL, event types and version number) using the event-subscription resource.")]),t._v(" "),e("h3",{attrs:{id:"endpoints-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoints-2"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Resource")]),t._v(" "),e("th",[t._v("HTTP Operation")]),t._v(" "),e("th",[t._v("Endpoint")]),t._v(" "),e("th",[t._v("Mandatory ?")]),t._v(" "),e("th",[t._v("Scope")]),t._v(" "),e("th",[t._v("Grant Type")]),t._v(" "),e("th",[t._v("Message Signing")]),t._v(" "),e("th",[t._v("Idempotency Key")]),t._v(" "),e("th",[t._v("Request Object")]),t._v(" "),e("th",[t._v("Response Object")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("event-subscription")]),t._v(" "),e("td",[t._v("POST")]),t._v(" "),e("td",[t._v("POST /event-subscriptions")]),t._v(" "),e("td",[t._v("Optional")]),t._v(" "),e("td",[t._v("accounts"),e("br"),t._v("payments"),e("br"),t._v("fundsconfirmations")]),t._v(" "),e("td",[t._v("Client Credentials")]),t._v(" "),e("td",[t._v("Signed Request"),e("br"),e("br"),t._v("Signed Response")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("OBEventSubscription1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1")])]),t._v(" "),e("tr",[e("td",[t._v("event-subscription")]),t._v(" "),e("td",[t._v("GET")]),t._v(" "),e("td",[t._v("GET /event-subscriptions")]),t._v(" "),e("td",[t._v("Mandatory (if resource POST implemented)")]),t._v(" "),e("td",[t._v("accounts"),e("br"),t._v("payments"),e("br"),t._v("fundsconfirmations")]),t._v(" "),e("td",[t._v("Client Credentials")]),t._v(" "),e("td",[t._v("Signed Response")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("n/a")]),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1")])]),t._v(" "),e("tr",[e("td",[t._v("event-subscription")]),t._v(" "),e("td",[t._v("PUT")]),t._v(" "),e("td",[t._v("PUT /event-subscriptions/{EventSubscriptionId}")]),t._v(" "),e("td",[t._v("Mandatory (if resource POST implemented)")]),t._v(" "),e("td",[t._v("accounts"),e("br"),t._v("payments"),e("br"),t._v("fundsconfirmations")]),t._v(" "),e("td",[t._v("Client Credentials")]),t._v(" "),e("td",[t._v("Signed Request"),e("br"),e("br"),t._v("Signed Response")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1")])]),t._v(" "),e("tr",[e("td",[t._v("event-subscription")]),t._v(" "),e("td",[t._v("DELETE")]),t._v(" "),e("td",[t._v("DELETE /event-subscriptions/{EventSubscriptionId}")]),t._v(" "),e("td",[t._v("Mandatory (if resource POST implemented)")]),t._v(" "),e("td",[t._v("accounts"),e("br"),t._v("payments"),e("br"),t._v("fundsconfirmations")]),t._v(" "),e("td",[t._v("Client Credentials")]),t._v(" "),e("td",[t._v("n/a")]),t._v(" "),e("td",[t._v("No")]),t._v(" "),e("td",[t._v("n/a")]),t._v(" "),e("td",[t._v("n/a")])])])]),t._v(" "),e("h4",{attrs:{id:"post-event-subscriptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-event-subscriptions"}},[t._v("#")]),t._v(" POST /event-subscriptions")]),t._v(" "),e("p",[t._v("The API endpoint allows the TPP to ask an ASPSP to create a new "),e("strong",[t._v("event-subscription")]),t._v(" resource.")]),t._v(" "),e("ul",[e("li",[t._v("The POST action allows the TPP to register an event subscription for a TPP to access event notifications.")]),t._v(" "),e("li",[t._v("The ASPSP creates the "),e("strong",[t._v("event-subscription")]),t._v(" resource and responds with a unique EventSubscriptionId to refer to the resource.")]),t._v(" "),e("li",[t._v("An ASPSP "),e("strong",[t._v("must")]),t._v(" respond with a 409 error if an event-subscription exists for that TPP.")])]),t._v(" "),e("h4",{attrs:{id:"get-event-subscriptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-event-subscriptions"}},[t._v("#")]),t._v(" GET /event-subscriptions")]),t._v(" "),e("p",[t._v("The API endpoint allows the TPP to ask an ASPSP to retrieve its "),e("strong",[t._v("event-subscription")]),t._v(" resource.")]),t._v(" "),e("ul",[e("li",[t._v("The ASPSP retrieves the "),e("strong",[t._v("event-subscription")]),t._v(" resource and responds with the resource.")])]),t._v(" "),e("h4",{attrs:{id:"put-event-subscriptions-eventsubscriptionid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#put-event-subscriptions-eventsubscriptionid"}},[t._v("#")]),t._v(" PUT /event-subscriptions/{EventSubscriptionId}")]),t._v(" "),e("p",[t._v("The API endpoint allows the TPP to ask an ASPSP to update an "),e("strong",[t._v("event-subscription")]),t._v(" resource.")]),t._v(" "),e("ul",[e("li",[t._v("The PUT action allows the TPP to update an event subscription for a TPP to access event notifications.")]),t._v(" "),e("li",[t._v("The ASPSP updates the "),e("strong",[t._v("event-subscription")]),t._v(" resource and responds with the updated resource.")])]),t._v(" "),e("h4",{attrs:{id:"delete-event-subscriptions-eventsubscriptionid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-event-subscriptions-eventsubscriptionid"}},[t._v("#")]),t._v(" DELETE /event-subscriptions/{EventSubscriptionId}")]),t._v(" "),e("p",[t._v("The API endpoint allows the TPP to ask an ASPSP to delete an "),e("strong",[t._v("event-subscription")]),t._v(" resource.")]),t._v(" "),e("ul",[e("li",[t._v("The ASPSP deletes the "),e("strong",[t._v("event-subscription")]),t._v(" resource.")])]),t._v(" "),e("h2",{attrs:{id:"data-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data Model")]),t._v(" "),e("h3",{attrs:{id:"event-subscription-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-request"}},[t._v("#")]),t._v(" Event Subscription - Request")]),t._v(" "),e("p",[t._v("The OBEventSubscription1 object will be used for the call to:")]),t._v(" "),e("ul",[e("li",[t._v("POST /event-subscriptions")])]),t._v(" "),e("h4",{attrs:{id:"uml-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/OBEventSubscription1.gif",alt:"OBEventSubscription1"}})]),t._v(" "),e("h4",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),e("p",[t._v("For the OBEventSubscription1 object:")]),t._v(" "),e("ul",[e("li",[t._v("EventTypes usage:\n"),e("ul",[e("li",[t._v("TPPs may provide a list of event types to subscribe to specific events.")]),t._v(" "),e("li",[t._v("TPPs may omit this field to subscribe to all supported events.")])])])]),t._v(" "),e("h4",{attrs:{id:"data-dictionary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Occurrence")]),t._v(" "),e("th",[t._v("XPath")]),t._v(" "),e("th",[t._v("EnhancedDefinition")]),t._v(" "),e("th",[t._v("Class")]),t._v(" "),e("th",[t._v("Codes")]),t._v(" "),e("th",[t._v("Pattern")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("OBEventSubscription1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscription1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscription1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Data")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBEventSubscription1/Data")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscriptionData1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("CallbackUrl")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBEventSubscription1/Data/CallbackUrl")]),t._v(" "),e("td",[t._v("Callback URL for a TPP hosted service. Will be used by ASPSPs, in conjunction with the resource name, to construct a URL to send event notifications to.")]),t._v(" "),e("td",[t._v("xs:anyURI")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Version")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBEventSubscription1/Data/Version")]),t._v(" "),e("td",[t._v("Version for the event notification.")]),t._v(" "),e("td",[t._v("Max10Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("EventTypes")]),t._v(" "),e("td",[t._v("0..n")]),t._v(" "),e("td",[t._v("OBEventSubscription1/Data/EventTypes")]),t._v(" "),e("td",[t._v("Array of event types the subscription applies to.")]),t._v(" "),e("td",[t._v("OBEventType1Code")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"event-subscription-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-response"}},[t._v("#")]),t._v(" Event Subscription - Response")]),t._v(" "),e("p",[t._v("The OBEventSubscriptionResponse1 object will be used for a response to a call to:")]),t._v(" "),e("ul",[e("li",[t._v("POST /event-subscriptions")]),t._v(" "),e("li",[t._v("PUT /event-subscriptions/{EventSubscriptionId}")])]),t._v(" "),e("p",[t._v("The OBEventSubscriptionResponse1 object will also be used for the call to:")]),t._v(" "),e("ul",[e("li",[t._v("PUT /event-subscriptions")])]),t._v(" "),e("h4",{attrs:{id:"uml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml"}},[t._v("#")]),t._v(" UML")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/OBEventSubscriptionResponse1.gif",alt:"OBEventSubscriptionResponse1"}})]),t._v(" "),e("h4",{attrs:{id:"data-dictionary-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-2"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Occurrence")]),t._v(" "),e("th",[t._v("XPath")]),t._v(" "),e("th",[t._v("EnhancedDefinition")]),t._v(" "),e("th",[t._v("Class")]),t._v(" "),e("th",[t._v("Codes")]),t._v(" "),e("th",[t._v("Pattern")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("OBEventSubscriptionResponse1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Data")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1/Data")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscriptionResponseData1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("EventSubscriptionId")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1/Data/EventSubscriptionId")]),t._v(" "),e("td",[t._v("Unique identification as assigned by the ASPSP to uniquely identify the callback URL resource.")]),t._v(" "),e("td",[t._v("Max40Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("CallbackUrl")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1/Data/CallbackUrl")]),t._v(" "),e("td",[t._v("Callback URL for a TPP hosted service. Will be used by ASPSPs, in conjunction with the resource name, to construct a URL to send event notifications to.")]),t._v(" "),e("td",[t._v("xs:anyURI")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Version")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1/Data/Version")]),t._v(" "),e("td",[t._v("Version for the event notification.")]),t._v(" "),e("td",[t._v("Max10Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("EventTypes")]),t._v(" "),e("td",[t._v("0..n")]),t._v(" "),e("td",[t._v("OBEventSubscriptionResponse1/Data/EventTypes")]),t._v(" "),e("td",[t._v("Array of event types the subscription applies to.")]),t._v(" "),e("td",[t._v("OBEventType1Code")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"event-subscriptions-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-subscriptions-response"}},[t._v("#")]),t._v(" Event Subscriptions - Response")]),t._v(" "),e("p",[t._v("The OBEventSubscriptionsResponse1 object will be used for a response to a call to:")]),t._v(" "),e("ul",[e("li",[t._v("GET /event-subscriptions")])]),t._v(" "),e("h4",{attrs:{id:"uml-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml-2"}},[t._v("#")]),t._v(" UML")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/OBEventSubscriptionsResponse1.gif",alt:"OBEventSubscriptionsResponse1"}})]),t._v(" "),e("h4",{attrs:{id:"data-dictionary-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-3"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Occurrence")]),t._v(" "),e("th",[t._v("XPath")]),t._v(" "),e("th",[t._v("EnhancedDefinition")]),t._v(" "),e("th",[t._v("Class")]),t._v(" "),e("th",[t._v("Codes")]),t._v(" "),e("th",[t._v("Pattern")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("OBEventSubscriptionsResponse1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Data")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1/Data")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponseData1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("EventSubscription")]),t._v(" "),e("td",[t._v("0..n")]),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("OBEventSubscriptionResponseData1")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("EventSubscriptionId")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription/EventSubscriptionId")]),t._v(" "),e("td",[t._v("Unique identification as assigned by the ASPSP to uniquely identify the callback url resource.")]),t._v(" "),e("td",[t._v("Max40Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Url")]),t._v(" "),e("td",[t._v("0..1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription/Url")]),t._v(" "),e("td",[t._v("Callback URL for a TPP hosted service. Will be used by ASPSPs, in conjunction with the resource name, to construct a URL to send event notifications to.")]),t._v(" "),e("td",[t._v("xs:anyURI")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Version")]),t._v(" "),e("td",[t._v("1..1")]),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription/Version")]),t._v(" "),e("td",[t._v("Version for the event notification.")]),t._v(" "),e("td",[t._v("Max10Text")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("EventTypes")]),t._v(" "),e("td",[t._v("0..n")]),t._v(" "),e("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription/EventTypes")]),t._v(" "),e("td",[t._v("Array of event types the subscription applies to.")]),t._v(" "),e("td",[t._v("OBEventType1Code")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"usage-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-examples"}},[t._v("#")]),t._v(" Usage Examples")]),t._v(" "),e("h3",{attrs:{id:"create-event-subscription"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-event-subscription"}},[t._v("#")]),t._v(" Create Event Subscription")]),t._v(" "),e("h4",{attrs:{id:"post-event-subscription-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-event-subscription-request"}},[t._v("#")]),t._v(" POST Event Subscription Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("POST /event-subscriptions HTTP/1.1\nAuthorization: Bearer 2YotnFZFEjr1zCsicMWpAA\nx-jws-signature: TGlmZSdzIGEgam91cm5leSBub3QgYSBkZXN0aW5hdGlvbiA=..T2ggZ29vZCBldmVuaW5nIG1yIHR5bGVyIGdvaW5nIGRvd24gPw==\nx-fapi-interaction-id: 86ebcd82-8e38-4f2d-a79c-965b41d15865\nContent-Type: application/json\nAccept: application/json\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CallbackUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://tpp.com/open-banking/v3.1/event-notifications"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.1"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"post-event-subscription-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-event-subscription-response"}},[t._v("#")]),t._v(" POST Event Subscription Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HTTP/1.1 201 Created\nx-jws-signature: V2hhdCB3ZSBnb3QgaGVyZQ0K..aXMgZmFpbHVyZSB0byBjb21tdW5pY2F0ZQ0K\nx-fapi-interaction-id: 86ebcd82-8e38-4f2d-a79c-965b41d15865\nContent-Type: application/json\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"EventSubscriptionId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CB-101"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CallbackUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://tpp.com/open-banking/v3.1/event-notifications"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.1"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Links"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Self"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.alphabank.com/open-banking/v3.1/event-subscriptions/CB-101"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Meta"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-event-subscriptions-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-event-subscriptions-2"}},[t._v("#")]),t._v(" Get Event Subscriptions")]),t._v(" "),e("h4",{attrs:{id:"get-event-subscription-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-event-subscription-request"}},[t._v("#")]),t._v(" GET Event Subscription Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /event-subscriptions HTTP/1.1\nAuthorization: Bearer 2YotnFZFEjr1zCsicMWpAA\nx-fapi-interaction-id: 86ebcd82-8e38-4f2d-a79c-965b41d15865\nAccept: application/json\n")])])]),e("h4",{attrs:{id:"get-event-subscription-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-event-subscription-response"}},[t._v("#")]),t._v(" GET Event Subscription Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET/1.1 200 OK\nx-jws-signature: V2hhdCB3ZSBnb3QgaGVyZQ0K..aXMgZmFpbHVyZSB0byBjb21tdW5pY2F0ZQ0K\nx-fapi-interaction-id: 86ebcd82-8e38-4f2d-a79c-965b41d15865\nContent-Type: application/json\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"EventSubscription"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"EventSubscriptionId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CB-101"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CallbackUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://tpp.com/open-banking/v3.1/event-notifications"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.1"')]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Links"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Self"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.alphabank.com/open-banking/v3.1/event-subscriptions/"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Meta"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);