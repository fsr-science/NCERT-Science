
# Statistics — Measures of Dispersion

> How a single number can describe not just where data is centred, but how scattered it is — range, mean deviation, variance, and standard deviation, for raw, discrete, and continuous data.

## At a glance

- **Subject:** Mathematics — Statistics
- **Level:** NCERT Class 11 (Board / foundational JEE)
- **Prerequisites:** mean (arithmetic mean), median, mode; cumulative frequency; discrete vs. continuous frequency distributions
- **Key idea:** Two data sets can share the same mean and median yet behave completely differently — dispersion is what a measure of central tendency alone cannot tell you.
- **Chapter map:** 13.1 Introduction → 13.2 Measures of dispersion (overview) → 13.3 Range → 13.4 Mean deviation → 13.5 Variance & standard deviation

---

## 13.1 Introduction ⭐

Mean, median, and mode locate the *centre* of a data set, but two data sets can have identical centres and still look nothing alike.

**NCERT's motivating example — runs scored by two batsmen in their last 10 matches:**


|                    | Batsman A                             | Batsman B                              |
| -------------------- | --------------------------------------- | ---------------------------------------- |
| Scores             | 30, 91, 0, 64, 42, 80, 30, 5, 117, 71 | 53, 46, 48, 50, 53, 53, 58, 60, 57, 52 |
| Mean               | 53                                    | 53                                     |
| Median             | 53                                    | 53                                     |
| Minimum – Maximum | 0 – 117                              | 46 – 60                               |

Both batsmen have the *same* mean and median (53), yet A's scores swing wildly (a duck one match, a century-plus the next) while B is metronomic. Plotting the scores as dots on a number line makes this visible directly: A's dots are spread from 0 to 117; B's dots cluster tightly between 46 and 60.

> **Key idea:** A measure of central tendency answers "where is the data centred?" A **measure of dispersion** answers the separate question "how bunched or scattered is it around that centre?" You need both to actually understand a data set — central tendency alone can hide wildly different underlying behaviour, as A and B show.

---

## 13.2 Measures of Dispersion ⭐

There are four standard measures of dispersion. This chapter covers three of them in depth; quartile deviation is deferred to a later course.

1. **Range** — crudest measure; uses only the two extreme values.
2. **Quartile deviation** — *not covered in this chapter.*
3. **Mean deviation** — average of the *absolute* deviations from a central value.
4. **Standard deviation** (and its square, **variance**) — built from *squared* deviations from the mean.

The last two (mean deviation, standard deviation) are the ones that actually use every observation's distance from the centre, so they carry more information than Range.

---

## 13.3 Range ⭐

\[
\boxed{\text{Range} = \text{Maximum value} - \text{Minimum value}}
\]

For the batsmen above: Range(A) = 117 − 0 = **117**; Range(B) = 60 − 46 = **14**. Range(A) > Range(B) confirms numerically what the dot plot showed visually — A is far more scattered.

> **Watch out:** Range only looks at the two extreme values. It says nothing about how the values *in between* are distributed relative to the centre — one wild outlier can dominate it while 98% of the data sits tightly clustered. This is exactly why the chapter moves on to deviation-based measures.

---

## 13.4 Mean Deviation ⭐⭐

### Why deviations from the mean don't simply "average out" usefully

The natural first idea for measuring spread: take each observation's deviation from a central value \(a\), i.e. \(x_i - a\), and average those deviations. But when \(a = \bar x\) (the mean), this fails immediately:

\[
\text{Mean of deviations} = \frac{\sum (x_i - \bar x)}{n} = \frac{0}{n} = 0
\]

This is always exactly zero (positive and negative deviations cancel by the very definition of the mean), so it carries no information about spread at all.

**Fix:** take the *absolute value* of each deviation before averaging — distance doesn't care about direction. This mean of absolute deviations is the **mean deviation**, denoted M.D.(\(a\)) for deviations taken about a general reference value \(a\):

\[
\boxed{\text{M.D.}(a) = \frac{\text{Sum of absolute values of deviations from } a}{\text{Number of observations}}}
\]

In practice \(a\) is almost always the mean \(\bar x\) or the median \(M\) — the general formula specialises to whichever central value the question asks about:

\[
\text{M.D.}(\bar x) = \frac{1}{n}\sum_{i=1}^{n}|x_i - \bar x|, \qquad \text{M.D.}(M) = \frac{1}{n}\sum_{i=1}^{n}|x_i - M|
\]

