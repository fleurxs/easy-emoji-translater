# Easy Emoji Translator

Translate your emoji -> text and text -> emoji

## Install

``` bash
$ npm i -s easy-emoji-translator
```

## Example
```javascript
const emojiTranslator = require('./index');

(async () => {
  ...

  emojiTranslator.setLanguage('en-US');

  const text = emojiTranslator.toText('🍌');

  if (null !== text) {
    console.log(text.shortName);
  }

  ...
})();
```

## Usage

Include

```javascript
const emojiTranslator = require('./index');
```

Set Language

Two languages are available - ru-RU and en-US

```javascript
emojiTranslator.setLanguage('ru-RU');
```

Emoji to text

```javascript
const text = emojiTranslator.toText('👥');
console.log(text); // { emoji: '👥', shortName: 'бюсты в силуэте' }
```

Text to emoji

```javascript
const emoji = emojiTranslator.toEmoji('Банан');
console.log(emoji); // { emoji: '🍌', shortName: 'банан' }
```

Other

```javascript
const contains = emojiTranslator.textContains('сердце с');
console.log(contains);

const containsRegExp = emojiTranslator.textContains(/ый квадрат/i);
console.log(containsRegExp);
```