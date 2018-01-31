module.exports = {
  // root of the eslint configuration
  root: true,

  // Parser is babel because we use some experimental features, like arrow functions in classes. (https://github.com/tc39/proposal-class-fields)
  // So far we are using the transform-class-properties babel plugin to transform this function into auto bound class methods.
  parser: "babel-eslint",

  // // parser options
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  },

  // // environments : define a set of global variables
  env: {
    es6: true,
    browser: true
  },

  // // addding user defined globals
  // globals: {
  //   "__DEV__" : false,
  //   "__TEST__" : false,
  //   "__PROD__" : false,
  //   "__COVERAGE__" : false
  // },

  // Extending configurations
  extends: ['eslint:recommended', 'airbnb'],

  settings: {
    react: {
      version: "16.2.0"
    }
  },

  rules: {
    // Possible errors
    'comma-dangle': 'warn',
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-extra-semi': 'warn',
    'no-extra-parens': ['warn', 'functions'],

    // Strict mode: "use strict"" directive not allowed,
    // since we are using es6 modules, it's strict mode by default
    'strict': ['error', 'never'],

    // Best practices
    'eqeqeq': 'warn',
    'no-new': 'warn',
    'no-eval': 'warn',
    'curly': 'warn',
    'no-alert': 'warn',
    'no-unused-expressions': 'warn',
    'no-else-return': 'warn',
    'no-warning-comments': 'off',
    'no-case-declarations': 'off',
    'no-fallthrough': 'error',

    // Complexity
    'complexity': ['warn', 11],
    'max-depth': ['warn', 4],
    'max-params': ['warn', 5],
    // 'max-statements': ['warn', 40],

    // Variables
    'no-undef': 'warn',
    'no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'after-used'
    }],
    'no-use-before-define': ['warn', {
      'functions': false,
      'classes': false
    }],

    // Stylistic issues
    'no-array-constructor': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'new-cap': ['warn', {
      'newIsCap': true,
      'capIsNew': true,
      'capIsNewExceptions': ['Router']
    }],
    'semi': 'warn',
    'quotes': ['warn', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'quote-props': ['warn', 'as-needed'],
    'indent': ['warn', 2, {
      SwitchCase: 1
    }],
    'no-trailing-spaces': 'warn',
    'space-before-function-paren': ['warn', {
      "anonymous": "always",
      "named": "never"
    }],
    'space-in-parens': ['warn', 'never'],
    'yoda': ['warn', 'never'],
    'spaced-comment': ['warn', 'always'],
    'max-len' : ['warn', 160, 2],
    'object-curly-spacing' : ['warn', 'always'],
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
    'jsx-quotes': ['warn', "prefer-double"],
    'linebreak-style': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'function-paren-newline': ['warn', 'consistent'],

    // ES6
    // es6 possible errors / best practices
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'prefer-const': 'error',
    'no-useless-constructor': 'off',
    'no-param-reassign': 'off',

    // es6 stylistic issues
    'arrow-spacing': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'template-curly-spacing': 'warn',
    'arrow-parens': ['warn', 'always'],
    'no-underscore-dangle': ['off'],

    // es6 preferences
    'prefer-destructuring': ['off'],
    // 'object-shorthand': 'warn',
    // 'prefer-destructuring': ['warn', {
    //   'array': true,
    //   'object': true
    // }, {
    //   'enforceForRenamedProperties': false
    // }],
    // 'prefer-rest-params': 'warn',
    // 'prefer-spread': 'warn'

    // **********
    // PLUGINS
    // **********

    // REACT
    'react/prop-types': 'error',
    'react/jsx-no-duplicate-props': 'error',

    // IMPORT
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/order': ['warn', {"newlines-between": "always"}],
    'import/newline-after-import': 'warn',
    "import/extensions": [".js", ".jsx"],

    // JSX-A11Y
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': 'off'
    // compatibility issue between eslint 4 and airbnb config ?
    // 'jsx-a11y/href-no-hash': 'off',
  }
 }
