# Todo App w/ Yii and Angular 2

This is a spike project to quickly gauge the 
* usability
* testability
* user-friendliness

of the [Yii framework](http://www.yiiframework.com) used in conjunction with
[Angular 2](https://angular.io).

## Development environment
To get the development environment up and running type

```
$ docker-compose up
```

in the project directory. You need to have [Docker](https://www.docker.com) installed.

## Install Yii dependencies
In order to pull Yii dependencies, you need to install this asset plugin:
```
$ composer global require "fxp/composer-asset-plugin:^1.2.0"
```
Now you can run `composer up` in the *server* folder.
NOTE: This will take a while, be patient! :)
