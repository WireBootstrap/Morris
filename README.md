<h1>Morris</h1>

<kbd>
<img align="left" src="https://my-stg.wirebootstrap.com/img/eb/test/morris2.png">
</kbd>
<p>
<strong>
Charts for WireBootstrap using Morris.js
</strong>
</p>
<p>
Vendor: <a href="https://morrisjs.github.io/morris.js" target="_blank">Morris.js</a><br/>
Support: <a href="http://www.www.com" target="_blank">WireBootstrap Forums</a><br/>
Demo: <a href="https://colorlib.com/polygon/gentelella/morisjs.html">Gentelella Template</a>
</p>
<p>
Create data widgets using the Morris.js charting library.
</p>
<hr/>
<h1><a id="config">Configuration</a></h1>

```javascript
{
 "schema": {
   "xkey": "xkey",
   "ykeys": []
 },
 "type": "bar",
 "morris": {
   "element": null,
   "resize": true,
   "data": [],
   "parseTime": false,
   "hideHover": "auto",
   "fillOpacity": 0.6,
   "pointFillColors": [ "#ffffff" ],
   "pointStrokeColors": [ "black" ],
   "xLabelAngle": 60
 }
}
```

<table>
	<thead>
		<tr>
			<th style="width:100px">Property</th>
			<th style="width:300px">Description</th>
			<th style="width:100px">Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="width:100px">schema</td>
			<td style="width: 300px;">Data source fields mapped to the chart's data configuration</td>
			<td style="width:100px">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width:100px">type</td>
			<td style="width:300px">Type of chart to be plotted. Valid values are area, line, bar, and donut.</td>
			<td style="width:100px">bar</td>
		</tr>
		<tr>
			<td style="width:100px">morris</td>
			<td style="width:300px">Use this property to set the chart's <a href="//morrisjs.github.io/morris.js" target="_new">native configuration options</a></td>
			<td style="width:100px">See <em>morris</em> property in JSON configuration above.</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>

<h2>Data Binding (schema)</h2>

<p>
	<br>
</p>

<table>
	<thead>
		<tr>
			<th style="width:100px">Property</th>
			<th style="width:300px">Description</th>
			<th style="width:100px">Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="width:100px">xkey</td>
			<td style="width:300px">Field to be used on the x-axis</td>
			<td style="width:100px">xkey</td>
		</tr>
		<tr>
			<td style="width:100px">ykeys</td>
			<td style="width:300px">Array of fields to be plotted on the chart
				<br>
			</td>
			<td style="width:100px">
				<br>
			</td>
		</tr>
	</tbody>
</table>
