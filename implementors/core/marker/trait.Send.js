(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T&gt; Send for ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for NoNull&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for FillNoneStrategy","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumTakeRandomChunked&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumTakeRandomCont&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for InitFold","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for PrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Utf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl Send for Utf8ChunkedBuilderCow","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for AlignedVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ListPrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ListUtf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumIterSingleChunkNullCheck&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumIterSingleChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumIterManyChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumIterManyChunkNullCheck&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8IterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterCont&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterCont&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for NumericChunkIterDispatch&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ChunkIterReturnUnwrappedDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ChunkIterReturnOptionDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BooleanIterDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ListIterDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ChunkParIterReturnOptionDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Utf8ChunkParIterReturnUnwrapppedDispatch&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ObjectArray&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ObjectChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Utf8Type","synthetic":true,"types":[]},{"text":"impl Send for ListType","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ObjectType&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for AnyType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for PolarsError","synthetic":true,"types":[]},{"text":"impl Send for DataFrame","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RecordBatchIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'df, 'selection_str&gt; Send for GroupBy&lt;'df, 'selection_str&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'df, 'selection_str&gt; Send for Pivot&lt;'df, 'selection_str&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Send for CsvWriter&lt;'a, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for CsvReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for CsvEncoding","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for IPCReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Send for IPCWriter&lt;'a, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for JsonReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for ParquetReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for When","synthetic":true,"types":[]},{"text":"impl Send for WhenThen","synthetic":true,"types":[]},{"text":"impl Send for Expr","synthetic":true,"types":[]},{"text":"impl Send for Operator","synthetic":true,"types":[]},{"text":"impl Send for LazyFrame","synthetic":true,"types":[]},{"text":"impl Send for LazyGroupBy","synthetic":true,"types":[]},{"text":"impl Send for Series","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()