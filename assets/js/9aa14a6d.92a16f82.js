"use strict";(self.webpackChunkcivitai_developer=self.webpackChunkcivitai_developer||[]).push([[450],{59038:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>y,default:()=>v,frontMatter:()=>k,metadata:()=>h,toc:()=>T});var s=t(87462),i=(t(67294),t(3905)),l=t(58219),m=(t(62316),t(51039)),n=t.n(m),o=(t(82723),t(9487)),p=t(41429),r=t(5397),d=t(4667),c=t(9472),u=t(85162);const k={id:"put-jobs",title:"Taint a specific job by its id",description:"Taint a specific job by its id",sidebar_label:"Taint a specific job by its id",hide_title:!0,hide_table_of_contents:!0,api:"eJztVktvEzEQ/iuWLzwaSFt6yi0NRSpIUPVxKjnM7k4Spxvb2N7QsNr/zoy9eTUtRIA4NZESrz2Pz/PNzkwtA4y97N3KjybzctiRxqKDoIw+L2RP2irEg4604GCGAR1L11LTA51PTUZyHak0C0OY0Nrht0o5JPXgKuxIn09wBrJXy7CwrOSDU3osm2aYhNGHU1MsWCI3OqAOvARrS5VHKN2pN5r3dkyZbIp5YHiOgQeFnk8dQqux7bIjdVWWkJWYwDWd5PE+PGYTikKxeygvNq2TUoE+d8ryISn0tTA2CQqPQZiRuMNFdw5lhcKCcl6ECQSRgxYZispjIYIRBHmuChRrN6IF83YXaPMUnBGUnoIcVGBZeQ1KM2WXKa6SFdnkcwj/KoSbyfj64DmWfx5LVnXordE+Bef48JD/tu9wVeU5ei9J+OTwZPf8swnig6k0155/VDPS6R4UtXfbQ9IHCNWGcSqTAcfoSHZk3AxC2np3/JhygQFUuZcfpcmTzvcB9SRx9fpmkvZJY/Y+IvAtaQWOoCrDLhdnzhn3zMP/4WHnbY9vmADhLeZqpHJBLVlkC6GCF4pfD2raE9P28tjHqUn3ZHd+1CXCfDVD1yUV361jL29IxGNeORUWsdH3rfqEvBxyu14eXTGZia+lwOrKkDYeAh0YuxAvThEcOvFCHAgqSKoQ/YrgOfUjJgvVoTvUgm5kxEhhyfjbSWNLbjlxTBAKopGjwml2uR4mzu5hZlN6LKvvmot1kW0iayMT4bdRH6i5ooCLL44uSToJ2aANluhfnJOJOQ1C6V7zI65S1vgwg5joLeDfErMVnlX0YrO2JSmz2crFzEuk3bKviD4ioeU0zWa9NIYRPxOCwYJ1nYHHG1c2DW9TWFzkkICDUykPidxCeV4Xq7r9ANPqlZYvL9up7pUgh49iXdKvmfvYbeiJlnecHe2k2AxJsGWNAaSzQXLz5potrHV3qkjTWWr0qT3Y8EvZ4UbqX9xck2zWDpkzU7CKg+88rdJvT36lr+Thlw2kns37tSxBjysYx1k3muXPTx+w6iQ=",sidebar_class_name:"put api-method",info_path:"docs/api/orchestration/civitai-orchestration-consumer-api",custom_edit_url:null},y=void 0,h={unversionedId:"api/orchestration/put-jobs",id:"api/orchestration/put-jobs",title:"Taint a specific job by its id",description:"Taint a specific job by its id",source:"@site/docs/api/orchestration/put-jobs.api.mdx",sourceDirName:"api/orchestration",slug:"/api/orchestration/put-jobs",permalink:"/docs/api/orchestration/put-jobs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"put-jobs",title:"Taint a specific job by its id",description:"Taint a specific job by its id",sidebar_label:"Taint a specific job by its id",hide_title:!0,hide_table_of_contents:!0,api:"eJztVktvEzEQ/iuWLzwaSFt6yi0NRSpIUPVxKjnM7k4Spxvb2N7QsNr/zoy9eTUtRIA4NZESrz2Pz/PNzkwtA4y97N3KjybzctiRxqKDoIw+L2RP2irEg4604GCGAR1L11LTA51PTUZyHak0C0OY0Nrht0o5JPXgKuxIn09wBrJXy7CwrOSDU3osm2aYhNGHU1MsWCI3OqAOvARrS5VHKN2pN5r3dkyZbIp5YHiOgQeFnk8dQqux7bIjdVWWkJWYwDWd5PE+PGYTikKxeygvNq2TUoE+d8ryISn0tTA2CQqPQZiRuMNFdw5lhcKCcl6ECQSRgxYZispjIYIRBHmuChRrN6IF83YXaPMUnBGUnoIcVGBZeQ1KM2WXKa6SFdnkcwj/KoSbyfj64DmWfx5LVnXordE+Bef48JD/tu9wVeU5ei9J+OTwZPf8swnig6k0155/VDPS6R4UtXfbQ9IHCNWGcSqTAcfoSHZk3AxC2np3/JhygQFUuZcfpcmTzvcB9SRx9fpmkvZJY/Y+IvAtaQWOoCrDLhdnzhn3zMP/4WHnbY9vmADhLeZqpHJBLVlkC6GCF4pfD2raE9P28tjHqUn3ZHd+1CXCfDVD1yUV361jL29IxGNeORUWsdH3rfqEvBxyu14eXTGZia+lwOrKkDYeAh0YuxAvThEcOvFCHAgqSKoQ/YrgOfUjJgvVoTvUgm5kxEhhyfjbSWNLbjlxTBAKopGjwml2uR4mzu5hZlN6LKvvmot1kW0iayMT4bdRH6i5ooCLL44uSToJ2aANluhfnJOJOQ1C6V7zI65S1vgwg5joLeDfErMVnlX0YrO2JSmz2crFzEuk3bKviD4ioeU0zWa9NIYRPxOCwYJ1nYHHG1c2DW9TWFzkkICDUykPidxCeV4Xq7r9ANPqlZYvL9up7pUgh49iXdKvmfvYbeiJlnecHe2k2AxJsGWNAaSzQXLz5potrHV3qkjTWWr0qT3Y8EvZ4UbqX9xck2zWDpkzU7CKg+88rdJvT36lr+Thlw2kns37tSxBjysYx1k3muXPTx+w6iQ=",sidebar_class_name:"put api-method",info_path:"docs/api/orchestration/civitai-orchestration-consumer-api",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Query for previously submitted jobs by looking up the properties",permalink:"/docs/api/orchestration/post-job-query"},next:{title:"Civitai Generator Node.js Client",permalink:"/docs/api/sdk/"}},b={},T=[{value:"Request",id:"request",level:2}],g={toc:T};function v(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Taint a specific job by its id"),(0,i.kt)(n(),{method:"put",path:"/v1/consumer/jobs/{jobId}",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"Taint a specific job by its id"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"jobId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,i.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"context"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__nullable"},"nullable"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"An optional set of key/value pairs that can be used to provide additional context.")))))))),(0,i.kt)(u.default,{label:"text/json",value:"text/json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"context"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__nullable"},"nullable"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"An optional set of key/value pairs that can be used to provide additional context.")))))))),(0,i.kt)(u.default,{label:"application/*+json",value:"application/*+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"context"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__nullable"},"nullable"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"An optional set of key/value pairs that can be used to provide additional context."))))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Success")),(0,i.kt)("div",null)),(0,i.kt)(u.default,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Not Found")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"detail",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"instance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,i.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "type": "string",\n  "title": "string",\n  "status": 0,\n  "detail": "string",\n  "instance": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(u.default,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Error")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"detail",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"instance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,i.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "type": "string",\n  "title": "string",\n  "status": 0,\n  "detail": "string",\n  "instance": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);