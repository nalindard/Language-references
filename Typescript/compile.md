# Compiler Options

## compile any file

`tsc fileName.ts`

by default tsc compiler will tatrget `es5` 

## configuration file

* `tsc --init`


### Options


```json

# ES Version,

13
14  "target": "es2016", # change it to ES6
15

# ---


# Targeet Directory,

28
29  "rootDir": "./", # change it to "./src"
30


# ---

# Output Directory,

57
58  "outDir": "./", # change it to "./dist"
59
```


## compile all files

* `tsc`

## compile when files change

* `tsc --watch`