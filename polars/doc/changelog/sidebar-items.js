initSidebarItems({"mod":[["v0_3","Changelog v0.3Utf8 type is nullable #37Support all ARROW numeric types #40Support all ARROW temporal types #46ARROW IPC Reader/ Writer #50Implement DoubleEndedIterator trait for ChunkedArray's #34"],["v0_4","Changelog v0.4median aggregation added to `ChunkedArray<T>`Arrow LargeList datatype support (and groupby aggregation into LargeList).Shift operation.Fill None operation.Buffered serialization (less memory requirements)Temporal utilities"],["v0_5","Changelog v0.5`DataFrame.column` returns `Result<_>` breaking change.Define idiomatic way to do inplace operations on a `DataFrame` with `apply`, `may_apply` and `ChunkSet``ChunkSet` Trait.`Groupby` aggregations can be done on a selection of multiple columns.`Groupby` operation can be done on multiple keys.`Groupby` `first` operation.`Pivot` operation.Random access to `ChunkedArray` types via `.get` and `.get_unchecked`."],["v0_6","Changelog v0.6Add more distributions for random sampling.Fix float aggregations with NaNs.Comparisons are more performant.Outer join is more performant.Start with parallel iterator support for ChunkedArrays.Remove crossbeam dependency."],["v0_7","Changelog v0.7More group by aggregations:n_uniquequantilemedianlastgroup indexesagg (combined aggregations)explode operationmelt operationdf! macroRem trait implemented for Series and ChunkedArraysChunkedArrays broadcasting arithmeticChunkedArray/Series `zip_with` operationChunkedArray/Series `expand_at_index` operationlaziness api initiated.Predicate pushdown optimizerProjection pushdown optimizerType coercion optimizerSelection (filter, where clause)Projection (select foo from bar)Aggregation (groupby)all eager aggregations supportedJoinsWithColumn operationDSL(col, lit, lt, lt_eq, alias, etc.)arithmeticwhen / then /otherwise1.3-1.7 peformance increase of filterChunkedArray/ Series creation speedup: No nulls: 10X speedup, Nulls: 1.1-2.2x speedup."],["v0_8","Changelog v0.8Upgrade to Arrow 2.0Add quantile aggregation to `ChunkedArray`Option to stop reading CSV after n rows.Read parquet file in a single batch reducing reading time.Faster kernel for zip_with and set_with operationString utilitiesUtf8Chunked::str_lengths methodUtf8Chunked::contains methodUtf8Chunked::replace methodUtf8Chunked::replace_all methodTemporal utilitiesUtf8Chunked to dat32 / date64Lazyfill_none expressionshift expressionSeries aggregationsaggregations on DataFrame levelaggregate to largelista lot of bugs fixed in optimizersUDF's / closures in lazy dslDataFrame reverse operation"],["v0_9","Changelog v0.9CSV Read IOlarge performance increaseskip_rowsignore parser errorsOverall performance increase by using Seahash in favor of FNV.Groupby floating point keysDataFrame operationsdrop_nullsdrop duplicate rows"]]});