### 13.4.1 Mean deviation for ungrouped data ⭐⭐

**Method (4 steps):**

1. Compute the measure of central tendency \(a\) (mean or median) you're deviating from.
2. Find each deviation \(x_i - a\).
3. Take absolute values \(|x_i - a|\).
4. Average those absolute values.

#### 13.4 Solved — Mean deviation about the mean (NCERT Example 1)

**Given:** 6, 7, 10, 12, 13, 4, 8, 12 (n = 8)
**Find:** M.D.(\(\bar x\))
**Work:**
\[
\bar x = \frac{6+7+10+12+13+4+8+12}{8} = \frac{72}{8} = 9
\]
Deviations \(x_i - \bar x\): −3, −2, 1, 3, 4, −5, −1, 3 — absolute values: 3, 2, 1, 3, 4, 5, 1, 3.
\[
\text{M.D.}(\bar x) = \frac{3+2+1+3+4+5+1+3}{8} = \frac{22}{8} = 2.75
\]
**Check:** the *signed* deviations (−3,−2,1,3,4,−5,−1,3) sum to 0, confirming \(\bar x = 9\) was computed correctly before the absolute values were taken. ✓

#### 13.4 Solved — Mean deviation about the median, odd n (NCERT Example 3)

**Given:** 3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21 (n = 11, odd)
**Approach:** for odd n, the median is the \(\left(\frac{n+1}{2}\right)^{\text{th}}\) observation once the data is sorted — a special case that only applies when n is odd; for even n you'd instead average the two middle terms (see §13.4.2).
**Work:** sorted data: 3, 3, 4, 5, 7, 9, 10, 12, 18, 19, 21. \(\frac{11+1}{2}=6\), so the median is the 6th term: \(M = 9\).
Absolute deviations from M: 6, 6, 5, 4, 2, 0, 1, 3, 9, 10, 12; sum = 58.
\[
\text{M.D.}(M) = \frac{58}{11} = 5.2\overline{72} \approx 5.27
\]
**Check:** the deviation of the median from itself is 0 (matches the 6th entry above). ✓

### 13.4.2 Mean deviation for grouped data ⭐⭐

Data can be grouped as a **discrete frequency distribution** (distinct values \(x_i\) with frequencies \(f_i\)) or a **continuous frequency distribution** (class intervals with frequencies \(f_i\)). Let \(N = \sum f_i\) (total number of observations).

**(a) Mean deviation about the mean (discrete or continuous):**
\[
\bar x = \frac{1}{N}\sum_{i=1}^n f_i x_i, \qquad
\boxed{\text{M.D.}(\bar x) = \frac{1}{N}\sum_{i=1}^n f_i\,|x_i - \bar x|}
\]
For continuous data, \(x_i\) is the **mid-point** of each class (the frequency is treated as concentrated at the mid-point — an approximation, not an exact statement about individual data values).

**(b) Mean deviation about the median:**

- *Discrete:* sort the values, build the cumulative frequency (c.f.) column, and take the median as the value whose c.f. is the first to reach or exceed \(\dfrac{N}{2}\).
- *Continuous:* first locate the **median class** — the class whose c.f. is the first to reach or exceed \(\dfrac{N}{2}\) — then interpolate within it:
  \[
  \boxed{\text{Median} = l + \frac{\frac{N}{2} - C}{f}\times h}
  \]
  where \(l\) = lower limit of the median class, \(f\) = frequency of the median class, \(h\) = width of the median class, \(C\) = cumulative frequency of the class **immediately preceding** the median class (not the median class itself — a common slip).

\[
\text{M.D.}(M) = \frac{1}{N}\sum_{i=1}^n f_i\,|x_i - M|
\]

#### 13.4 Solved — Mean deviation about the mean, discrete data (NCERT Example 4)

**Given:** \(x_i\): 2, 5, 6, 8, 10, 12 with \(f_i\): 2, 8, 10, 7, 8, 5
**Work:**


| \(x_i\)   | \(f_i\)    | \(f_ix_i\) | \(\lvert x_i-\bar x\rvert\) | \(f_i\lvert x_i-\bar x\rvert\) |
| ----------- | ------------ | ------------ | ----------------------------- | -------------------------------- |
| 2         | 2          | 4          | 5.5                         | 11                             |
| 5         | 8          | 40         | 2.5                         | 20                             |
| 6         | 10         | 60         | 1.5                         | 15                             |
| 8         | 7          | 56         | 0.5                         | 3.5                            |
| 10        | 8          | 80         | 2.5                         | 20                             |
| 12        | 5          | 60         | 4.5                         | 22.5                           |
| **Total** | **N = 40** | **300**    |                             | **92**                         |

