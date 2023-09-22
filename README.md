# leadingzero
![Travis (.com)](https://img.shields.io/travis/com/nothingrandom/leadingzero)
> Add leading zeros to a number or string

## Install

``` bash
$ yarn add leadingzero
$ npm install leadingzero
```

## Usage (ES6 imports)
``` js
import leadingzero from 'leadingzero';

// leadingzero(number, zeros, character)

leadingzero(7, 3);
// => '007'

leadingzero('10', 4);
// => '0010'

leadingzero(1234, 2);
// => '1234'
```

## License
MIT © [Benjamin Grant](https://nothingrandom.com)