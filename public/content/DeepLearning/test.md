## Moving object segmentation overview & practical experiment 

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/seyeint/Vision_MOS/assets/36778187/45f09e71-d3b4-47a4-8ae4-081cc37c6a65" width="300"/>
  <img src="https://github.com/seyeint/Vision_MOS/assets/36778187/9e0f8368-c221-40b0-bb0b-5d445eb37906" width="300"/>
</div>

### Quick context on SAM
Foundational models like SAM enable flexible image level segmentation across multiple scenarios. 
Whether through boxes, text prompts and points (coordinates) or even authomatic general segmentation (grid-like point prompting), these vision models offer considerable freedom in their application.

SAM is composed by a powerful **image encoder**, a **prompt encoder** and a **mask decoder**.

- The image encoder is essentially a MAE (Masked Autoencoder), trained on incomplete input images to predict the missing parts, thus maximizing its ability to capture general features.
  This process creates a pre-trained Vision Transformer (ViT) that can then be fine-tuned for specific tasks, such as pixel classification, which is important for image segmentation.

- The prompt encoder translates various types of prompts referenced above into positional encodings. These encodings are then merged with the image encoding through summation or concatenation.
  More abstractly, this step focuses attention on specific locations within the image where segmentation is needed.

- The mask decoder grabs the encoded prompt tokens + initialized learnable mask tokens + special tokens like IoU (Intersection over Union, a quality estimator) and creates mask predictions and their IoU estimations.
  This creates a list of dictionaries, each holding information about its segmentation (a binary location map) and their quality metrics/other segmentation discriminator.

<sub>Its also important to refer that this model is trained on 1B labelled masks, more than 11M images and also handles ambiguity by being trained with multiple possible mask predictions for a single example prompt.
The main point of this is that just like one would not go for a full training pipeline of one's own LLM (disregarding the compute costs) due to the asymetry in data collection/annotation, vision is also starting to become foundational in the same way language is.
Even some narrow use cases might work better through finetuning of foundational models than actual self training and ground up building of personal solutions.</sub>

___
### Experimenting with Flow as a SAM prompt
In this specific experiment I'm trying have a solution that knows that the content I want to segment are only the moving parts (the opposite also can be done and useful, only static parts).

<sub>This works best with non-moving backgrounds or slow moving backgrounds. Another important question is why not simply use optical flow as the one and final segmentation solution and the reason is that the method itself is extremely incomplete as it deals only with noticing moving parts and can't really differentiate objects that lack boundaries and move at similar speeds (low relative speed difference).</sub>

For that, optical flow (uses vector field of pixel motion and struggles when there's little relative motion) is used in order to produce an innitial segmentation of moving elements that can be integrated with SAM as direct input or as used in the example, working as a prompt (using its prediction MOS - moving object score - that specifices if prompts are moving or not) that is added to the image embeddings ("RGB based") in order to discover these moving parts by incorporating appearance information.

___
### Possible next steps
Try to reverse the prompt, meaning segment only what's not moving for other purposes.

Test and implement image or video on top of chosen masks, creating an edited video.

Try to research a bit about parallelized inference as it would be nice to have this work for live applications such as streaming, where one can use the delay data (3 seconds or more) to pre-compute segmentation masks and obviously each frame can be inferenced independently of others, which is one of the ways I assume one can tackle the problem. Also test the inference speedups and quality with a greyscale channel input of one's images.
