---
template: BlogPost
slug: /lazy-eval-to-strict
date: 2021-10-09T12:30:00.000Z
title: Making R strict-by-default and lazy-on-demand
tags:
  - programming
  - R
metaDescription: >-
  Evolutipon of the R programming language.
thumbnail: /images/sloth.png
---


<p style="text-align:center;"><img src="2021-10-09-lazy-promises-final_files/imgs/sloth.png" width="400" align="center"/></p>

I am excited by the recent article [Promises Are Made to Be Broken](http://aviral.io/static/pdfs/promises-are-made-to-be-broken.pdf) about the authors' efforts to migrate `R`'s lazy evaluation to strict semantics.

`R` was the first programming language I learned (started about 10 years ago) and genuinely feel that its flexibility to execute functional programming patterns has greatly improved my productivity. While I've often taken advantage of a variety of lazy evaluation benefits and as mentioned in the article risks I've generally found `R`'s flexibility predictable and greatly appreciated.

Many of my favorite `R` packages like `dplyr` also leverage lazy evaluation and I have rarely consider the impact of lazy semantics or that 'arguments are suspended computations that are evaluated if
and when they are needed'. While I rarely use meta-programming patterns I have found anonymous function arguments passed as `...` very useful.

I've generally found that using `...` works as expected. For example, take the following tests for our custom function `foo`.

```r
foo <- function(bar = 'foo', ..., fizz = 'buzz') {
  
  c(as.list(environment()), list(...))
}


foo()
```

```
## $bar
## [1] "foo"
## 
## $fizz
## [1] "buzz"
```


```r
foo(bazz=rnorm(1))
```

```
## $bar
## [1] "foo"
## 
## $fizz
## [1] "buzz"
## 
## $bazz
## [1] 0.6520186
```


```r
foo(bazz=rnorm(1),bar='bazz',fizz=rnorm(2))
```

```
## $bar
## [1] "bazz"
## 
## $fizz
## [1] -0.5202518 -2.2660911
## 
## $bazz
## [1] 0.711274
```

Meta-programming example from the paper.

```r
f <- function(a,b) {
print(deparse(substitute(a)))
x <- eval(substitute(b))
x+a
}

f(1+2,3+4)
```

```
## [1] "1 + 2"
```

```
## [1] 10
```

I am excited to see where the authous' goals to 'to migrate R
programs to a strict-by-default, lazy-on-demand semantics.' takes `R`.
