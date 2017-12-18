# eases

Available as CDN from https://unpkg.com/eases-cdn/

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

This is a grab-bag of [Robert Penner's easing equations](http://www.robertpenner.com/easing/), most of the code from [glsl-easings](https://www.npmjs.org/package/glsl-easings).

```js
// import all eases
import eases from 'eases-cdn'

// import only the single function
const { quadIn } from 'eases-cdn'
```

## Graph

You can see the easings graph here 
https://codepen.io/kunukn/full/mpVJOm/

## Usage

All easing functions only remap a time value, and all have the same signature.

#### ```v = ease(t)```

Where `t` is typically a value between 0 and 1, and it returns a new float that has been eased. 

## License

MIT, see [LICENSE.md](http://github.com/kunukn/eases/blob/master/LICENSE.md) for details.
