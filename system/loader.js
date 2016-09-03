var prefix = "system/";

var modules = new org.roovi.nashorn.litekit.Stream().scan(prefix+"modules");
var wrappers = new org.roovi.nashorn.litekit.Stream().scan(prefix+"modules/wrappers");
var forms = new org.roovi.nashorn.litekit.Stream().scan(prefix+"forms");

for each(var mods in modules){
	var file = prefix+"modules/"+mods;
	if(!new org.roovi.nashorn.litekit.Stream().isDir(file)) load(file);
}

for each(var wrapper in wrappers){
	var file = prefix+"modules/wrappers/"+wrapper;
	if(!new org.roovi.nashorn.litekit.Stream().isDir(file)) load(file);
}

for each(var form in forms){
	var file = prefix+"forms/"+form;
	if(!new org.roovi.nashorn.litekit.Stream().isDir(file)) load(file);
}