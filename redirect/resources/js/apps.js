var qs = AppRedirect.queryString;
var extraParameters = [];
var internalParams = ['app','package'];
for(var pname in qs) {
	if (internalParams.indexOf(pname)==-1) {
		extraParameters.push(pname+'='+qs[pname]);
	}
}
if (extraParameters.length>0) {
	extraParameters = extraParameters.join('&');
} else {
	extraParameters = '';
}
console.log(extraParameters);
window.sypportedApps = {
	'24x7':{
        iosApp: 't24x7://launch?'+extraParameters,
        iosAppStore: 'https://itunes.apple.com/au/app/telstra-24x7-for-iphone/id543829966?mt=8',
        // For this, your app need to have category filter: android.intent.category.BROWSABLE
        android: {
            'host': 'launch?' + extraParameters, // Host/path/querystring part in a custom scheme URL
            // 'action': '', // Equivalent to ACTION in INTENTs
            // 'category': '', // Equivalent to CATEGORY in INTENTs
            // 'component': '', // Equivalent to COMPONENT in INTENTs
            'scheme': 't24x7', // Scheme part in a custom scheme URL
            'package': 'com.telstra.mobile.android.mytelstra', // Package name in Play store
            'fallback': 'https://play.google.com/store/apps/details?id=com.telstra.mobile.android.mytelstra&hl=en'
        }
	}	
};
