
# Statistics — Glossary & Formula Sheet

*(NCERT Class 11 Mathematics, Chapter 13 — Measures of Dispersion)*

> A standalone lookup table of every term, symbol, and formula from this chapter, for fast revision. See **NOTES** for explanations, derivations, and worked examples.

## Terms & Symbols


| Term                              | Symbol                     | Meaning                                                                                             |
| ----------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| Measure of central tendency       | \(\bar x\), M, mode        | A single representative value locating where the data is centred                                    |
| Measure of dispersion             | —                         | A single number describing how spread out data is around a measure of central tendency              |
| Range                             | —                         | Maximum value − Minimum value                                                                      |
| Deviation                         | \(x_i - a\)                | Signed distance of an observation\(x_i\) from a fixed reference value \(a\)                         |
| Mean deviation about\(a\)         | M.D.(\(a\))                | Mean of the*absolute* deviations of all observations from \(a\)                                     |
| Median                            | \(M\)                      | Middle value of data arranged in ascending/descending order                                         |
| Median class                      | —                         | For continuous data: the class whose cumulative frequency is the first to reach or exceed\(N/2\)    |
| Variance                          | \(\sigma^2\)               | Mean of the*squared* deviations of all observations from the mean                                   |
| Standard deviation                | \(\sigma\)                 | Positive square root of variance; expressed in the same units as the original data                  |
| Discrete frequency distribution   | \(x_i : f_i\)              | Data given as distinct values\(x_i\), each occurring with frequency \(f_i\)                         |
| Continuous frequency distribution | class intervals :\(f_i\)   | Data grouped into gap-free class intervals with frequencies\(f_i\)                                  |
| Assumed mean                      | \(A\)                      | An arbitrarily chosen reference value (usually near the data's centre) used to simplify computation |
| Common factor / class width       | \(h\)                      | The (equal) width of each class interval, used to rescale deviations                                |
| Step deviation                    | \(y_i = \dfrac{x_i-A}{h}\) | Deviation from the assumed mean, rescaled by the common factor\(h\)                                 |
| N                                 | \(N=\sum f_i\)             | Total number of observations (sum of all frequencies); equals\(n\) when every frequency is 1        |
| Cumulative frequency              | c.f.                       | Running total of frequencies up to and including a given class/value                                |
| Lower limit of median class       | \(l\)                      | Lower boundary of the class interval containing the median                                          |
| Preceding cumulative frequency    | \(C\)                      | Cumulative frequency of the class**immediately before** the median class                            |

---

## Formula Sheet, Grouped by Topic

### Range

\[
\text{Range} = \text{Maximum value} - \text{Minimum value}
\]

### Mean deviation — general form (specialises to mean or median)

\[
\boxed{\text{M.D.}(a) = \dfrac{1}{n}\sum_{i=1}^n |x_i - a|} \qquad \text{(ungrouped, } n \text{ observations)}
\]
\[
\text{M.D.}(\bar x) = \dfrac{1}{n}\sum_{i=1}^n |x_i - \bar x|, \qquad
\text{M.D.}(M) = \dfrac{1}{n}\sum_{i=1}^n |x_i - M|
\]

### Mean deviation — grouped data (discrete or continuous, \(N=\sum f_i\))

\[
\boxed{\text{M.D.}(\bar x) = \dfrac{1}{N}\sum_{i=1}^n f_i\,|x_i - \bar x|}
\qquad
\boxed{\text{M.D.}(M) = \dfrac{1}{N}\sum_{i=1}^n f_i\,|x_i - M|}
\]

### Median of a continuous frequency distribution

\[
\boxed{\text{Median} = l + \dfrac{\dfrac{N}{2} - C}{f}\times h}
\]
\(l\) = lower limit, \(f\) = frequency, \(h\) = width — **all of the median class**; \(C\) = cumulative frequency of the class **before** the median class.

### Variance & standard deviation — ungrouped data

\[
\boxed{\sigma^2 = \dfrac{1}{n}\sum_{i=1}^n (x_i - \bar x)^2}
\qquad
\boxed{\sigma = \sqrt{\dfrac{1}{n}\sum_{i=1}^n (x_i - \bar x)^2}}
\]

### Variance & standard deviation — grouped data (discrete or continuous)

\[
\sigma^2 = \dfrac{1}{N}\sum_{i=1}^n f_i(x_i-\bar x)^2
\]
Raw-score form (skip computing every individual deviation):
\[
\boxed{\sigma = \dfrac{1}{N}\sqrt{N\sum f_i x_i^2 - \left(\sum f_i x_i\right)^2}}
\]

### Shortcut / step-deviation method

Assumed mean \(A\), common factor \(h\), \(y_i = \dfrac{x_i-A}{h}\):
\[
\bar x = A + h\left(\dfrac{\sum f_i y_i}{N}\right)
\]
\[
\boxed{\sigma^2 = \dfrac{h^2}{N^2}\left[N\sum f_i y_i^2 - \left(\sum f_i y_i\right)^2\right]}
\qquad
\boxed{\sigma = \dfrac{h}{N}\sqrt{N\sum f_i y_i^2 - \left(\sum f_i y_i\right)^2}}
\]
*Requires equal class widths (h must be a common factor of every deviation).*

### Effect of transforming the data


| Transformation                | New mean        | New variance                          |
| ------------------------------- | ----------------- | --------------------------------------- |
| Shift:\(y_i = x_i + a\)       | \(\bar x + a\)  | unchanged:\(\sigma_y^2 = \sigma_x^2\) |
| Scale:\(y_i = k\,x_i\)        | \(k\bar x\)     | \(\sigma_y^2 = k^2\sigma_x^2\)        |
| Combined:\(y_i = a + k\,x_i\) | \(a + k\bar x\) | \(\sigma_y^2 = k^2\sigma_x^2\)        |
