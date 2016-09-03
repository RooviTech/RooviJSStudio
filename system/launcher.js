load("system/loader.js");
$MAIN_STYLESHEET = "system/profile/css/rjss.css";
$settings = new JsonParser("settings.json");
$IS_MATERIAL = true;

com.sun.javafx.application.LauncherImpl.launchApplication((Java.extend(Java.type("javafx.application.Application"), {
	start: function() new fmMain().show()
})).class, new (Java.type("java.lang.String[]"))(0));