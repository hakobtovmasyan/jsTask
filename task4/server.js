'use strict';

var serverObj = {
	parseUrls:[],
	urlObj:{},
	index:0,
	limit:1000,
	init:function(url){
		var me = this;
		var URL = require('url-parse');

		me.urlObj = new URL(url);

		var domain = me.urlObj.host.split('.');
		me.urlObj.domain =domain[domain.length-2]+'.'+domain[domain.length-1] 
			
		me.getUrlContent(url);

	},
	setLimit:function(limit){
		var me = this;
		me.limit = limit;
	},
	getUrlContent:function(url){
		console.log(url);
		var fetchUrl = require("fetch").fetchUrl;
		var me = this;
		fetchUrl(url, function(error, meta, body){
		    me.parseUrlContent(body.toString());
		});
		
	},
	parseUrlContent:function(content){
		var cheerio = require('cheerio');
		var $ = cheerio.load(content);
		var me = this;
		
		for(var item in $('a')){

			try {
				if (me.parseUrls.length > me.limit-1) {

					for (var i = 0; i < me.parseUrls.length; i++) {
						
						console.log(me.parseUrls[i]);	
					};
					
					var fs = require('fs');

					fs.writeFile("./storage/url.txt",me.parseUrls.toString() , function(err) {
					    if(err) {
					        return console.log(err);
					    }

					    console.log("Created log file /storage/url.txt");
					}); 
					return me.parseUrls;
				}

				if ($('a')[item].attribs.href.startsWith("//") && $('a')[item].attribs.href.includes(me.urlObj.domain)) {
					var element = $('a')[item].attribs.href;
					if (me.checkExists(me.parseUrls,element)) {
						me.parseUrls.push(element);
					}
				}
				else if($('a')[item].attribs.href.startsWith("/")){
					var element = $('a')[item].attribs.href;
					if (me.checkExists(me.parseUrls,element)) {
						me.parseUrls.push(me.urlObj.origin + element);
					}
				}
		    } catch(exception) {

		    }
		}

		me.index++;
		if (me.index < me.parseUrls.length) {
			me.getUrlContent(me.parseUrls[me.index]);
		}
		
	},
	checkExists:function(array,element){
		
		if (array.indexOf(element) == -1) {
			return 1;
		}else{
			return 0;
		}

		return 0;
	}
};

var config = require('config');
var url = config.get('url');
	
serverObj.init(url);

// serverObj.init("http://stackoverflow.com/questions/33973952/try-catch-returns-variable-as-undefined");
