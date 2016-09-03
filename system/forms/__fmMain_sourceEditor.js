function fmMain_sourceEditor(){
	
	this.main = function(){
	
		var pane = new UIPane();
		this.pane = pane;
		
		this.htmlEditor = new UIWebView();
		var htmlEditor = this.htmlEditor;
		
		pane.getChildren().add(htmlEditor);
		
		htmlEditor.getEngine().load("file:///"+new Stream().abs("system/codemirror/editor.html"));
		
		new UITimer().setRepeat(true).setInterval(1).setOnAction(function(){
			htmlEditor.setPrefWidth(pane.getWidth());
			htmlEditor.setPrefHeight(pane.getHeight());
		}).start();

		var window = htmlEditor.getEngine().executeScript("window");
		window.setMember("Stream", new Stream());
	
		return this;
	
	};
	
	this.load = function(file){
		var request;
		
		request = '$.ajax({'+
		'	url : "'+"file:///"+file+'",'+
		'	dataType: "text",'+
		'	success : function (data) {'+
		'		editor.getDoc().setValue(data);'+
		'	},'+
		'});';
		
		this.htmlEditor.getEngine().executeScript(request);
		this.htmlEditor.getEngine().executeScript('document.getElementById("file").setAttribute("value", "'+file+'");');
	};
}