\[
\bar x = \frac{300}{40} = 7.5, \qquad \text{M.D.}(\bar x) = \frac{92}{40} = 2.3
\]
**Check:** \(\bar x = 7.5\) sits between the smallest (2) and largest (12) value, as any mean must. ✓

#### 13.4 Solved — Mean deviation about the median, discrete data, even N (NCERT Example 5)

**Given:** \(x_i\): 3, 6, 9, 12, 13, 15, 21, 22 with \(f_i\): 3, 4, 5, 2, 4, 5, 4, 3 (already sorted; N = 30, even)
**Work:** cumulative frequencies: 3, 7, 12, 14, 18, 23, 27, 30. Since N is even, the median is the mean of the \(\left(\frac{N}{2}\right)^{\text{th}}\) and \(\left(\frac{N}{2}+1\right)^{\text{th}} = 15^{\text{th}}\) and \(16^{\text{th}}\) observations. Both fall inside the c.f. = 18 group, i.e. both equal 13:
\[
M = \frac{13+13}{2} = 13
\]
Absolute deviations \(|x_i - 13|\): 10, 7, 4, 1, 0, 2, 8, 9; \(f_i|x_i-13|\): 30, 28, 20, 2, 0, 10, 32, 27; sum = 149.
\[
\text{M.D.}(M) = \frac{149}{30} = 4.9\overline{6} \approx 4.97
\]
**Check:** the term contributing 0 (at \(x_i = 13\)) confirms 13 is genuinely a data value present in the set, as a median identified this way should be. ✓

#### 13.4 Solved — Mean deviation about the mean, continuous data (NCERT Example 6)

**Given:** Marks 10–20, …, 70–80 with frequencies 2, 3, 8, 14, 8, 3, 2 (N = 40)
**Approach:** replace each class by its mid-point, then proceed exactly as for discrete data.
**Work:**


| Marks     | \(f_i\) | Mid-point\(x_i\) | \(f_ix_i\) | \(\lvert x_i-\bar x\rvert\) | \(f_i\lvert x_i-\bar x\rvert\) |
| ----------- | --------- | ------------------ | ------------ | ----------------------------- | -------------------------------- |
| 10–20    | 2       | 15               | 30         | 30                          | 60                             |
| 20–30    | 3       | 25               | 75         | 20                          | 60                             |
| 30–40    | 8       | 35               | 280        | 10                          | 80                             |
| 40–50    | 14      | 45               | 630        | 0                           | 0                              |
| 50–60    | 8       | 55               | 440        | 10                          | 80                             |
| 60–70    | 3       | 65               | 195        | 20                          | 60                             |
| 70–80    | 2       | 75               | 150        | 30                          | 60                             |
| **Total** | **40**  |                  | **1800**   |                             | **400**                        |

\[
\bar x = \frac{1800}{40}=45, \qquad \text{M.D.}(\bar x) = \frac{400}{40}=10
\]

**Shortcut (step-deviation) cross-check:** with assumed mean \(A=45\), \(h=10\), \(d_i = \frac{x_i-45}{10}\) gives \(d_i\): −3,−2,−1,0,1,2,3 with \(f_id_i\): −6,−6,−8,0,8,6,6, summing to **0**. Then \(\bar x = 45 + \frac{0}{40}\times 10 = 45\) — matches directly, and confirms 45 was a good (centred) choice of assumed mean. ✓

#### 13.4 Solved — Mean deviation about the median, continuous data (NCERT Example 7)

**Given:** Classes 0–10, …, 50–60 with frequencies 6, 7, 15, 16, 4, 2 (N = 50)
**Work:** cumulative frequencies: 6, 13, 28, 44, 48, 50. \(\frac{N}{2}=25\); the first c.f. ≥ 25 is 28, in class **20–30** → this is the median class, with \(l=20, C=13, f=15, h=10\).
\[
\text{Median} = 20 + \frac{25-13}{15}\times 10 = 20 + 8 = 28
\]


