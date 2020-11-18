(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T, '_&gt; Div&lt;&amp;'_ ChunkedArray&lt;T&gt;&gt; for &amp;'_ ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Native: Add&lt;Output = T::Native&gt; + Sub&lt;Output = T::Native&gt; + Mul&lt;Output = T::Native&gt; + Div&lt;Output = T::Native&gt; + Zero + One,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Div&lt;ChunkedArray&lt;T&gt;&gt; for ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Native: Add&lt;Output = T::Native&gt; + Sub&lt;Output = T::Native&gt; + Mul&lt;Output = T::Native&gt; + Div&lt;Output = T::Native&gt; + Zero + One,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N, '_&gt; Div&lt;N&gt; for &amp;'_ ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Native: NumCast,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Num + ToPrimitive,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Native: Div&lt;Output = T::Native&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'_, '_&gt; Div&lt;&amp;'_ Series&gt; for &amp;'_ DataFrame","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; Div&lt;&amp;'_ Series&gt; for DataFrame","synthetic":false,"types":[]},{"text":"impl Div&lt;Expr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl Div&lt;Series&gt; for Series","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; Div&lt;&amp;'_ Series&gt; for &amp;'_ Series","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; Div&lt;T&gt; for &amp;'_ Series <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Num + NumCast,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Div&lt;T&gt; for Series <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Num + NumCast,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()