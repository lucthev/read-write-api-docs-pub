(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1068:function(t,s,e){"use strict";e.r(s);var n=e(6),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"event-subscription-v3-1-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-v3-1-5"}},[t._v("#")]),t._v(" Event Subscription - v3.1.5 ")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#endpoints"}},[t._v("Endpoints")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#post-event-subscriptions"}},[t._v("POST /event-subscriptions")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#get-event-subscriptions"}},[t._v("GET /event-subscriptions")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#put-event-subscriptionseventsubscriptionid"}},[t._v("PUT /event-subscriptions/{EventSubscriptionId}")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#delete-event-subscriptionseventsubscriptionid"}},[t._v("DELETE /event-subscriptions/{EventSubscriptionId}")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#event-subscription---request"}},[t._v("Event Subscription - Request")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#uml-diagram"}},[t._v("UML Diagram")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#notes"}},[t._v("Notes")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary"}},[t._v("Data Dictionary")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#event-subscription---response"}},[t._v("Event Subscription - Response")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#uml"}},[t._v("UML")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary-1"}},[t._v("Data Dictionary")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#event-subscriptions---response"}},[t._v("Event Subscriptions - Response")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#uml-1"}},[t._v("UML")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#data-dictionary-2"}},[t._v("Data Dictionary")])])])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#usage-examples"}},[t._v("Usage Examples")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#create-event-subscription"}},[t._v("Create Event Subscription")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#post-event-subscription-request"}},[t._v("POST Event Subscription Request")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#post-event-subscription-response"}},[t._v("POST Event Subscription Response")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#get-event-subscriptions"}},[t._v("Get Event Subscriptions")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#get-event-subscription-request"}},[t._v("GET Event Subscription Request")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#get-event-subscription-response"}},[t._v("GET Event Subscription Response")])])])])])])]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The Event Subscription resource is used by a TPP to subscribe to events with an ASPSP.")]),t._v(" "),n("p",[t._v("This resource description should be read in conjunction with a compatible Event Notification Subscription Profile.")]),t._v(" "),n("h2",{attrs:{id:"endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),n("p",[t._v("A TPP will set up and maintain its event subscription details (URL, event types and version number) using the event-subscription resource.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Resource")]),t._v(" "),n("th",[t._v("HTTP Operation")]),t._v(" "),n("th",[t._v("Endpoint")]),t._v(" "),n("th",[t._v("Mandatory ?")]),t._v(" "),n("th",[t._v("Scope")]),t._v(" "),n("th",[t._v("Grant Type")]),t._v(" "),n("th",[t._v("Message Signing")]),t._v(" "),n("th",[t._v("Idempotency Key")]),t._v(" "),n("th",[t._v("Request Object")]),t._v(" "),n("th",[t._v("Response Object")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("event-subscription")]),t._v(" "),n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("POST /event-subscriptions")]),t._v(" "),n("td",[t._v("Optional")]),t._v(" "),n("td",[t._v("accounts"),n("br"),t._v("payments"),n("br"),t._v("fundsconfirmations")]),t._v(" "),n("td",[t._v("Client Credentials")]),t._v(" "),n("td",[t._v("Signed Request"),n("br"),n("br"),t._v("Signed Response")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("OBEventSubscription1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1")])]),t._v(" "),n("tr",[n("td",[t._v("event-subscription")]),t._v(" "),n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("GET /event-subscriptions")]),t._v(" "),n("td",[t._v("Mandatory (if resource POST implemented)")]),t._v(" "),n("td",[t._v("accounts"),n("br"),t._v("payments"),n("br"),t._v("fundsconfirmations")]),t._v(" "),n("td",[t._v("Client Credentials")]),t._v(" "),n("td",[t._v("Signed Response")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("n/a")]),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1")])]),t._v(" "),n("tr",[n("td",[t._v("event-subscription")]),t._v(" "),n("td",[t._v("PUT")]),t._v(" "),n("td",[t._v("PUT /event-subscriptions/{EventSubscriptionId}")]),t._v(" "),n("td",[t._v("Conditional (See "),n("a",{attrs:{href:"#note-1"}},[t._v("Note 1")]),t._v(")")]),t._v(" "),n("td",[t._v("accounts"),n("br"),t._v("payments"),n("br"),t._v("fundsconfirmations")]),t._v(" "),n("td",[t._v("Client Credentials")]),t._v(" "),n("td",[t._v("Signed Request"),n("br"),n("br"),t._v("Signed Response")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1")])]),t._v(" "),n("tr",[n("td",[t._v("event-subscription")]),t._v(" "),n("td",[t._v("DELETE")]),t._v(" "),n("td",[t._v("DELETE /event-subscriptions/{EventSubscriptionId}")]),t._v(" "),n("td",[t._v("Conditional (See "),n("a",{attrs:{href:"#note-1"}},[t._v("Note 1")]),t._v(")")]),t._v(" "),n("td",[t._v("accounts"),n("br"),t._v("payments"),n("br"),t._v("fundsconfirmations")]),t._v(" "),n("td",[t._v("Client Credentials")]),t._v(" "),n("td",[t._v("n/a")]),t._v(" "),n("td",[t._v("No")]),t._v(" "),n("td",[t._v("n/a")]),t._v(" "),n("td",[t._v("n/a")])])])]),t._v(" "),n("h3",{attrs:{id:"note-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#note-1"}},[t._v("#")]),t._v(" Note 1 ")]),t._v(" "),n("p",[t._v("Implementation for an ASPSP is:")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("Optional")]),t._v(", where both the following are true:")]),t._v(" "),n("ul",[n("li",[t._v("The ASPSP supports aggregated polling only")]),t._v(" "),n("li",[t._v("The ASPSP only supports a single event type for aggregated polling")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Mandatory")]),t._v(", when the above is not true and ASPSP implemented "),n("code",[t._v("POST /event-subscriptions")])])])]),t._v(" "),n("h3",{attrs:{id:"post-event-subscriptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-event-subscriptions"}},[t._v("#")]),t._v(" POST /event-subscriptions")]),t._v(" "),n("p",[t._v("The API endpoint allows the TPP to ask an ASPSP to create a new "),n("strong",[t._v("event-subscription")]),t._v(" resource.")]),t._v(" "),n("ul",[n("li",[t._v("The POST action allows the TPP to register an event subscription for a TPP to access event notifications.")]),t._v(" "),n("li",[t._v("The ASPSP creates the "),n("strong",[t._v("event-subscription")]),t._v(" resource and responds with a unique EventSubscriptionId to refer to the resource.")]),t._v(" "),n("li",[t._v("An ASPSP "),n("strong",[t._v("must")]),t._v(" respond with a 409 error if an event-subscription exists for that TPP.")])]),t._v(" "),n("h3",{attrs:{id:"get-event-subscriptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-event-subscriptions"}},[t._v("#")]),t._v(" GET /event-subscriptions")]),t._v(" "),n("p",[t._v("The API endpoint allows the TPP to ask an ASPSP to retrieve its "),n("strong",[t._v("event-subscription")]),t._v(" resource.")]),t._v(" "),n("ul",[n("li",[t._v("The ASPSP retrieves the "),n("strong",[t._v("event-subscription")]),t._v(" resource and responds with the resource.")])]),t._v(" "),n("h3",{attrs:{id:"put-event-subscriptions-eventsubscriptionid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#put-event-subscriptions-eventsubscriptionid"}},[t._v("#")]),t._v(" PUT /event-subscriptions/{EventSubscriptionId}")]),t._v(" "),n("p",[t._v("The API endpoint allows the TPP to ask an ASPSP to update an "),n("strong",[t._v("event-subscription")]),t._v(" resource.")]),t._v(" "),n("ul",[n("li",[t._v("The PUT action allows the TPP to update an event subscription for a TPP to access event notifications.")]),t._v(" "),n("li",[t._v("The ASPSP updates the "),n("strong",[t._v("event-subscription")]),t._v(" resource and responds with the updated resource.")])]),t._v(" "),n("h3",{attrs:{id:"delete-event-subscriptions-eventsubscriptionid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delete-event-subscriptions-eventsubscriptionid"}},[t._v("#")]),t._v(" DELETE /event-subscriptions/{EventSubscriptionId}")]),t._v(" "),n("p",[t._v("The API endpoint allows the TPP to ask an ASPSP to delete an "),n("strong",[t._v("event-subscription")]),t._v(" resource.")]),t._v(" "),n("ul",[n("li",[t._v("The ASPSP deletes the "),n("strong",[t._v("event-subscription")]),t._v(" resource.")])]),t._v(" "),n("h2",{attrs:{id:"data-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data Model")]),t._v(" "),n("h3",{attrs:{id:"event-subscription-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-request"}},[t._v("#")]),t._v(" Event Subscription - Request")]),t._v(" "),n("p",[t._v("The OBEventSubscription1 object will be used for the call to:")]),t._v(" "),n("ul",[n("li",[t._v("POST /event-subscriptions")])]),t._v(" "),n("h4",{attrs:{id:"uml-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml-diagram"}},[t._v("#")]),t._v(" UML Diagram")]),t._v(" "),n("p",[n("img",{attrs:{src:e(487),alt:"OBEventSubscription1"}})]),t._v(" "),n("h4",{attrs:{id:"notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),n("p",[t._v("For the OBEventSubscription1 object:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("TPP must not provide CallbackUrl, when subscribing for Aggregated Polling only")])]),t._v(" "),n("li",[n("p",[t._v('TPP must provide the Version of Resources, for which they want to subscribe the events for. E.g. if supplied with value "3.1", TPP indicates the subscription for the change in state of resources created in v3.1 version')])]),t._v(" "),n("li",[n("p",[t._v("EventTypes usage:")]),t._v(" "),n("ul",[n("li",[t._v("TPPs may provide a list of event types to subscribe to specific events.")]),t._v(" "),n("li",[t._v("TPPs may omit this field to subscribe to all supported events.")])])])]),t._v(" "),n("h4",{attrs:{id:"data-dictionary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBEventSubscription1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscription1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscription1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBEventSubscription1/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscriptionData1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("CallbackUrl")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBEventSubscription1/Data/CallbackUrl")]),t._v(" "),n("td",[t._v("Callback URL for a TPP hosted service. Will be used by ASPSPs, in conjunction with the resource name, to construct a URL to send event notifications to.")]),t._v(" "),n("td",[t._v("xs:anyURI")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Version")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBEventSubscription1/Data/Version")]),t._v(" "),n("td",[t._v("Version for the event notification.")]),t._v(" "),n("td",[t._v("Max10Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("EventTypes")]),t._v(" "),n("td",[t._v("0..n")]),t._v(" "),n("td",[t._v("OBEventSubscription1/Data/EventTypes")]),t._v(" "),n("td",[t._v("Array of event types the subscription applies to.")]),t._v(" "),n("td",[t._v("OBEventType1Code")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"event-subscription-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-response"}},[t._v("#")]),t._v(" Event Subscription - Response")]),t._v(" "),n("p",[t._v("The OBEventSubscriptionResponse1 object will be used for a response to a call to:")]),t._v(" "),n("ul",[n("li",[t._v("POST /event-subscriptions")]),t._v(" "),n("li",[t._v("PUT /event-subscriptions/{EventSubscriptionId}")])]),t._v(" "),n("p",[t._v("The OBEventSubscriptionResponse1 object will also be used for the call to:")]),t._v(" "),n("ul",[n("li",[t._v("PUT /event-subscriptions")])]),t._v(" "),n("h4",{attrs:{id:"uml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml"}},[t._v("#")]),t._v(" UML")]),t._v(" "),n("p",[n("img",{attrs:{src:e(488),alt:"OBEventSubscriptionResponse1"}})]),t._v(" "),n("h4",{attrs:{id:"data-dictionary-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-2"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBEventSubscriptionResponse1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscriptionResponseData1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("EventSubscriptionId")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1/Data/EventSubscriptionId")]),t._v(" "),n("td",[t._v("Unique identification as assigned by the ASPSP to uniquely identify the callback URL resource.")]),t._v(" "),n("td",[t._v("Max40Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("CallbackUrl")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1/Data/CallbackUrl")]),t._v(" "),n("td",[t._v("Callback URL for a TPP hosted service. Will be used by ASPSPs, in conjunction with the resource name, to construct a URL to send event notifications to.")]),t._v(" "),n("td",[t._v("xs:anyURI")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Version")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1/Data/Version")]),t._v(" "),n("td",[t._v("Version for the event notification.")]),t._v(" "),n("td",[t._v("Max10Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("EventTypes")]),t._v(" "),n("td",[t._v("0..n")]),t._v(" "),n("td",[t._v("OBEventSubscriptionResponse1/Data/EventTypes")]),t._v(" "),n("td",[t._v("Array of event types the subscription applies to.")]),t._v(" "),n("td",[t._v("OBEventType1Code")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:"event-subscriptions-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-subscriptions-response"}},[t._v("#")]),t._v(" Event Subscriptions - Response")]),t._v(" "),n("p",[t._v("The OBEventSubscriptionsResponse1 object will be used for a response to a call to:")]),t._v(" "),n("ul",[n("li",[t._v("GET /event-subscriptions")])]),t._v(" "),n("h4",{attrs:{id:"uml-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uml-2"}},[t._v("#")]),t._v(" UML")]),t._v(" "),n("p",[n("img",{attrs:{src:e(489),alt:"OBEventSubscriptionsResponse1"}})]),t._v(" "),n("h4",{attrs:{id:"data-dictionary-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary-3"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Occurrence")]),t._v(" "),n("th",[t._v("XPath")]),t._v(" "),n("th",[t._v("EnhancedDefinition")]),t._v(" "),n("th",[t._v("Class")]),t._v(" "),n("th",[t._v("Codes")]),t._v(" "),n("th",[t._v("Pattern")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("OBEventSubscriptionsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Data")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1/Data")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponseData1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("EventSubscription")]),t._v(" "),n("td",[t._v("0..n")]),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("OBEventSubscriptionResponseData1")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("EventSubscriptionId")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription/EventSubscriptionId")]),t._v(" "),n("td",[t._v("Unique identification as assigned by the ASPSP to uniquely identify the callback url resource.")]),t._v(" "),n("td",[t._v("Max40Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Url")]),t._v(" "),n("td",[t._v("0..1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription/Url")]),t._v(" "),n("td",[t._v("Callback URL for a TPP hosted service. Will be used by ASPSPs, in conjunction with the resource name, to construct a URL to send event notifications to.")]),t._v(" "),n("td",[t._v("xs:anyURI")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Version")]),t._v(" "),n("td",[t._v("1..1")]),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription/Version")]),t._v(" "),n("td",[t._v("Version for the event notification.")]),t._v(" "),n("td",[t._v("Max10Text")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("EventTypes")]),t._v(" "),n("td",[t._v("0..n")]),t._v(" "),n("td",[t._v("OBEventSubscriptionsResponse1/Data/EventSubscription/EventTypes")]),t._v(" "),n("td",[t._v("Array of event types the subscription applies to.")]),t._v(" "),n("td",[t._v("OBEventType1Code")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h2",{attrs:{id:"usage-examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage-examples"}},[t._v("#")]),t._v(" Usage Examples")]),t._v(" "),n("h3",{attrs:{id:"create-event-subscription"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-event-subscription"}},[t._v("#")]),t._v(" Create Event Subscription")]),t._v(" "),n("h4",{attrs:{id:"post-event-subscription-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-event-subscription-request"}},[t._v("#")]),t._v(" POST Event Subscription Request")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("POST /event-subscriptions HTTP/1.1\nAuthorization: Bearer 2YotnFZFEjr1zCsicMWpAA\nx-jws-signature: TGlmZSdzIGEgam91cm5leSBub3QgYSBkZXN0aW5hdGlvbiA=..T2ggZ29vZCBldmVuaW5nIG1yIHR5bGVyIGdvaW5nIGRvd24gPw==\nx-fapi-interaction-id: 86ebcd82-8e38-4f2d-a79c-965b41d15865\nContent-Type: application/json\nAccept: application/json\n")])])]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CallbackUrl"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://tpp.com/open-banking/v3.1/event-notifications"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.1"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"post-event-subscription-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-event-subscription-response"}},[t._v("#")]),t._v(" POST Event Subscription Response")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("HTTP/1.1 201 Created\nx-jws-signature: V2hhdCB3ZSBnb3QgaGVyZQ0K..aXMgZmFpbHVyZSB0byBjb21tdW5pY2F0ZQ0K\nx-fapi-interaction-id: 86ebcd82-8e38-4f2d-a79c-965b41d15865\nContent-Type: application/json\n")])])]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"EventSubscriptionId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CB-101"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CallbackUrl"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://tpp.com/open-banking/v3.1/event-notifications"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.1"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Links"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Self"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.alphabank.com/open-banking/v3.1/event-subscriptions/CB-101"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Meta"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"get-event-subscriptions-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-event-subscriptions-2"}},[t._v("#")]),t._v(" Get Event Subscriptions")]),t._v(" "),n("h4",{attrs:{id:"get-event-subscription-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-event-subscription-request"}},[t._v("#")]),t._v(" GET Event Subscription Request")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("GET /event-subscriptions HTTP/1.1\nAuthorization: Bearer 2YotnFZFEjr1zCsicMWpAA\nx-fapi-interaction-id: 86ebcd82-8e38-4f2d-a79c-965b41d15865\nAccept: application/json\n")])])]),n("h4",{attrs:{id:"get-event-subscription-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-event-subscription-response"}},[t._v("#")]),t._v(" GET Event Subscription Response")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("GET/1.1 200 OK\nx-jws-signature: V2hhdCB3ZSBnb3QgaGVyZQ0K..aXMgZmFpbHVyZSB0byBjb21tdW5pY2F0ZQ0K\nx-fapi-interaction-id: 86ebcd82-8e38-4f2d-a79c-965b41d15865\nContent-Type: application/json\n")])])]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"EventSubscription"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"EventSubscriptionId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CB-101"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CallbackUrl"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://tpp.com/open-banking/v3.1/event-notifications"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.1"')]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Links"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Self"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.alphabank.com/open-banking/v3.1/event-subscriptions/"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Meta"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports},487:function(t,s){t.exports="data:image/gif;base64,R0lGODlhJgFZAHAAACwAAAAAJgFZAIIAAAD///8AAID/AAAAgAAAAAAAAAAAAAAD/wi63P4wykmrvTbozbv/YBhgZGmeKCOubOu+cCx7wGx/9a3v/K30wKAQmBu+isakEvZbOp9DJJQ2rU6b1qxWJNV2t2DfN0yGjqvnspqbXosEblf7OY/HsR2BHq7Z6/t+fDaCAX4hhDGIHIKKLI0jZXVJA5SUIgN2I1+EfJyFQYyLII87pCt7IFIqPHhUYJgbsB+ybq2febd9uRuhhaifv4aKnnC/vp2oxcDHgH/If8DQvKkbEDsPHZJGtAGwlRqV3pZhtsO7yri6xL29otPS6LqLnb7TufHR9vKuEjoTkK86cPM2i1wXc4GaBbtFzB2nhe9EeXK3zF6ohvp2cUjBcf9BmIECwRUEU84DPnwRjyVzOOqcy3oaL7JUJ5Gixmoa+omxBnALyG7funEIZ9CkUYy46KWT9+jkS5oUnd5zOXFfto0NWK26GnCoUJFfw3KzYusl0qVnlVLlJRWqPqkyU1p9pMojqxXahtAiCFaW36IfDCl8ZuwhtKqHCztT+YztYnWCATGEyDQyTjJ5hYTbGxQouM5eMmcqRTbS6NPZRKOeYSqK6dWoy8KezWVGGm2qaTuRrbv3ZSZneLvyvUY4cdqqbx85Xjw3czXJa8t5Hqmj9evYs29lIr2F9u/grVNnHj2n+fPexwNW31u03Rzwjf9mT9Y5/Sz2796vvx/56/7/ZoQn4IAE/gfgbvkduESC/thAQAAPPhiDhC9QuAEBGPKAoYVsKBibgR1syKEGEUIoA4cohuiBhSK2MOKIqTDooWuYgQAjByXeKEKKOKroo4kX7pjhj3gRaOSR14FI4gcbLpnjkBBC2SKFJfaY44pBZrkjlunN6KUNX+ho4pNaOumjhCkO+WKZYi5JZHdfxjkdlzaOCaSbQaZZpp14askiC2t2KeegeDHJZJNXZjlliH9aueedjW75ZggyEqpemHRe+SeVd5rZJ5+d4hlpCIGyUKml1I3Bo51Vegqqm5zC+missn5aaqGo5roRqU1GmeGTvfqKJqJ+SjkrjsHSKuKoEnDqiuqpWbQ54ZzO5gqtFcHekP9ts9UOem2c33YLW7hekivuaeaeCKW26xJxrqWY9giDtHVOWq+8QqT77h2G4vsEi+0eequ7+8qparFqAkmssE4GHOrD9z6qX8FfHlxrw322Oiatx7pIZxD6UqykqBlD6mie/n4Kcb8p9xCyyOSQCumynSa8acsDy2zvNTCXKzPHKifq6sM5R6zyxD0feEarN6uo8dMfl2xr1C4n7WEaKPZKZcIM1/wxzSaT2KLEPFutdCb0VmjEy2ajgbbDE8LdYNv9sb2f3XTvljdXe7OHNxTbugAwh3/3TSOjYzt44bJpT7u43GYyW7jhILOsIdVCcNzmtoRTfqnlJHcdoZrZRgrF7ONbl8qs017v6nmqoJu8aay3cmps0yyvTnXnrz8XJthV4q5w1MGfPPSPugPKd+/Excu6sL/KO3DxeQIPo+Yz8M5887HzWXvQzws/KfYnLr+9bs4jb/zw47PZOvhSAw365OfbJnCyyHIt6uqpS6m1w4NTlvJcVz/0uUF+jgOC9go4G/q5TweBU9cCGbgaB/qOgv6hnAUxiCvDbZCDlEKSCI0Ewgp67oMlHE7fUJhCAq6whaNhYXtgmIkR2lBANMyhDnfIwx4e+vCHQAyiEIdIxCIa8YhITKISl8jEJjrxiVDcQAIAADs="},488:function(t,s){t.exports="data:image/gif;base64,R0lGODlhhgFnAHAAACwAAAAAhgFnAIIAAAD///8AAID/AAAAgAAAAAAAAAAAAAAD/wi63P4wykmrvTjrG7r/YCiOZLCdaKqubFO+cCzPdG3f+A3kvLf3wKBwSOwoisikcln8MUvOp3RKFR2r2Kw2F9V2t+Cw7isum6fkavrMPl/b8LhwjZbby+87SaDv06V/fYJEeR8Ch3wdiIeKi4k4jwGLezmRII+WJZNsmUZigXIDoqIlA4MyhYqGqh58nZCtqyKvPbSasWWII10MQakfoHGmHsMixadQX5muq8u4m66MkrrOsdGY0pPM29nUjdnTiZitut+S4eTg5ejhlq9OED0PIMFwxwHDox2j+aTIwMpCMLMmkKC1cedYyVIl7Vwkd+KmPTPIcBzChwkbUXRocf9hxo/AjETgMcHEP2Ig7uUzdlJkwUvtxDliqNChrIflMOr0mHEgq44bryGkiYuoUZtFP75rgaIlvpRQn4a4dyqVs50FZWq7OcIn0p8RF3oN+7XsQGzQyJpVqjEmRisi43EZabKlyn36pOL1d9Jq1mazElb72ZXt26M92SbGalQtTMZrN8KE68OFvF4h6rW5W2zlPpQtf72FLBbwxJo+GR0uu5jr0bGJFb827BF20pAAf9n4o5nNMc9SO4Pum2ZTzG/rcIIr2q2ht5ns2i02LlGrWttpraO9Ht04dNxgep/h9zsvvn58/+l2asOWFPdLxBNiT39u/Vpi4CuRP4T/faet6/0n4H46QDGDfwMiE2CCDPqy2xoLgtfghBFOaGEN8tFRD4IX2lFhhyAauJuIMXAYYhtMpajiiiy2KEGBJGzo4ow01njCiThiCGNd8ByY438f/oijeAt4wuOHJgoZRpBKgpgkF02yx2SUFj6Jg5VUUmHjllx26eInWRIXJpVYjggHAYOgCQIBbALBppqVjRllmTqG8OabPMAZwJ0k6FmDnx/ACWifba5p56ExAOr/55RyCkgnDWQMioOggY4gaQ+XvjCoooEWWgKehubm5aiklmoBmIhW2oGafO65Z6F8cuoBmrR6CmqsrtL6Kqt48grrrrPO2qqqxGqaqpGNJlvHsasGq2etwbrabKjN2irttMJWS+m1ujq7LavFYhstDLL6oOy5T0R6J7jgOqvqs7dW+uy19HJLb7u5yvuuuOWOayy1yKIr8HzMVrvquveKq6+70f5KbLfTUjrvvNJSHG69fTL76MDnRipCt/3ia+jExUKMrcn4opxwxRf3+6nGHMfsYMEnLxyxvxC3aXG+D68ssc0sc+vyyvW6vLHMcqo7LLwOn+yroDrvCqutvXoL/+rBFcdr9cEm89vqtlLvXBfSZNfJYKZLoP0nPWW37WODaidxdQ5zj+323bvgHZ7efLPdNxZH/30if7rGDXCidnpKt+JyBC64k4QybrDh4fpp+bHDvnx4HI4/fmEaaBduw+WVpyr2mpJTvkXnnlP48ce/Fk411FEbrG/X9vprKc0oto63xxnLrnvX7V7e9LinF6y6F77fDfzuog9fdO4MYww2xsr70bzbz3catcpSFy12zqZfnL0erG/v6OvUik6y7dUbrzv12G++fBbpq38f6O3n+z7PDUNezfoXQIUNDQ750x991vC1qtXqag2sndDAFjIIIi9z9wOcApGWQCJkME5j6NugzDo4hLrdwIQIFGHMSMg3FqpwEC783QsHFkPYfdB7CarhDD3Evvn9a3S8O9/6dtixHiosbTjUVOpySMQi9pB27OJa1mInOevJ4ID/Umqisvh3M2/xK2HWst8VgxgaLSaLi0GD3/8AaMXN7c6NWTRj0oInLFxli43ga9kY4QggOc4RevPjlMpOh0UhAsmPY2Ig/XAXPfi1sWTS42MZEZklOlhOa8CaosgqiEkoJi+OlJzTmTzIxFCKsg0o/FMVQWlKIemwba9sJf5kCYNY0lJLE0rlDzOJh1v+SGm6RBzXMldC74UOj27wZY66hykyuglnSiRdL5U5OCMO8GuZxGDPHlhH2pXPh+765CypGSJm2mti38KcFx2JOwGCU49msCU5CZQ4bG7SZ8wCGdDaOcAjCnOa8/ycNW23LvC5TJ9Wu9WmoAnEeAa0Q+bkdVnIjig/MIKwZ+/UHEAf2qCILhKfYvzizspFseu9caMcLSXqlmbML2ItkN2EohQxZ0F/SlINKXWdGUzaUCHckGA5VWkYxHnFVdIgmDgNqlADKk+lyiOnTXUqlFIaVamOwVRYzaoGrHpIqnJ1f1D9an2qSkOxLjEwrGYFkFbXytYXpfWtcI2rXOdK17ra9a54zate98rXvvr1r4ANrGAHS9jCGvawVEgAADs="},489:function(t,s){t.exports="data:image/gif;base64,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"}}]);