| Class     | \(f_i\) | Mid-point | \(\lvert x_i - 28\rvert\) | \(f_i\lvert x_i-28\rvert\) |
| ----------- | --------- | ----------- | --------------------------- | ---------------------------- |
| 0–10     | 6       | 5         | 23                        | 138                        |
| 10–20    | 7       | 15        | 13                        | 91                         |
| 20–30    | 15      | 25        | 3                         | 45                         |
| 30–40    | 16      | 35        | 7                         | 112                        |
| 40–50    | 4       | 45        | 17                        | 68                         |
| 50–60    | 2       | 55        | 27                        | 54                         |
| **Total** | **50**  |           |                           | **508**                    |

\[
\text{M.D.}(M) = \frac{508}{50} = 10.16
\]
**Check:** \(28\) lies inside the median class 20–30, as it must — a computed median outside its own median class signals an arithmetic error. ✓

### 13.4.3 Limitations of mean deviation ⭐⭐⭐

- When variability is very high, the median is not a very representative central value, so M.D. about the median calculated for such data can't be fully relied on.
- The sum of *absolute* deviations from the mean is actually **larger** than the sum from the median in general, which is part of why M.D. about the mean is considered "not very scientific" as a measure.
- Mean deviation is built from absolute values, which are not algebraically well-behaved (you can't easily expand, differentiate, or combine \(|x_i - a|\) the way you can a square). This is precisely the motivation for the next section — **variance and standard deviation** replace "absolute value" with "square," which *is* algebraically tractable.

---

## 13.5 Variance and Standard Deviation ⭐⭐⭐

### Why "sum of squared deviations" alone still isn't the right measure

Squaring, like taking an absolute value, guarantees non-negative deviations that don't cancel:
\[
\sum_{i=1}^n (x_i-\bar x)^2 = 0 \iff \text{every } x_i = \bar x \text{ (no dispersion at all)}
\]
But NCERT proves — using two data sets constructed to have the *same* mean — that the raw **sum** \(\sum(x_i-\bar x)^2\) is a bad measure of dispersion by itself, because it doesn't account for how many observations went into it.

#### Worked comparison (NCERT §13.5 motivating example)

**Set A** (6 obs): 5, 15, 25, 35, 45, 55, mean = 30.
\[
\sum(x_i-30)^2 = 625+225+25+25+225+625 = 1750
\]
**Set B** (31 obs): 15, 16, …, 45, mean = 30.
\[
\sum(y_i-30)^2 = 2\left[15^2+14^2+\cdots+1^2\right] = 2\times\frac{15\times16\times31}{6} = 2480
\]
(using \(\sum_{k=1}^{n}k^2 = \frac{n(n+1)(2n+1)}{6}\) with \(n=15\)).

Taken at face value, \(1750 < 2480\) would suggest A is *less* dispersed than B — but A's deviations range from −25 to +25 while B's range only from −15 to +15, so A is visibly the more scattered set (confirmed by plotting both on a number line: A's 6 dots spread thinly across the full range, B's 31 dots sit densely packed together). The raw sum is misleading because it rewards B simply for having many more terms to add up.

**Fix:** divide by the number of observations to get an *average* squared deviation.
\[
\text{Set A: } \frac{1750}{6} = 291.67 \qquad \text{Set B: } \frac{2480}{31} = 80
\]
Now A (291.67) is clearly more dispersed than B (80) — matching what the dot plots show. This average of squared deviations is the **variance**:

\[
\boxed{\sigma^2 = \frac{1}{n}\sum_{i=1}^n(x_i-\bar x)^2}
\]

### 13.5.1 Standard deviation ⭐⭐⭐

Variance is in *squared* units of the original data (e.g. runs², not runs), which makes it awkward to interpret directly. Taking the positive square root restores the original units — this is the **standard deviation**:

\[
\boxed{\sigma = \sqrt{\frac{1}{n}\sum_{i=1}^n(x_i-\bar x)^2}}
\]

#### 13.5 Solved — Variance of ungrouped data via step-deviation (NCERT Example 8)

**Given:** 6, 8, 10, 12, 14, 16, 18, 20, 22, 24 (n = 10, uniform step of 2)
**Approach:** take assumed mean \(A=14\) (the middle value), common factor \(h=2\), and work with \(d_i=\frac{x_i-14}{2}\) to keep the arithmetic small — the *general* variance formula is unchanged; only the computation route is shortened (see §13.5.4 for why this always works).
**Work:** \(d_i\): −4,−3,−2,−1,0,1,2,3,4,5, sum = 5.
\[
\bar x = 14 + \frac{5}{10}\times 2 = 15
\]
Deviations \((x_i-15)\): −9,−7,−5,−3,−1,1,3,5,7,9; squares: 81,49,25,9,1,1,9,25,49,81; sum = 330.
\[
\sigma^2 = \frac{330}{10}=33, \qquad \sigma=\sqrt{33}\approx 5.74
\]
**Check:** the squared deviations are symmetric (81,49,25,9,1,1,9,25,49,81) because the data is a perfectly symmetric arithmetic progression around 15 — consistent with \(\bar x=15\) being exactly the midpoint of the sequence. ✓

### 13.5.2 Standard deviation of a discrete frequency distribution ⭐⭐⭐

\[
\boxed{\sigma = \sqrt{\frac{1}{N}\sum_{i=1}^n f_i(x_i-\bar x)^2}}, \qquad N=\sum_{i=1}^n f_i
\]

#### 13.5 Solved — Variance and SD, discrete data (NCERT Example 9)

**Given:** \(x_i\): 4, 8, 11, 17, 20, 24, 32 with \(f_i\): 3, 5, 9, 5, 4, 3, 1 (N = 30)
**Work:**


| \(x_i\)   | \(f_i\) | \(f_ix_i\) | \(x_i-\bar x\) | \((x_i-\bar x)^2\) | \(f_i(x_i-\bar x)^2\) |
| ----------- | --------- | ------------ | ---------------- | -------------------- | ----------------------- |
| 4         | 3       | 12         | −10           | 100                | 300                   |
| 8         | 5       | 40         | −6            | 36                 | 180                   |
| 11        | 9       | 99         | −3            | 9                  | 81                    |
| 17        | 5       | 85         | 3              | 9                  | 45                    |
| 20        | 4       | 80         | 6              | 36                 | 144                   |
| 24        | 3       | 72         | 10             | 100                | 300                   |
| 32        | 1       | 32         | 18             | 324                | 324                   |
| **Total** | **30**  | **420**    |                |                    | **1374**              |

\[
\bar x = \frac{420}{30}=14, \qquad \sigma^2 = \frac{1374}{30}=45.8, \qquad \sigma = \sqrt{45.8}\approx 6.77
\]

### 13.5.3 Standard deviation of a continuous frequency distribution ⭐⭐⭐

Replace each class by its mid-point, then compute exactly as for discrete data.

**Raw-score (algebraically expanded) formula** — derived once, used often, since it avoids computing \(x_i-\bar x\) for every single class:

\[
\begin{aligned}
\sigma^2 &= \frac{1}{N}\sum f_i(x_i-\bar x)^2 = \frac{1}{N}\sum f_i\left(x_i^2 - 2\bar x\,x_i + \bar x^2\right) \\
&= \frac{1}{N}\left[\sum f_ix_i^2 - 2\bar x\sum f_ix_i + \bar x^2\sum f_i\right] \\
&= \frac{1}{N}\left[\sum f_ix_i^2 - 2\bar x(N\bar x) + \bar x^2 N\right] \qquad \left(\text{using } \sum f_ix_i = N\bar x\right) \\
&= \frac{1}{N}\sum f_ix_i^2 - \bar x^2
\end{aligned}
\]

Substituting \(\bar x = \frac{1}{N}\sum f_i x_i\) throughout gives the fully "raw" form:

\[
\boxed{\sigma = \frac{1}{N}\sqrt{N\sum f_ix_i^2 - \left(\sum f_ix_i\right)^2}}
\]

#### 13.5 Solved — Mean, variance, SD, continuous data (NCERT Example 10)

**Given:** Classes 30–40, …, 90–100 with frequencies 3, 7, 12, 15, 8, 3, 2 (N = 50)
**Work:**


| Class     | \(f_i\) | Mid-pt\(x_i\) | \(f_ix_i\) | \((x_i-\bar x)^2\) | \(f_i(x_i-\bar x)^2\) |
| ----------- | --------- | --------------- | ------------ | -------------------- | ----------------------- |
| 30–40    | 3       | 35            | 105        | 729                | 2187                  |
| 40–50    | 7       | 45            | 315        | 289                | 2023                  |
| 50–60    | 12      | 55            | 660        | 49                 | 588                   |
| 60–70    | 15      | 65            | 975        | 9                  | 135                   |
| 70–80    | 8       | 75            | 600        | 169                | 1352                  |
| 80–90    | 3       | 85            | 255        | 529                | 1587                  |
| 90–100   | 2       | 95            | 190        | 1089               | 2178                  |
| **Total** | **50**  |               | **3100**   |                    | **10050**             |

\[
\bar x = \frac{3100}{50}=62, \qquad \sigma^2 = \frac{10050}{50}=201, \qquad \sigma = \sqrt{201}\approx 14.18
\]

#### 13.5 Solved — SD via the raw-score formula (NCERT Example 11)

**Given:** \(x_i\): 3, 8, 13, 18, 23 with \(f_i\): 7, 10, 15, 10, 6
**Approach:** use \(\sigma = \frac{1}{N}\sqrt{N\sum f_ix_i^2-(\sum f_ix_i)^2}\) directly — no need to compute \(\bar x\) or individual deviations first.
**Work:** \(N=48\); \(\sum f_ix_i = 21+80+195+180+138=614\); \(\sum f_ix_i^2 = 63+640+2535+3240+3174=9652\).
\[
\sigma = \frac{1}{48}\sqrt{48\times 9652 - 614^2} = \frac{1}{48}\sqrt{463296-376996} = \frac{1}{48}\sqrt{86300} = \frac{293.77}{48}\approx 6.12
\]
**Check:** \(\bar x = \frac{614}{48}=12.79\), which lies between 3 and 23 as required, and \(\sigma \approx 6.12\) is comfortably smaller than the full range of 20 — consistent with most of the frequency (15+10=25 of 48) sitting near the centre. ✓

### 13.5.4 Shortcut method: step-deviation ⭐⭐⭐

When mid-points or values are large, direct computation of \(\bar x\) and \(\sigma\) is tedious. Shift the origin to an assumed mean \(A\) and rescale by the common factor \(h\) (the class width, when classes are of equal width):

\[
y_i = \frac{x_i-A}{h} \iff x_i = A+hy_i
\]

**Deriving the mean formula:** substituting into \(\bar x=\frac1N\sum f_ix_i\),
\[
\bar x = \frac1N\sum f_i(A+hy_i) = \frac{A}{N}\sum f_i + \frac{h}{N}\sum f_iy_i = A + h\,\bar y \qquad \left(\text{using } \sum f_i=N\right)
\]

**Deriving the variance formula:** since \(x_i-\bar x = h(y_i-\bar y)\) (the constant shift \(A\) cancels, only the scaling \(h\) survives),
\[
\sigma_x^2 = \frac1N\sum f_i\,h^2(y_i-\bar y)^2 = h^2\cdot\sigma_y^2 \quad\Longrightarrow\quad \boxed{\sigma_x = h\,\sigma_y}
\]

Combining with the raw-score form for \(\sigma_y\) gives the full shortcut formula:

\[
\boxed{\sigma_x = \frac{h}{N}\sqrt{N\sum f_iy_i^2-\left(\sum f_iy_i\right)^2}}
\]

> **Watch out:** \(h\) must be a genuinely common factor of all the deviations — for grouped data this means **equal class widths**. If the classes have unequal widths, this shortcut doesn't directly apply; use the raw mid-point values instead.

#### 13.5 Solved — Mean, variance, SD via step-deviation (NCERT Example 12)

**Given:** same data as Example 10 (classes 30–100, frequencies 3,7,12,15,8,3,2). Take \(A=65\), \(h=10\).
**Work:** \(y_i=\frac{x_i-65}{10}\): −3,−2,−1,0,1,2,3. \(f_iy_i\): −9,−14,−12,0,8,6,6, sum **= −15**. \(f_iy_i^2\): 27,28,12,0,8,12,18, sum **= 105**.
\[
\bar x = 65 + \frac{-15}{50}\times 10 = 65-3=62
\]
\[
\sigma^2 = \frac{10^2}{50^2}\left[50\times 105-(-15)^2\right] = \frac{1}{25}[5250-225]=\frac{5025}{25}=201, \qquad \sigma=\sqrt{201}\approx 14.18
\]
**Check:** identical to \(\bar x=62,\ \sigma^2=201\) found directly in Example 10 — the shortcut is a computational route to the *same* number, not a different formula. ✓

---

## Miscellaneous Results — How Transformations Affect Mean and Variance ⭐⭐⭐

These are frequent exam traps because scaling and shifting affect variance in **opposite** ways — one changes it, the other doesn't.

### 13.M Solved — Multiplying every observation by a constant (NCERT Example 13)

**Given:** variance of 20 observations is 5; each observation is multiplied by 2.
**Approach:** let \(y_i=2x_i\), so \(x_i=\frac12y_i\), and substitute into the known relation \(\sum(x_i-\bar x)^2=100\) (from \(\sigma^2=5,\ n=20\)).
**Work:**
\[
\bar y = 2\bar x \implies \sum\left(\tfrac12 y_i - \tfrac12\bar y\right)^2 = 100 \implies \tfrac14\sum(y_i-\bar y)^2=100 \implies \sum(y_i-\bar y)^2=400
\]
\[
\text{New variance} = \frac{400}{20} = 20 = 2^2\times 5
\]

> **General rule:** multiplying every observation by a constant \(k\) multiplies the variance by \(k^2\) (and the SD by \(|k|\)).

### 13.M Solved — Adding a constant to every observation (NCERT Example 15)

**Given:** each of \(x_1,\ldots,x_n\) is increased by a constant \(a\) (positive or negative).
**Approach:** let \(y_i=x_i+a\); show the new mean shifts by \(a\) but the new variance is identical to the old.
**Work:**
\[
\bar y = \frac1n\sum(x_i+a) = \bar x + a
\]
\[
\sigma_y^2 = \frac1n\sum(y_i-\bar y)^2 = \frac1n\sum\big[(x_i+a)-(\bar x+a)\big]^2 = \frac1n\sum(x_i-\bar x)^2 = \sigma_x^2
\]
**Check:** this makes intuitive sense — shifting every data point by the same amount slides the whole distribution along the number line without stretching or compressing it, so the *spread* is untouched even though the *centre* moves. Contrast this directly with Example 13 above: **adding** a constant leaves variance unchanged, **multiplying** by a constant scales it by \(k^2\). Confusing these two is one of the most common errors on this topic.

### 13.M Solved — Recovering unknown observations from mean and variance (NCERT Example 14)

**Given:** mean of 5 observations is 4.4, variance is 8.24; three of the observations are 1, 2, 6.
**Find:** the other two observations, \(x\) and \(y\).
**Approach:** turn the two given statistics into two algebraic equations in \(x\) and \(y\), then solve as a system.
**Work:**
From the mean: \(1+2+6+x+y = 5\times4.4=22 \implies x+y=13\). — (1)

From the variance: \(\sum(x_i-4.4)^2 = 5\times8.24=41.2\).
\[
(1-4.4)^2+(2-4.4)^2+(6-4.4)^2+(x-4.4)^2+(y-4.4)^2 = 41.2
\]
\[
11.56+5.76+2.56+\left[x^2+y^2-8.8(x+y)+2(4.4)^2\right]=41.2
\]
Using \(x+y=13\) from (1): \(11.56+5.76+2.56+x^2+y^2-8.8(13)+38.72 = 41.2 \implies x^2+y^2=97\). — (2)

Squaring (1): \(x^2+y^2+2xy=169\). Combined with (2): \(2xy=72\).
\[
(x-y)^2 = x^2+y^2-2xy = 97-72=25 \implies x-y=\pm5 \quad\text{— (3)}
\]
Solving (1) and (3) together: \(x=9,\,y=4\) or \(x=4,\,y=9\).

**Check (verify against the *original* equations, not the squared/intermediate ones):** \(4+9=13\) ✓ matches (1); \(4^2+9^2=16+81=97\) ✓ matches (2). Both root-pairs are valid — they're the same two values \(\{4,9\}\), just assigned to "\(x\)" and "\(y\)" in either order, since the original data set doesn't distinguish a 4th from a 5th observation.

### 13.M Solved — Correcting mean and SD after a misrecorded observation (NCERT Example 16)

**Given:** 100 observations were (incorrectly) summarised as mean = 40, SD = 5.1, because one observation was recorded as 50 instead of the correct 40.
**Find:** the correct mean and SD.
**Approach:** don't try to "adjust" the reported mean/SD directly — recover the (incorrect) **sum** and **sum of squares** first, correct *those*, then recompute the mean and SD from the corrected totals. This is the key technique: mean/SD are derived quantities, but sums are the things that are actually additive and correctable term-by-term.
**Work:**
\[
\text{Incorrect sum} = 100\times40=4000 \implies \text{Correct sum} = 4000-50+40=3990 \implies \text{Correct mean}=\frac{3990}{100}=39.9
\]
From \(\sigma=\sqrt{\frac1n\sum x_i^2-\bar x^2}\): \(5.1^2 = \frac{1}{100}(\text{Incorrect}\sum x_i^2)-40^2 \implies \text{Incorrect}\sum x_i^2 = 100(26.01+1600)=162601\).
\[
\text{Correct}\sum x_i^2 = 162601-50^2+40^2 = 162601-2500+1600=161701
\]
\[
\text{Correct } \sigma = \sqrt{\frac{161701}{100}-39.9^2} = \sqrt{1617.01-1592.01}=\sqrt{25}=5
\]
**Check:** the corrected SD (5) is smaller than the erroneous one (5.1) — sensible, since the mistaken 50 was an outlier relative to the true data, so removing it should *reduce*, not increase, apparent spread. ✓

---

## Quick Reference (inline)


| Measure                   | Ungrouped                         | Grouped (N = Σfᵢ)                                                                        |
| --------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------- |
| Range                     | Max − Min                        | Max − Min (of the values / class limits)                                                  |
| Mean deviation about\(a\) | \(\frac1n\sum\lvert x_i-a\rvert\) | \(\frac1N\sum f_i\lvert x_i-a\rvert\)                                                      |
| Variance                  | \(\frac1n\sum(x_i-\bar x)^2\)     | \(\frac1N\sum f_i(x_i-\bar x)^2 = \frac1{N^2}\left[N\sum f_ix_i^2-(\sum f_ix_i)^2\right]\) |
| Standard deviation        | \(\sqrt{\text{variance}}\)        | \(\sqrt{\text{variance}}\)                                                                 |
| Median (continuous)       | —                                | \(l+\frac{N/2-C}{f}\times h\)                                                              |
| Step-deviation SD         | —                                | \(\frac{h}{N}\sqrt{N\sum f_iy_i^2-(\sum f_iy_i)^2}\), \(y_i=\frac{x_i-A}{h}\)              |

**Transformation rules** (from the Miscellaneous section): shifting (\(x_i+a\)) changes the mean but **not** the variance; scaling (\(kx_i\)) changes the mean *and* multiplies variance by \(k^2\).

---

## Points to Ponder

> **Watch out:** The signed deviations \((x_i-\bar x)\) always sum to zero — that's a property of the mean, *not* evidence that there's no spread. Only after taking absolute values (mean deviation) or squares (variance) does the sum actually measure dispersion.

> **Watch out:** In the median formula for continuous data, \(C\) is the cumulative frequency of the class **before** the median class — using the median class's own cumulative frequency is a very common off-by-one error.

> **Watch out:** Adding a constant to every observation leaves variance **unchanged**; multiplying every observation by a constant \(k\) scales variance by \(k^2\). These are opposite behaviours and are easy to mix up under exam pressure (compare Examples 13 and 15 above).

> **Watch out:** The step-deviation shortcut (\(y_i=\frac{x_i-A}{h}\)) needs \(h\) to be a common factor of every deviation — for grouped data this requires equal class widths. Don't apply it blindly when widths differ or when the data has gaps between classes (first convert to continuous form by adjusting boundaries by ±0.5, as in Exercise 13.2 Q.12).

> **Watch out:** Median for even n (ungrouped/discrete) is the *mean of two middle terms*, not either term alone — and for odd n it's a single middle term, not an average. Confusing the parity rule is a frequent slip.

> **Watch out:** Mean deviation uses absolute values and so cannot be manipulated algebraically the way variance can (no clean "raw-score" expansion exists for M.D. the way it does for \(\sigma^2\)) — this is *why* standard deviation, not mean deviation, is the measure of dispersion used throughout later statistics and probability theory.

---

## Practice Bank (for your own working — not solved here)


| Topic                         | NCERT Exercise Questions                                                 |
| ------------------------------- | -------------------------------------------------------------------------- |
| M.D. about mean, ungrouped    | 13.1 Q1, Q2                                                              |
| M.D. about median, ungrouped  | 13.1 Q3, Q4                                                              |
| M.D. about mean, discrete     | 13.1 Q5, Q6                                                              |
| M.D. about median, discrete   | 13.1 Q7, Q8                                                              |
| M.D., continuous              | 13.1 Q9, Q10, Q11, Q12 (Q12 needs the ±0.5 continuity conversion first) |
| Mean & variance, ungrouped    | 13.2 Q1, Q2, Q3                                                          |
| Mean & variance, discrete     | 13.2 Q4, Q5, Q6 (Q6 by shortcut method)                                  |
| Mean & variance, continuous   | 13.2 Q7, Q8, Q9, Q10                                                     |
| Transformations / corrections | Misc. Ex. Q1–Q6                                                         |
