# react-v18-with-fake-api

## setup

### typesync

https://www.npmjs.com/package/typesync

```
$ yarn add -D typesync
```

```
$ cat package.json
{
　　・・・
  "scripts": {
　　　　・・・
    "preinstall": "typesync || :"
  },
　　・・・
```

### eslint

```
$ yarn list eslint
yarn list v1.22.10
warning Filtering by arguments is deprecated. Please use the pattern option instead.
└─ eslint@8.12.0
Done in 0.91s.
```

```
$ yarn upgrade-interactive --latest
　　・・・

$ yarn upgrade typescript@latest
　　・・・
```

```
$ yarn eslint --init
yarn run v1.22.10
$ /home/sky0621/work/src/github.com/sky0621/cv/admin/frontend/node_modules/.bin/eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.28.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react-hooks@^4.3.0 @typescript-eslint/parser@latest
✔ Would you like to install them now with npm? · No / Yes
A config file was generated, but the config file itself may not follow your linting rules.
Successfully created .eslintrc.js file in /home/sky0621/work/src/github.com/sky0621/cv/admin/frontend
Done in 75.90s.
```

To check syntax, find problems, and enforce code style
JavaScript modules (import/export)
React
Yes
Browser
Use a popular style guide
Airbnb: https://github.com/airbnb/javascript
JavaScript
No

https://eslint.org/docs/user-guide/configuring/

```
$ yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin \
eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y \
eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser
```

```
$ yarn preinstall

$ yarn
```

### Prettier

```
$ yarn add -D prettier eslint-config-prettier
```

#### check

```
$ npx eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'
No rules that are unnecessary or conflict with Prettier were found.
```

### stylelint

```
$ yarn add -D stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order

$ yarn 
```

### more

```
$ yarn -D add eslint-plugin-prefer-arrow
```

### react-router:v6

https://reactrouter.com/

```
$ yarn add react-router-dom@6
```

### redux

https://redux.js.org/

```
$ yarn add redux react-redux
```

### react-hooks-form

```
$ yarn add react-hook-form
```

## tips

### React

### TypeScript

#### typeof

変数の型を取得。

```
type Person = {
  name: string;
  old: number;
};

const person: Person = {
  name: 'yamada',
  old: 22,
};

console.log(typeof ''); // string
console.log(typeof person); // object
```

#### keyof

型コンテキストで利用すると、オブジェクトのプロパティ名を抽出して、文字列リテラルのユニオン型を取得。

```
type Person = {
  name: string;
  old: number;
};

type Keys = keyof Person; // "name" | "old"

let keys: Keys;
keys = 'name'; // OK
keys = 'old'; // OK
keys = 'xxx'; // Error: Type '"xxx"' is not assignable to type '"name" | "old"'.
```
