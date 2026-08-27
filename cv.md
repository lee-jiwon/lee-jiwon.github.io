---
layout: page
title: "Curriculum Vitae"
permalink: "/cv/"
description: "Curriculum vitae of Jiwon Lee, Frank H. T. Rhodes Postdoctoral Fellow at the Cornell Population Center."
---

<p class="cv__actions">
  <a class="btn" href="{{ '/cv_jiwon_lee.pdf' | relative_url }}" download>Download PDF</a>
  {%- if site.cv_updated and site.cv_updated != "" %}
  <span class="cv__updated">Updated {{ site.cv_updated }}</span>
  {%- endif %}
</p>

<div class="cv__viewer">
  <object data="{{ '/cv_jiwon_lee.pdf' | relative_url }}#view=FitH" type="application/pdf" aria-label="Curriculum vitae of Jiwon Lee">
    <p>This browser cannot display the PDF inline. <a class="link" href="{{ '/cv_jiwon_lee.pdf' | relative_url }}">Download it instead</a>.</p>
  </object>
</div>
