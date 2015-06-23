/*! 
* DevExtreme (Sparklines)
* Version: 15.1.3
* Build date: Jun 3, 2015
*
* Copyright (c) 2012 - 2015 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
"use strict";if(!DevExpress.MOD_VIZ_SPARKLINES){if(!DevExpress.MOD_VIZ_CORE)throw Error("Required module is not referenced: viz-core");(function(n,t,i){function p(n,t){var r=n.lineSpacing,u=(r!==i&&r!==null?r:a)+n.size;return function(n){for(var f="",r=n.valueText,i=0;i<r.length;i+=2)f+="<tr><td>"+r[i]+"<\/td><td style='width: 15px'><\/td><td style='text-align: "+(t?"left":"right")+"'>"+r[i+1]+"<\/td><\/tr>";return{html:"<table style='border-spacing:0px; line-height: "+u+"px'>"+f+"<\/table>"}}}var a=2,r=200,v=1e3,y=n.extend,s=Math.abs,f=t.viz.core;t.viz.sparklines={},t.viz.sparklines.BaseSparkline=f.BaseWidget.inherit({_setDeprecatedOptions:function(){this.callBase(),n.extend(this._deprecatedOptions,{"tooltip.verticalAlignment":{since:"15.1",message:"Now tootips are aligned automatically"},"tooltip.horizontalAlignment":{since:"15.1",message:"Now tootips are aligned automatically"}})},_clean:function(){var n=this;n._tooltipShown&&(n._tooltipShown=!1,n._tooltip.hide({})),n._cleanWidgetElements(),n._cleanTranslators()},_initCore:function(){var n=this;n._tooltipTracker=n._renderer.root,n._tooltipTracker.attr({"pointer-events":"visible"}),n._createHtmlElements(),n._initTooltipEvents()},_initTooltip:function(){this._initTooltipBase=this.callBase;return},_getDefaultSize:function(){return this._defaultSize},_isContainerVisible:function(){return!0},_disposeCore:function(){this._disposeWidgetElements(),this._disposeTooltipEvents(),this._ranges=null},_render:function(){this._prepareOptions(),this._updateWidgetElements(),this._drawWidgetElements()},_updateWidgetElements:function(){this._updateRange(),this._updateTranslator()},_applySize:function(){this._allOptions&&(this._allOptions.size={width:this._canvas.width,height:this._canvas.height})},_cleanTranslators:function(){this._translatorX=null,this._translatorY=null},_setupResizeHandler:n.noop,_resize:function(){var n=this;n._redrawWidgetElements(),n._tooltipShown&&(n._tooltipShown=!1,n._tooltip.hide({})),n._drawn()},_prepareOptions:function(){return y(!0,{},this._themeManager.theme(),this.option())},_createThemeManager:function(){var n=new t.viz.core.BaseThemeManager;return n._themeSection=this._widgetType,n._fontFields=["tooltip.font"],n},_getTooltipCoords:function(){var n=this._canvas,i=t.utils.getRootOffset(this._renderer);return{x:n.width/2+i.left,y:n.height/2+i.top}},_initTooltipEvents:function(){var n=this,t={widget:n};n._showTooltipCallback=function(){var t;n._showTooltipTimeout=null,n._tooltipShown||(n._tooltipShown=!0,t=n._getTooltip(),t.isEnabled()&&n._tooltip.show(n._getTooltipData(),n._getTooltipCoords(),{}))},n._hideTooltipCallback=function(){n._hideTooltipTimeout=null,n._tooltipShown&&(n._tooltipShown=!1,n._tooltip.hide({}))},n._disposeCallbacks=function(){n=n._showTooltipCallback=n._hideTooltipCallback=n._disposeCallbacks=null};n._tooltipTracker.on(b,t).on(k,t);n._tooltipTracker.on(w)},_disposeTooltipEvents:function(){var n=this;clearTimeout(n._showTooltipTimeout),clearTimeout(n._hideTooltipTimeout),n._tooltipTracker.off(),n._disposeCallbacks()},_updateTranslator:function(){var n=this,t=this._canvas,i=this._ranges;n._translatorX=new f.Translator2D(i.arg,t,{direction:"horizontal"}),n._translatorY=new f.Translator2D(i.val,t)},_getTooltip:function(){var n=this;return n._tooltip||(n._initTooltipBase(),n._setTooltipRendererOptions(n._tooltipRendererOptions),n._tooltipRendererOptions=null,n._setTooltipOptions()),n._tooltip},_setTooltipRendererOptions:function(n){this._tooltip?this._tooltip.setRendererOptions(n):this._tooltipRendererOptions=n},_setTooltipOptions:function(){var i=this._tooltip,t=i&&this._getOption("tooltip");i&&i.update(n.extend({},t,{customizeTooltip:n.isFunction(t.customizeTooltip)?t.customizeTooltip:p(t.font,this.option("rtlEnabled")),enabled:t.enabled&&this._isTooltipEnabled()}))},_showTooltip:function(n){var t=this;clearTimeout(t._hideTooltipTimeout),t._hideTooltipTimeout=null,clearTimeout(t._showTooltipTimeout),t._showTooltipTimeout=setTimeout(t._showTooltipCallback,n)},_hideTooltip:function(n){var t=this;clearTimeout(t._showTooltipTimeout),t._showTooltipTimeout=null,clearTimeout(t._hideTooltipTimeout),t._hideTooltipTimeout=setTimeout(t._hideTooltipCallback,n)},_initLoadingIndicator:n.noop,_disposeLoadingIndicator:n.noop,_handleLoadingIndicatorOptionChanged:n.noop,showLoadingIndicator:n.noop,hideLoadingIndicator:n.noop});var w={"contextmenu.sparkline-tooltip":function(n){(t.ui.events.isTouchEvent(n)||t.ui.events.isPointerEvent(n))&&n.preventDefault()},"MSHoldVisual.sparkline-tooltip":function(n){n.preventDefault()}},b={"mouseover.sparkline-tooltip":function(n){o=!1;var t=n.data.widget;t._x=n.pageX,t._y=n.pageY;t._tooltipTracker.off(e).on(e,n.data);t._showTooltip(r)},"mouseout.sparkline-tooltip":function(n){if(!o){var t=n.data.widget;t._tooltipTracker.off(e),t._hideTooltip(r)}}},e={"mousemove.sparkline-tooltip":function(n){var t=n.data.widget;t._showTooltipTimeout&&(s(t._x-n.pageX)>3||s(t._y-n.pageY)>3)&&(t._x=n.pageX,t._y=n.pageY,t._showTooltip(r))}},u=null,h=function(n){n.preventDefault();var t=u;t&&t!==n.data.widget&&t._hideTooltip(r),t=u=n.data.widget,t._showTooltip(v),t._touch=!0},c=function(){var n=u;n&&(n._touch||(n._hideTooltip(r),u=null),n._touch=null)},l=function(){var n=u;n&&n._showTooltipTimeout&&(n._hideTooltip(r),u=null)},o=!1,k={"pointerdown.sparkline-tooltip":h,"touchstart.sparkline-tooltip":h};n(document).on({"pointerdown.sparkline-tooltip":function(){o=!0,c()},"touchstart.sparkline-tooltip":c,"pointerup.sparkline-tooltip":l,"touchend.sparkline-tooltip":l})})(jQuery,DevExpress),function(n,t,i){var u=t.viz,o=u.core,s=1,h=50,b=4,k=250,d=30,c=5,l=3,g={line:!0,spline:!0,stepline:!0,area:!0,steparea:!0,splinearea:!0,bar:!0,winloss:!0},a=n.map,r=Math,nt=r.abs,tt=r.round,v=r.max,y=r.min,f=isFinite,p=t.utils.isDefined,e=Number,w=String;t.registerComponent("dxSparkline",u.sparklines,u.sparklines.BaseSparkline.inherit({_rootClassPrefix:"dxsl",_rootClass:"dxsl-sparkline",_widgetType:"sparkline",_defaultSize:{width:k,height:d,left:c,right:c,top:l,bottom:l},_initCore:function(){this.callBase(),this._refreshDataSource(),this._createSeries()},_dataSourceChangedHandler:function(){this._initialized&&(this._clean(),this._updateWidgetElements(),this._drawWidgetElements())},_updateWidgetElements:function(){this._updateSeries(),this.callBase()},_dataSourceOptions:function(){return{paginate:!1}},_redrawWidgetElements:function(){this._updateTranslator(),this._correctPoints(),this._series.draw({x:this._translatorX,y:this._translatorY}),this._seriesGroup.append(this._renderer.root)},_disposeWidgetElements:function(){var n=this;delete n._seriesGroup,delete n._seriesLabelGroup,n._series&&n._series.dispose(),n._series=null},_cleanWidgetElements:function(){this._seriesGroup.remove(),this._seriesLabelGroup.remove(),this._seriesGroup.clear(),this._seriesLabelGroup.clear()},_drawWidgetElements:function(){this._isDataSourceReady()&&(this._drawSeries(),this._drawn())},_prepareOptions:function(){this._allOptions=this.callBase(),this._allOptions.type=w(this._allOptions.type).toLowerCase(),g[this._allOptions.type]||(this._allOptions.type="line")},_createHtmlElements:function(){this._seriesGroup=this._renderer.g().attr({"class":"dxsl-series"}),this._seriesLabelGroup=this._renderer.g().attr({"class":"dxsl-series-labels"})},_createSeries:function(){this._series=new o.series.Series({renderer:this._renderer,seriesGroup:this._seriesGroup,labelsGroup:this._seriesLabelGroup},{widgetType:"chart",type:"line"})},_updateSeries:function(){var n=this,t,u,r;n._prepareDataSource(),r=n._prepareSeriesOptions(),n._series.updateOptions(r),t=[[n._series]],t.argumentOptions={type:r.type==="bar"?"discrete":i},u=new o.DataValidator(n._simpleDataSource,t,n._incidentOccured,{checkTypeForAllData:!1,convertToAxisDataType:!0,sortingMethod:!0}),n._simpleDataSource=u.validate(),n._series.updateData(n._simpleDataSource)},_optionChanged:function(n){n.name==="dataSource"&&this._allOptions?this._refreshDataSource():this.callBase.apply(this,arguments)},_parseNumericDataSource:function(n,t,r){var u=this.option("ignoreEmptyPoints");return a(n,function(n,o){var s=null,c,h;return n!==i&&(s={},c=f(n),s[t]=c?w(o):n[t],h=c?n:n[r],s[r]=h===null?u?i:h:e(h),s=s[t]!==i&&s[r]!==i?s:null),s})},_parseWinlossDataSource:function(n,t,i){var u=-1,f=0,e=1,o=.0001,r=this._allOptions.winlossThreshold;return a(n,function(n){var s={};return s[t]=n[t],s[i]=nt(n[i]-r)<o?f:n[i]>r?e:u,s})},_prepareDataSource:function(){var n=this,t=n._allOptions,r=t.argumentField,u=t.valueField,f=n._dataSource?n._dataSource.items():[],i=n._parseNumericDataSource(f,r,u);t.type==="winloss"?(n._winlossDataSource=i,n._simpleDataSource=n._parseWinlossDataSource(i,r,u)):n._simpleDataSource=i},_prepareSeriesOptions:function(){var t=this,n=t._allOptions,r=n.type==="winloss"?"bar":n.type;return{visible:!0,argumentField:n.argumentField,valueField:n.valueField,color:n.lineColor,width:n.lineWidth,widgetType:"chart",type:r,opacity:r.indexOf("area")!==-1?t._allOptions.areaOpacity:i,customizePoint:t._getCustomizeFunction(),point:{size:n.pointSize,symbol:n.pointSymbol,border:{visible:!0,width:2},color:n.pointColor,visible:!1,hoverStyle:{border:{}},selectionStyle:{border:{}}},border:{color:n.lineColor,width:n.lineWidth,visible:r!=="bar"}}},_createBarCustomizeFunction:function(n){var i=this,t=i._allOptions,r=i._winlossDataSource;return function(){var u=this.index,f=t.type==="winloss",e=f?t.winlossThreshold:0,o=f?r[u][t.valueField]:this.value,s=f?t.winColor:t.barPositiveColor,h=f?t.lossColor:t.barNegativeColor,i;return i=o>=e?s:h,(u===n.first||u===n.last)&&(i=t.firstLastColor),u===n.min&&(i=t.minColor),u===n.max&&(i=t.maxColor),{color:i}}},_createLineCustomizeFunction:function(n){var i=this,t=i._allOptions;return function(){var i,r=this.index;return(r===n.first||r===n.last)&&(i=t.firstLastColor),r===n.min&&(i=t.minColor),r===n.max&&(i=t.maxColor),i?{visible:!0,border:{color:i}}:{}}},_getCustomizeFunction:function(){var n=this,i=n._allOptions,u=n._winlossDataSource||n._simpleDataSource,r=n._getExtremumPointsIndexes(u),t;return t=i.type==="winloss"||i.type==="bar"?n._createBarCustomizeFunction(r):n._createLineCustomizeFunction(r)},_getExtremumPointsIndexes:function(n){var t=this,r=t._allOptions,u=n.length-1,i={};return t._minMaxIndexes=t._findMinMax(n),r.showFirstLast&&(i.first=0,i.last=u),r.showMinMax&&(i.min=t._minMaxIndexes.minIndex,i.max=t._minMaxIndexes.maxIndex),i},_findMinMax:function(n){for(var h=this,r=h._allOptions.valueField,c=n[0]||{},u=c[r]||0,f=u,e=u,o=0,s=0,l=n.length,i,t=1;t<l;t++)i=n[t][r],i<f&&(f=i,o=t),i>e&&(e=i,s=t);return{minIndex:o,maxIndex:s}},_updateRange:function(){var o=this,c=o._series,l=c.type,w=l==="bar",b=l==="winloss",k=.15,d=.1,g=1,nt=-1,n=c.getRangeData(),t=o._allOptions.minValue,s=p(t)&&f(t),r=o._allOptions.maxValue,h=p(r)&&f(r),u,a;u=(n.val.max-n.val.min)*k,w||b||l==="area"?(n.val.min!==0&&(n.val.min-=u),n.val.max!==0&&(n.val.max+=u)):(n.val.min-=u,n.val.max+=u),(s||h)&&(s&&h?(n.val.minVisible=y(t,r),n.val.maxVisible=v(t,r)):(n.val.minVisible=s?e(t):i,n.val.maxVisible=h?e(r):i),b&&(n.val.minVisible=s?v(n.val.minVisible,nt):i,n.val.maxVisible=h?y(n.val.maxVisible,g):i)),c.getPoints().length>1&&(w?(a=(n.arg.max-n.arg.min)*d,n.arg.min=n.arg.min-a,n.arg.max=n.arg.max+a):n.arg.stick=!0),o._ranges=n},_getBarWidth:function(n){var r=this,i=r._canvas,u=n*b,f=i.width-i.left-i.right-u,t=tt(f/n);return t<s&&(t=s),t>h&&(t=h),t},_correctPoints:function(){var t=this,i=t._allOptions.type,r=t._series.getPoints(),u=r.length,f,n;if(i==="bar"||i==="winloss")for(f=t._getBarWidth(u),n=0;n<u;n++)r[n].correctCoordinates({width:f,offset:0})},_drawSeries:function(){var n=this;n._simpleDataSource.length>0&&(n._correctPoints(),n._series.draw({x:n._translatorX,y:n._translatorY}),n._seriesGroup.append(n._renderer.root))},_isTooltipEnabled:function(){return!!this._simpleDataSource.length},_getTooltipData:function(){var t=this,r=t._allOptions,n=t._winlossDataSource||t._simpleDataSource,i=t._tooltip;if(n.length===0)return{};var e=t._minMaxIndexes,u=r.valueField,o=n[0][u],s=n[n.length-1][u],h=n[e.minIndex][u],c=n[e.maxIndex][u],l=i.formatValue(o),a=i.formatValue(s),v=i.formatValue(h),y=i.formatValue(c),f={firstValue:l,lastValue:a,minValue:v,maxValue:y,originalFirstValue:o,originalLastValue:s,originalMinValue:h,originalMaxValue:c,valueText:["Start:",l,"End:",a,"Min:",v,"Max:",y]};return r.type==="winloss"&&(f.originalThresholdValue=r.winlossThreshold,f.thresholdValue=i.formatValue(r.winlossThreshold)),f}}).include(t.ui.DataHelperMixin))}(jQuery,DevExpress),function(n,t,i){var f=.02,e=.98,h=.1,c=.9,l=300,a=30,o=1,s=2,r=Number,u=isFinite;t.registerComponent("dxBullet",t.viz.sparklines,t.viz.sparklines.BaseSparkline.inherit({_rootClassPrefix:"dxb",_rootClass:"dxb-bullet",_widgetType:"bullet",_defaultSize:{width:l,height:a,left:o,right:o,top:s,bottom:s},_disposeWidgetElements:function(){delete this._zeroLevelPath,delete this._targetPath,delete this._barValuePath},_redrawWidgetElements:function(){this._updateTranslator(),this._drawBarValue(),this._drawTarget(),this._drawZeroLevel()},_cleanWidgetElements:function(){this._zeroLevelPath.remove(),this._targetPath.remove(),this._barValuePath.remove()},_drawWidgetElements:function(){this._drawBullet(),this._drawn()},_createHtmlElements:function(){var n=this._renderer;this._zeroLevelPath=n.path(i,"line").attr({"class":"dxb-zero-level","stroke-linecap":"square"}),this._targetPath=n.path(i,"line").attr({"class":"dxb-target","stroke-linecap":"square"}),this._barValuePath=n.path(i,"line").attr({"class":"dxb-bar-value","stroke-linecap":"square"})},_prepareOptions:function(){var n=this,t,e,o,c,u,f,s,h;n._allOptions=t=n.callBase(),s=n._allOptions.value===i,h=n._allOptions.target===i,n._tooltipEnabled=!(s&&h),s&&(n._allOptions.value=0),h&&(n._allOptions.target=0),t.value=u=r(t.value),t.target=f=r(t.target),n._allOptions.startScaleValue===i&&(n._allOptions.startScaleValue=f<u?f:u,n._allOptions.startScaleValue=n._allOptions.startScaleValue<0?n._allOptions.startScaleValue:0),n._allOptions.endScaleValue===i&&(n._allOptions.endScaleValue=f>u?f:u),t.startScaleValue=e=r(t.startScaleValue),t.endScaleValue=o=r(t.endScaleValue),o<e&&(c=o,n._allOptions.endScaleValue=e,n._allOptions.startScaleValue=c,n._allOptions.inverted=!0)},_updateRange:function(){var t=this,n=t._allOptions;t._ranges={arg:{invert:n.inverted,min:n.startScaleValue,max:n.endScaleValue,axisType:"continuous",dataType:"numeric"},val:{min:0,max:1,axisType:"continuous",dataType:"numeric"}}},_drawBullet:function(){var t=this,n=t._allOptions,i=n.startScaleValue!==n.endScaleValue,r=u(n.startScaleValue),f=u(n.endScaleValue),e=u(n.value),o=u(n.target);i&&f&&r&&o&&e&&(this._drawBarValue(),this._drawTarget(),this._drawZeroLevel())},_getTargetParams:function(){var n=this,t=n._allOptions,i=n._translatorY,r=n._translatorX.translate(t.target);return{points:[r,i.translate(f),r,i.translate(e)],stroke:t.targetColor,"stroke-width":t.targetWidth}},_getBarValueParams:function(){var e=this,r=e._allOptions,o=e._translatorX,s=e._translatorY,u=r.startScaleValue,f=r.endScaleValue,t=r.value,l=s.translate(h),a=s.translate(c),n,i;return t>0?(n=u<=0?0:u,i=t>=f?f:t<n?n:t):(n=f>=0?0:f,i=t<u?u:t>n?n:t),n=o.translate(n),i=o.translate(i),{points:[n,a,i,a,i,l,n,l],fill:r.color}},_getZeroLevelParams:function(){var n=this,t=n._translatorY,i=n._translatorX.translate(0);return{points:[i,t.translate(f),i,t.translate(e)],stroke:n._allOptions.targetColor,"stroke-width":1}},_drawZeroLevel:function(){var n=this,t=n._allOptions;0>t.endScaleValue||0<t.startScaleValue||!t.showZeroLevel||n._zeroLevelPath.attr(n._getZeroLevelParams()).sharp().append(n._renderer.root)},_drawTarget:function(){var n=this,t=n._allOptions,i=t.target;i>t.endScaleValue||i<t.startScaleValue||!t.showTarget||n._targetPath.attr(n._getTargetParams()).sharp().append(n._renderer.root)},_drawBarValue:function(){this._barValuePath.attr(this._getBarValueParams()).append(this._renderer.root)},_getTooltipCoords:function(){var r=this._canvas,n=t.utils.getRootOffset(this._renderer),i=this._barValuePath.getBBox();return{x:i.x+i.width/2+n.left,y:r.height/2+n.top}},_getTooltipData:function(){var i=this,r=i._tooltip,u=i._allOptions,n=u.value,t=u.target;return{originalValue:n,originalTarget:t,value:r.formatValue(n),target:r.formatValue(t),valueText:["Actual Value:",n,"Target Value:",t]}},_isTooltipEnabled:function(){return this._tooltipEnabled}}))}(jQuery,DevExpress),DevExpress.MOD_VIZ_SPARKLINES=!0}