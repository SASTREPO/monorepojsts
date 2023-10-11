/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../PopupTemplate","../../symbols","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../geometry/Polyline","../route/utils","./RouteSettings","../../symbols/support/jsonUtils"],(function(t,e,i,o,a,s,l,r,n,p,u,d,m,b,T,y){"use strict";var f;let S=f=function(e){function o(t){var i;return(i=e.call(this,t)||this).analysisSettings=null,i.endTime=null,i.endTimeOffset=null,i.firstStopId=null,i.geometry=null,i.lastStopId=null,i.messages=null,i.name=null,i.objectId=null,i.popupTemplate=null,i.startTime=null,i.startTimeOffset=null,i.stopCount=null,i.symbol=null,i.totalCosts=null,i.totalDistance=null,i.totalDuration=null,i.totalLateDuration=null,i.totalViolations=null,i.totalWait=null,i.totalWaitDuration=null,i.version="1.0.0",i}t._inheritsLoose(o,e);var a=o.prototype;return a.readEndTime=function(t,e){return s.isSome(e.attributes.EndTimeUTC)?new Date(e.attributes.EndTimeUTC):null},a.readEndTimeOffset=function(t,e){return b.getTimezoneOffset(e.attributes.EndTime,e.attributes.EndTimeUTC)},a.readStartTime=function(t,e){return s.isSome(e.attributes.StartTimeUTC)?new Date(e.attributes.StartTimeUTC):null},a.readStartTimeOffset=function(t,e){return b.getTimezoneOffset(e.attributes.StartTime,e.attributes.StartTimeUTC)},a.readTotalCosts=function(t,e){return b.getPrefixedProperties(e.attributes,"Total_")},a.readTotalViolations=function(t,e){return b.getPrefixedProperties(e.attributes,"TotalViolation_")},a.readTotalWait=function(t,e){return b.getPrefixedProperties(e.attributes,"TotalWait_")},o.fromPortalJSON=function(t){var e,o,a,l,r,n;return new f({analysisSettings:s.isSome(t.attributes.AnalysisSettings)?T.fromJSON(JSON.parse(t.attributes.AnalysisSettings)):null,endTime:s.isSome(t.attributes.EndTime)?new Date(t.attributes.EndTime):null,endTimeOffset:null!=(e=t.attributes.EndUTCOffset)?e:null,geometry:m.fromJSON(t.geometry),messages:s.isSome(t.attributes.Messages)?JSON.parse(t.attributes.Messages):null,name:t.attributes.RouteName,objectId:t.attributes.__OBJECTID,popupTemplate:s.isSome(t.popupInfo)?i.fromJSON(t.popupInfo):null,startTime:s.isSome(t.attributes.StartTime)?new Date(t.attributes.StartTime):null,startTimeOffset:null!=(o=t.attributes.StartUTCOffset)?o:null,symbol:s.isSome(t.symbol)?y.fromJSON(t.symbol):null,totalCosts:s.isSome(t.attributes.TotalCosts)?JSON.parse(t.attributes.TotalCosts):null,totalDistance:null!=(a=t.attributes.TotalMeters)?a:null,totalDuration:null!=(l=t.attributes.TotalMinutes)?l:null,totalLateDuration:null!=(r=t.attributes.TotalLateMinutes)?r:null,totalWaitDuration:null!=(n=t.attributes.TotalWaitMinutes)?n:null,version:t.attributes.Version})},a.toPortalJSON=function(){return{geometry:s.isSome(this.geometry)?this.geometry.toJSON():null,attributes:{__OBJECTID:s.unwrap(this.objectId),AnalysisSettings:s.isSome(this.analysisSettings)?JSON.stringify(this.analysisSettings.toJSON()):null,EndTime:s.isSome(this.endTime)?this.endTime.getTime():null,EndUTCOffset:this.endTimeOffset,Messages:s.isSome(this.messages)?JSON.stringify(this.messages):null,RouteName:s.unwrap(this.name),StartTime:s.isSome(this.startTime)?this.startTime.getTime():null,StartUTCOffset:this.startTimeOffset,TotalCosts:s.isSome(this.totalCosts)?JSON.stringify(this.totalCosts):null,TotalLateMinutes:this.totalLateDuration,TotalMeters:this.totalDistance,TotalMinutes:this.totalDuration,TotalWaitMinutes:this.totalWaitDuration,Version:s.unwrap(this.version)},symbol:s.isSome(this.symbol)?this.symbol.toJSON():null,popupInfo:s.isSome(this.popupTemplate)?this.popupTemplate.toJSON():null}},o}(a.JSONSupport);S.fields=[{name:"__OBJECTID",alias:"OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AnalysisSettings",alias:"Analysis Settings",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"EndTime",alias:"End Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"EndUTCOffset",alias:"End Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Messages",alias:"Analysis Messages",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString",length:1024,editable:!0,nullable:!0,visible:!0,domain:null},{name:"StartTime",alias:"Start Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"StartUTCOffset",alias:"Start Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TotalCosts",alias:"Total Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"TotalLateMinutes",alias:"Total Late Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"TotalMeters",alias:"Total Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"TotalMinutes",alias:"Total Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"TotalWaitMinutes",alias:"Total Wait Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"Version",alias:"Version",type:"esriFieldTypeString",length:16,editable:!0,nullable:!0,visible:!0,domain:null}],S.popupInfo={title:"Route Details",fieldInfos:[{fieldName:"RouteName",label:"Route Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"TotalMinutes",label:"Total Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalMeters",label:"Total Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalLateMinutes",label:"Total Late Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalWaitMinutes",label:"Total Wait Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalCosts",label:"Total Costs",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"StartTime",label:"Start Time",isEditable:!1,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"StartUTCOffset",label:"Start Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"EndTime",label:"End Time",isEditable:!1,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"EndUTCOffset",label:"End Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Messages",label:"Analysis Messages",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"AnalysisSettings",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"Version",label:"Version",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},e.__decorate([l.property({json:{read:!1}})],S.prototype,"analysisSettings",void 0),e.__decorate([l.property()],S.prototype,"endTime",void 0),e.__decorate([u.reader("endTime",["attributes.EndTimeUTC"])],S.prototype,"readEndTime",null),e.__decorate([l.property()],S.prototype,"endTimeOffset",void 0),e.__decorate([u.reader("endTimeOffset",["attributes.EndTime","attributes.EndTimeUTC"])],S.prototype,"readEndTimeOffset",null),e.__decorate([l.property({json:{read:{source:"attributes.FirstStopID"}}})],S.prototype,"firstStopId",void 0),e.__decorate([l.property({type:m})],S.prototype,"geometry",void 0),e.__decorate([l.property({json:{read:{source:"attributes.LastStopID"}}})],S.prototype,"lastStopId",void 0),e.__decorate([l.property({json:{read:!1}})],S.prototype,"messages",void 0),e.__decorate([l.property({json:{read:{source:"attributes.Name"}}})],S.prototype,"name",void 0),e.__decorate([l.property({json:{read:{source:"attributes.ObjectID"}}})],S.prototype,"objectId",void 0),e.__decorate([l.property({type:i,json:{read:!1}})],S.prototype,"popupTemplate",void 0),e.__decorate([l.property()],S.prototype,"startTime",void 0),e.__decorate([u.reader("startTime",["attributes.StartTimeUTC"])],S.prototype,"readStartTime",null),e.__decorate([l.property()],S.prototype,"startTimeOffset",void 0),e.__decorate([u.reader("startTimeOffset",["attributes.StartTime","attributes.StartTimeUTC"])],S.prototype,"readStartTimeOffset",null),e.__decorate([l.property({json:{read:{source:"attributes.StopCount"}}})],S.prototype,"stopCount",void 0),e.__decorate([l.property({types:o.symbolTypes,json:{read:!1}})],S.prototype,"symbol",void 0),e.__decorate([l.property()],S.prototype,"totalCosts",void 0),e.__decorate([u.reader("totalCosts",["attributes"])],S.prototype,"readTotalCosts",null),e.__decorate([l.property({json:{read:!1}})],S.prototype,"totalDistance",void 0),e.__decorate([l.property({json:{read:!1}})],S.prototype,"totalDuration",void 0),e.__decorate([l.property({json:{read:!1}})],S.prototype,"totalLateDuration",void 0),e.__decorate([l.property()],S.prototype,"totalViolations",void 0),e.__decorate([u.reader("totalViolations",["attributes"])],S.prototype,"readTotalViolations",null),e.__decorate([l.property()],S.prototype,"totalWait",void 0),e.__decorate([u.reader("totalWait",["attributes"])],S.prototype,"readTotalWait",null),e.__decorate([l.property({json:{read:!1}})],S.prototype,"totalWaitDuration",void 0),e.__decorate([l.property({json:{read:!1}})],S.prototype,"version",void 0),S=f=e.__decorate([d.subclass("esri.rest.support.RouteInfo")],S);return S}));