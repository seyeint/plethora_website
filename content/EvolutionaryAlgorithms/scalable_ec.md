## Scalable EC

<br> 

Much like the DL GPU acceleration age began around 2013 and completely changed the perspective on AI as it gradually became normalized. My view is that this is starting to occur with evolutionary computation.

----

Pre-2012: CPUs were primary for AI computation, then AlexNet came and around that time they were already leveraging GPU acceleration.

2013-2015: Nvidia introduced the cuDNN library, somehow democratizing this acceleration event.

2016-2020: AI chips emerge, like Google TPU. AI-specific GPU architectures like Nvidia Turing and Ampere were released.

2020 onward: Widespread adoption of GPU clusters.

---

This enabled larger and more complex networks to be built and reduced training times, which lead to an increase in ease of use and market adoption and integration.


Most of this new infrastructure foundations can be easily used to take the field of evolutionary computation into the next level. Instead of accelerating matrix operations, one accelerates evolutionary processes (which can be matrix operations too).

Examples of this already starting to take place are libraries like [EvoJax](https://cloud.google.com/blog/topics/developers-practitioners/evojax-bringing-power-neuroevolution-solve-your-problems) and frameworks like [EvoX](https://evox.readthedocs.io/en/latest/index.html).

Although not extremely invested, I do have a small [project](https://github.com/seyeint/Pulse_EVOX) with the intent of porting my thesis algorithms into these new frameworks as they evolve, and I'm looking forward the future of EC. 

In DL, we require label data (solutions) to create a model (function). In EC we require a function to create solutions. Both deal with combinatorial explosion, one is fully supervised, the other conceptually similar to reinforcement learning. There is a gap in future potencial between these.

<br>

### 
