## Lorem Ipsum

Sure, there are kittens, dogs, grey boxes, charlie sheen, and van damme image generators... but they are all online, which makes it impossible to do any layout design while you don't have an internet connection.  So, here is a super simple canvas-based grey-box image generator written in javascript which doesn't require hitting an external api.

---

**Requirements**  
jQuery is required, but you could easily remove the jQuery specific functions and just use vanilla javascript if you didn't want to use jQuery.

---

### Usage
Place a data-src attribute on an image tag with the contents of image/[width]x[height] and like magic placeholder images will appear on the page.  If the title attribute of the image is not set, the text will be the dimensions of the image.

```
<img data-src="image/200x300">
```

*Note: I am using the data attributes because I don't like seeing the errors outputted in the console when it attempts to load a fake image source.*

---

### License

Copyright (c) 2013 Shannon A. Snider

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.