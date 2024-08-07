## Why Not Deep Learning?
<br>

<div style="display: flex; justify-content: space-between;">
  <img src="https://pypi-camo.freetls.fastly.net/5c2b689dcf42509d74cf8220b6310e572ebb7858/68747470733a2f2f6769746c61622e7475652e6e6c2f32303034303336372f707962616f6261622f2d2f7261772f6d61696e2f696d616765732f747265652e706e67" width="700"/>
</div>

### Preface

Although this section will focus on deep learning, I want to (maybe superficially) address traditional machine learning methods and talk about why they have not been dethroned at all, since people often conflate both machine learning and deep learning markets. They are not competing, for now, and it's not only about performance:
<br><br>

### On irregular patterns

Neural networks are biased towards smooth continuous functions due to their structure and activation functions (even with those who attempt to mitigate this), while decision trees split data into regions, representing piece-wise constant functions. This is important when learning irregular patterns in the target function.
<br><br>


### On irrelevant features

Neural networks tend to be more affected by irrelevant variables due to their extraordinary capability to extract patterns out of noise. Decision tree methods are also influenced by uninformative features (especially if they're deep), but they are better at mitigating this issue by focusing on more informative features during the splitting process (where the computation of candidate nodes' gini impurity or variance takes place, which naturally leads to ignoring less informative ones).
<br><br>



### On rotational invariance

The natural orientation of tabular data is important, referring to how features are organized and related in their original form. In tree based methods, this orientation is respected, as they split on individual features.

In contrast, neural networks can produce the same output for different combinations of input features, potentially losing the significance of individual feature importances.

This preservation of feature orientation directly enhances model interpretability. By respecting the original structure of the data, tree-based models allow us to trace decisions back to individual features or feature interactions. This makes it easier to understand which features are driving predictions and how they're being used, a crucial aspect of interpretability.

Interpretability can be very important for decision-making. Sure, some traditional machine learning models are not exactly white boxes but on the grey spectrum, depending on one's skills to extract information from a model (train feature importance, test permutation importance, variable partial dependence and more). Deep learning models, however, are black boxes and the current literature on deep learning interpretability is insufficient to say the least.
<br><br>



### On data efficiency

Tree based models often perform better with limited data, as they don't require large amounts of data to learn meaningful patterns. They are making decisions based on individual feature thresholds, which can be effective even with few samples. Neural networks struggle with small datasets because they're designed to try to learn complex, non-linear relationships across all features simultaneously. With limited data, they will overfitting a lot of the times or fail to capture true patterns, potentially modeling noise.
<br><br>



### On a data science pipeline

As a human, one might not induce (a-priori problem knowledge) or deduce (initial distros/stats analytics) all useful column wise value nor inter-column non-linear relationships with the target.

Some think of modelling as the last part of a machine learning process, but it's important to know that extracting insights from what the model actually learned can re-ignite EDA all over again.