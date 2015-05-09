# ionic-facebook-integration
integrate ionic framework with phonegap-facebook-plugin

## running step

download sources.
```
git clone https://github.com/todoken/ionic-facebook-integration.git
```

add platform and ionic standard plugins for this app (for ios).
```
ionic platform add ios
ionic plugin add org.apache.cordova.device
ionic plugin add org.apache.cordova.console
ionic plugin add com.ionic.keyboard
```

add cordova facebook plugin.
```
git clone https://github.com/Wizcorp/phonegap-facebook-plugin.git
cordova -d plugin add /path/to/cloned/phonegap-facebook-plugin --variable APP_ID=<your app id> --variable APP_NAME=<your app name>
```

run this app.
```
ionic emulate ios
```

## see also

* http://ionicframework.com/
* https://github.com/Wizcorp/phonegap-facebook-plugin
* http://qiita.com/todoken/items/885b880a283ad7d6c433
