# jsLog
JavaScript console logging library

<h2>Usage</h2>

Create an instance, set default color and default background

<pre>var jsl = new js_log({
	color: '#00ff00',
	background: 'rgb(100, 100, 50)',
	time: true
});</pre>
	
Write to console, accepts hex, rgb colors<br/>
<pre>jsl.log('some text', 'foreground color', 'background color');</pre>

Set font color (default: black)
<pre>jsl.color('color');</pre>

Set background color (default: none)
<pre>jsl.background('color');</pre>

Logging with time (default)
<pre>jsl.time_on();</pre>

Logging without time
<pre>jsl.time_off();</pre>

Enable logging (default)
<pre>jsl.on();</pre>

Disable logging
<pre>jsl.off();</pre>

<h2>License</h2>

Copyright (c) 2016 Tamas Szoke

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

MIT License: https://opensource.org/licenses/MIT
